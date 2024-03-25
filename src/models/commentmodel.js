
import mongoose, { Schema } from "mongoose";
const commentSchema= new mongoose.Schema({
   commentBody:{
    type:String,
    required:true,
    minlength:5,
    maxlength:2048
   },
   author:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },
   blog:{
    type:Schema.Types.ObjectId,
    ref:"Blog",
    required:true
   },
   createdAt:{
    type:Date,
    default:Date.now()
   },
   updatedAt:{
    type:Date,
    default:Date.now()
   }

})

const Comment =mongoose.model("Comment",commentSchema);
 export default Comment;