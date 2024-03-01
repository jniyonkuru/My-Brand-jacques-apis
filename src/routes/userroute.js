import express from 'express';
import _ from 'lodash';
import bcrypt from 'bcrypt';
const router=express.Router();
import User from '../models/usermodel.js';
import { validateUser } from '../utils/validateUsers.js';
router.post('/',async(req,res)=>{
    const{error}=validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    let user=await User.findOne({email:req.body.email});
    if(user)return res.status(400).send('User already registered');
    user=new User(_.pick(req.body,['name','email','password','role']));
    const salt= await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt)
  
   await user.save();
   
 res.send(_.pick(user,['_id','name','email']))
});

 export default router;