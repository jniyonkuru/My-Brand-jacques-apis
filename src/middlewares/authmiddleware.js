import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default class AuthMiddleware {
  static  isAuthenticated(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({
        status: "fail",
        message: "no token provided",
      });
    try {
      const user = jwt.verify(req.header("x-auth-token") ,process.env.JWT_SECRET);
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
