import Joi from "joi";

export default class ValidateMessage{

    static validateMessage(message){
        const messageSchema= Joi.object({
            name:Joi.string().min(5).max(255).required(),
            email:Joi.string().min(5).max(255).email({
            minDomainSegments:2,tlds:{allow:['net','com']}
            }).required(),
            messageBody:Joi.string().min(10).max(1024).required()
        })
        return messageSchema.validate(message);
    }
    
}