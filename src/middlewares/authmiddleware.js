import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default class AuthMiddleware {
  static  isAuthenticated(req, res, next) {
    try{
    const {authorization}=req.headers;
    if (!authorization){
      return res.status(401).json({
        status: "fail",
        message: "no token provided",
      });
    };
    const token=authorization.split(' ')[1];
    if(!token){
      return res.status(401).json({
        status:'fail',
        message:"Unauthorised action"
      })
    }
      const user = jwt.verify(token ,process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (ex){
        return res.status(400).json({
            status:"error",
          message:ex.message
        })
    }
  }
  static checkRole( req,res,next){
     const user=req.user;
     if(!user.isAdmin){
      return res.status(401).json({
        status:"fail",
        message:"not have permission to perform this action."
      });
      
     }
     return next();
  }
}
