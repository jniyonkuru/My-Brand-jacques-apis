import Joi from "joi"

export default class ValidateComment{

    static  validateComment(comment){
        const commentSchema=Joi.object({
            commentBody:Joi.string().min(5).max(2048).required()
        })
        return commentSchema.validate(comment);
    }

}