
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
        trim:true,
    },
    confirmPassword:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
        trim:true,
    },
    isAdmin:{
        type:Boolean,
        default:false}
        ,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
        type:Date,
        default:Date.now()
    }
    
})

const User=mongoose.model('User',userSchema)

 export  default User;
