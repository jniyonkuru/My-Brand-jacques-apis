import Comment from '../models/commentmodel.js'
import _ from "lodash";
import ValidateComment from '../utils/validatecomment.js';
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export default class CommentsController{
    static  async writeComment(req,res){
        const {error}=ValidateComment.validateComment(req.body);
        if(error)return res.status(400).json({
            status:"error",
            message:error.details[0].message
        })
        const token=req.header('x-auth-token');
         if(!token) return res.status(401).json({
            status:'fail',
            message:" you  don't have the permission to perform  this action"
         })
         const decoded= jwt.verify(token,process.env.JWT_SECRET)
        try {
          const comment= new Comment(_.pick(req.body,['commentBody']));
          comment.blog=req.params.id
          comment.author=decoded.userId;
          await comment.save();
          return res.status(204).send();
        } catch (error) {
            return res.status(500).json({
                status:"error",
                message:error.message
            })
            
        }
    }
    static async getAllComments(req,res){
       try {
        const allComments=await Comment.find();
        return res.status(200).json({
            status:"success",
            data:allComments
        })
        
       } catch (error) {
        return res.status(500).json({
            status:'error',
            message:error.message
        })
        
       }
    }
    static async updateComment(req,res){
        try {
        const comment= await Comment.findByIdAndUpdate(req.params.id,{commentBody:req.body.commentBody,updatedAt:Date.now()},{new:true})
        return res.status(200).json({
            status:"success",
            message:"comment updated"
        })
        } catch (error) {
            return res.status(500).json({
                status:'error',
                message:error.message
            })  
        }

    }
    static  async deleteComment(req,res){
       try {
        const comment = await  Comment.findByIdAndDelete(req.params.id,)
        return res.status(204).send()
        
       } catch (error) {
        return res.status(500).json({
            status:"error",
            message:error.message

        })
        
       }
 
    }
}