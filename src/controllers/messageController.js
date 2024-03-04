import Message from "../models/messagemodel.js";
import ValidateMessage from "../utils/validatemessages.js";
import _ from "lodash";

 export default class MessageController{
    static async messageRegister(req,res){
    const {error}=ValidateMessage.validateMessage(req.body);
  if(error)return res.status(400).json({
    status:"fail",
    message:error.details[0].message
  });
  try {
    const message= new Message(_.pick(req.body,['name','email','messageBody']));
  
    await message.save();
    return res.status(200).json({
    status:"success",
    message:"message sent successfully"
   })
    
  } catch (error) {
     return res.status(500).json({
        status:"error",
        message:error.message
    })
    
  }

    }
    static async getAllMessages(req,res){

    try {
      const messages=await Message.find()
      if(!messages)return res.status(400).json({
        message:"no messages"
      })
      return res.status(200).json({
        status:"success",
        data:messages
      })
      
    } catch (error) {
      return res.status(500).json({
        status:'error',
        message:error.message
      })
      
    }

    }
    static async getOneMessage(req,res){
      try {
        const message= await Message.findById(req.params.id);
        return res.status(200).json({
          status:"success",
          data:message
        })
        
      } catch (error) {
        return res.status(500).json({
          status:'error',
          message:error.message
        })
        
      }
    }
    static async deleteOneMessage(req,res){
   
  try {
    const message= await Message.findByIdAndDelete(req.params.id);
       return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      status:'error',
      message:error.message
    })
  }     
     
    }


 }


