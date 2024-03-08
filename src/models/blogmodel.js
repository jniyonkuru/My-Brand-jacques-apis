
import mongoose, { Schema } from "mongoose";
import User from "./usermodel.js";

const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true
    },
 image:{
    type:String,
    required:true
 },
 blogBody:{
    type:String,
    required:true
 },
 author:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
 },
 createdAt:{
    type:Date,
    default:Date.now(),
    required:true
 },
 updatedAt:{
    type:Date,
    default:Date.now(),
    required:true
 },
 likes:{
    type:Number,
    default:0
 },
 likedBy:[String],

})
const Blog=mongoose.model('Blog',blogSchema);

export default Blog;
