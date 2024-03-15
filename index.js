import express from 'express';
import cloudinary from 'cloudinary'
import cors from 'cors';
import dotenv from 'dotenv';
import  connectDB  from './src/database/connectdb.js';
import users from './src/routes/userroute.js';
import messages from './src/routes/messageroute.js'
import blogs from './src/routes/blogroute.js'
import comments from './src/routes/commentroute.js'
import swaggerSpec from './src/utils/swagger.js'
import portfolio from './src/routes/portfolioroute.js'

dotenv.config()
connectDB();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET 
})

export const app = express();
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send("welcome to my api");
})

app.use('/api/users',users);
app.use('/api/messages/',messages);
app.use('/api/blogs',blogs);
app.use('/api/blog',comments)
app.use('/api/portfolio',portfolio)


const port=process.env.PORT||4001;
app.listen(port,()=>{
    console.log(`listening to port:${port}`);
});
swaggerSpec(app,port);
 app.get('*',(req,res)=>{
    res.status(404).send("page not found");
})


