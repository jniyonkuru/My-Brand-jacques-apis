import Joi from "joi";

export default class ValidatePortfolio{

    static validatePortfolio(portfolio){
   const portFolioSchema=Joi.object({
    workUrl:Joi.string().min(5).required(),
    workTitle:Joi.string().min(5).max(255).required()
})
     return portFolioSchema.validate(portfolio)
    }
}

