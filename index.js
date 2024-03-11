import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  connectDB  from './src/database/connectdb.js ';
import users from './src/routes/userroute.js';
import messages from './src/routes/messageroute.js'
import blogs from './src/routes/blogroute.js'
import comments from './src/routes/commentroute.js'
import swaggerSpec from './src/utils/swagger.js'

dotenv.config()
connectDB();

const app=express();
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send("welcome to my api");
})

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       -Users
 *       description:list all users
 *       responses:
 *       200:list of all users
 *        
 *
 *
 */

app.use('/api/users',users);
app.use('/api/messages/',messages);
app.use('/api/blogs',blogs);
app.use('/api/comments',comments)


const port=process.env.PORT||4001;
app.listen(port,()=>{
    console.log(`listening to port:${port}`);
});
swaggerSpec(app,port);
app.get('*',(req,res)=>{
    res.status(404).send("page not found");
})


