import Joi from 'joi';

  export function validateUser(user){
    const userSchema=Joi.object({
        name:Joi.string().required().min(5).max(255),
        email:Joi.string().email({
            minDomainSegments:2,tlds:{allow:['net','com']}
        }).required(),
        password:Joi.string().min(5).max(30).required()
    })
    return userSchema.validate(user);
    
}