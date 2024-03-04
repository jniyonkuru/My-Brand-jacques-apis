import express from 'express';
import {JWT} from '../utils/jwtsign.js'
import _ from 'lodash';
import bcrypt from 'bcrypt';
import User from '../models/usermodel.js';
import Validation  from '../utils/validateUsers.js'
export default  class UserController{
    static async registerUser(req,res){
    try {
       const{error}=Validation.validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user=await User.findOne({email:req.body.email});
    if(user)return res.status(400).send('User already registered');
    user=new User(_.pick(req.body,['name','email','password','isAdmin','confirmPassword']));
    const salt= await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt)
  
   await user.save();
   res.status(200).json({
    status:'success',
    data:_.pick(user,['_id','name','email',"isAdmin"])
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
            if(!user)return res.status(400).json({
                message:"user with the given id was not found"
            })
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

    static async updateUser(req,res){
        try {
          const {error}=validateUserUpdate(req.body);
          if(error) return res.status(400).send(error.details[0].message);
          const user = await User.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
          if(user)return res.status(200).json({
            status:"success",
            data:_.pick(user,["_id","name","email","role"])
          })
            
        } catch (error) {
            return res.status(500).json({
                status:"error",
                message:error.message
            })
            
        }
    }

    static async  loginUser(req,res){
        try {
            const {error}=Validation.validateLogin(req.body);
             if(error) return res.status(404).json({
                status:"error",
                message:error.details[0].message
             })

            const {email,password}= req.body;
            const foundUser= await User.findOne({email});
            if(!foundUser)return res.status(404).json({
                status:"fail",
                message:"user was not found"
            })
            const isPasswordValid= await bcrypt.compare(password,foundUser.password);
            if(!isPasswordValid) return res.status(400).json({
                status:"fail",
                message:"invalid credentials"
            })

            const token= JWT.generateJwt({
                userId:foundUser._id,
                userName:foundUser.name,
                isAdmin:foundUser.isAdmin
            })
            return res.header('x-auth-token',token).status(200).json({
                status:"success",
                message:"loggedIn successfully"
            })
            
        } catch (error) {
             return res.status(500).json({
                status:"error",
                message:error.message
             })
            
        }

    }

}

