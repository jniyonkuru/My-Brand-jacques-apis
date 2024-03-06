import Blog from "../models/blogmodel.js"
import ValidateBlog from "../utils/validateblog.js";
import _ from "lodash"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export default class BlogController{
    static async writeBlog(req,res){
        const {error}=ValidateBlog.validateBlog(req.body);
        if(error) return res.status(400).json({
            status:"error",
            message:error.details[0].message
        })
      try {
        const blog= new Blog(_.pick(req.body,['blogTitle','image','author','blogBody']));
      await blog.save()
      return res.status(204).send()
      } catch (error) {
        return res.status(500).json({
            status:"error",
            message:error.message
        })
        
      }
    }
    static async updateBlog(req,res){
     const {error}=ValidateBlog.validateBlog(req.body);
     if(error)return res.status(400).json({
        status:"error",
        message:error.details[0].message}
     );
     try {
        const blog= await Blog.findByIdAndUpdate(req.params.id,{blogTitle:req.body.blogTitle,image:req.body.image,author:req.body.author,updatedAt:Date.now()})
       return  res.status(204).send()
     } catch (error){
       return res.status(500).json({
        status:"error",
        message:error.message
       }) 
        
     }
}
static async getAllBlogs(req,res){
    try {
        const allBlogs= await Blog.find();
        return res.status(200).json({
            status:"success",
            data:allBlogs,
        })
        
    } catch (error) {
        return res.status(500).json({
            status:"error",
            message:error.message
        })
        
    }
}
static async getOneBlog(req,res){
    try {
        const blog=await Blog.findById(req.params.id);
        return res.status(200).json({
            status:"success",
            data:blog
        }) 
    } catch (error) {
        return res.status(500).json({
        status:"error",
        message:error.message
        })
        
    }
}
static async deleteBlog(req,res){
    try {
        const blog=await Blog.findByIdAndDelete(req.params.id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            status:"error",
            message:error.message
        })
        
    }
}
static async likeBlog(req,res){
try {
    const decoded=jwt.verify(req.header('x-auth-token'),process.env.JWT_SECRET);
    const userId=decoded.userId;
    const likedBlog= await Blog.findOne({_id:req.params.id,likedBy:{$in:userId}})
    if(likedBlog) return res.status(400).json({
        status:"fail",
        message:"You already liked the blog"
    })
  const blog =await Blog.findByIdAndUpdate(req.params.id,{$push:{likedBy:userId},$inc:{likes:1},$pull:{dislikedBy:userId}},{new:true})
  res.status(200).json({
    status:'success',
    message:{
        message:"you liked a post",
        data:blog.likedBy
    },
    
  })  

} catch (error) {
    return res.status(500).json({
        status:'error',
        message:error.message
    })
    
}
}
static async dislikeBlog(req,res){
    
    try {

   const decoded=jwt.verify(req.header('x-auth-token'),process.env.JWT_SECRET);
    const userId=decoded.userId;
    const likedBLog= await Blog.findOne({_id:req.params.id,likedBy:{$in:userId}});
    // const dislikedBLog= await Blog.findOne({_id:req.params.id,dislikedBy:{$in:userId}});
    if(!likedBLog)return res.status(400).json({
        status:'fail',
        message:'You did not like the post before'
    }) 
    // if(dislikedBLog) return res.status(400).json({
    //     status:"fail",
    //     message:" you already disliked the post"
    // })
    const blog=await Blog.findByIdAndUpdate(req.params.id,{$push:{dislikedBy:userId},$pull:{likedBy:userId},$inc:{likes:-1}},{new:true})

      return res.status(200).json({
        status:"success",
        message:"you disliked a post"

      })
        
    } catch (error) {

        return res.status(500).json({
            status:'error',
            message:error.message
        })
        
    }


}

}