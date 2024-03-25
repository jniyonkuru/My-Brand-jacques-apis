import Joi from 'joi';

export  default class Validation{

    static   validateUser(user){
        const userSchema=Joi.object({
            name:Joi.string().required().min(5).max(255),
            email:Joi.string().email({
                minDomainSegments:2,tlds:{allow:['net','com']}
            }).required(),
            password: Joi.string()
            .min(8)
            .max(255)
            .required()
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
            .messages({
              'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            }),
          confirmPassword: Joi.ref('password')
        }).with('password', 'confirmPassword')
        return userSchema.validate(user);
        
    }

    static validateUserUpdate(user){
        const userUpdateSchema=Joi.object({
            name:Joi.string().required().min(5).max(255)
        })
        return userUpdateSchema.validate(user);
    }

    static validateLogin(user){
        const userLoginSchema=Joi.object({
            email:Joi.string().email({
                minDomainSegments:2,tlds:{allow:['net','com']}
            }).required(),
            password:Joi.string().min(5).max(30).required()
        })
        return userLoginSchema.validate(user);
    }
  




}

 


