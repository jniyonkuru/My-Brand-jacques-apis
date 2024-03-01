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
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    role:{
        type:String,
        default:'user'
    },
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
