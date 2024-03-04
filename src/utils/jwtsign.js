import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export class JWT{
    static generateJwt(data,exp='1d'){
        return jwt.sign(data,process.env.JWT_SECRET,{expiresIn:exp})
    }
}