import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import User from '../models/usermodel.js';
import { validateUser }  from '../utils/validateUsers.js'
export default  class UserController{
    static async registerUser(req,res){
    try {
       const{error}=validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    let user=await User.findOne({email:req.body.email});
    if(user)return res.status(400).send('User already registered');
    user=new User(_.pick(req.body,['name','email','password','role']));
    const salt= await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt)
  
   await user.save();
   res.status(200).json({
    status:'success',
    data:_.pick(user,['_id','name','email',"role"])
   })
   
    } catch (error) {
        res.status(500).json({
            status:'error',
            message:error.message
        })   
    }

    }

    static async  getAllUsers(req,res){
        try {
            const AllUsers= await User.find().select('-password');
           return  res.status(200).json({
            status:'success',
            data:AllUsers
           })
        } catch (error) {
           return  res.status(500).json({
            status:'error',
            message:error.message
           });  
        }
    }
    static async  getOneUser(req,res){
        try {
            const user= await User.findById(req.params.id).select('-password');
           return  res.status(200).json({
            status:'success',
            data:user
           })
        } catch (error) {
           return  res.status(500).json({
            status:'error',
            message:error.message
           });  
        }
    }
    static async deleteOneUser(req,res){
        try {
            const user=await User.findByIdAndDelete(req.params.id)
            if(!user)return res.status(500).json({
                message:"user was not found"
            })
             return res.status(204).send();
        } catch (error) {
            return res.status(500).json({
                status:'error',
                message:error.message
            })  
            
        }   

    }

}

