import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
  async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected');
    } catch (error) {
        console.log('error happened ',error.message)
    }
}
export default connectDB;