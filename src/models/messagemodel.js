import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({
 name:{
    type:String,
    minlength:5,
    maxlength:255,
    required:true
 },
 email:{
    type:String,
    minlength:5,
    maxlength:255,
    required:true

 },
 messageBody:{
    type:String,
    minlength:5,
    maxlength:1024,
    required:true
 },
 date:{
    type:Date,
    default:Date.now()
 }
})
const Message=mongoose.model('Message',messageSchema);

 export default Message;

 