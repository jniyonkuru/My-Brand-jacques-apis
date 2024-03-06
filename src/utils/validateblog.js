import Joi from "joi";

export default class ValidateBlog{
    static validateBlog(blog){
const blogSchema=Joi.object({
    blogTitle:Joi.string().min(5).max(255).required(),
    image:Joi.string().required(),
    blogBody:Joi.string().required(),
    author:Joi.string().required()
});
  return blogSchema.validate(blog);
    }
}