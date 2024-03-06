import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  connectDB  from './src/database/connectdb.js ';
import users from './src/routes/userroute.js';
import messages from './src/routes/messageroute.js'
import blogs from './src/routes/blogroute.js'
import comments from './src/routes/commentroute.js'
dotenv.config()
connectDB();
const app=express();
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send("welcome to my api");
})
app.use('/api/users',users);
app.use('/api/messages/',messages);
app.use('/api/blogs',blogs);
app.use('/api/comments',comments)

app.get('*',(req,res)=>{
    res.status(404).send("page not found");
})
const port=process.env.PORT||4001;
app.listen(port,()=>{
    console.log(`listening to port:${port}`);
});


