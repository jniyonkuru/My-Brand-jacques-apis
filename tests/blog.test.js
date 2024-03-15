import {app} from '../index.js'
import request from 'supertest'
import {clear, close, connect} from './dj.js'
import path from 'path'

// import { connect } from 'mongoose';

beforeAll(async ()=>{await connect()});
beforeEach(async ()=>await clear());
afterAll(async ()=>await close())

describe('blogs end points',()=>{
    let  token=''
    const image=path.resolve(__dirname,'../uploads/blog3.jpg')
    beforeAll(async()=>{
        const response = await request(app).post('/api/users').send({
            name:"goreth18",
            email:"mujawayezugorethe18@gmail.com",
            password:"123@goretH",
            confirmPassword:"123@goretH",
            isAdmin:true
        })

        const loginResponse = await request(app).post('/api/users/login').send({
            email:response.body.data.email,
            password: "123@goretH"
        })
         token= loginResponse.body.token;
    })


describe('POST /api/blogs/',()=>{
    
    it('It should store  a new blog',  async ()=>{
        const response = await request(app)
        .post('/api/blogs')
        .set('Authorization',`Bearer ${token}`)
        .field('blogTitle','this is the title')
        .field('blogBody','this is the body of a blog')
        .attach('image',image)
        .expect(200);
    })

    it('User should not be to post a blog if not logged in',async()=>{
     const response= await request(app)
     .post('/api/blogs/')
     .send({blogTitle:"Title",blogBody:"a body"})
     .expect(401)
     .expect({status:"fail",message:"no token provided"})
    })
    it('user should not be able to post a blog if the a title is missing',async()=>{
        const response= await request(app)
        .post('/api/blogs')
        .set('Authorization',`Bearer ${token}`)
        .field('blogBody','this is the body of a blog')
        .attach('image',image)
        .expect(400)
    })
    it('user should not be able to post a blog if the a title is blog body is missing',async()=>{
        const response= await request(app)
        .post('/api/blogs')
        .set('Authorization',`Bearer ${token}`)
        .field('blogTitle','this is the title')
        .attach('image',image)
        .expect(400)
    })

        // The status should be 401
        // The message should be 'unauthorized'
    // The user should not be able to post a blog if a title is missing
    // The user should not be able to post a blog if a body is missing
    // The user should not be able to post a blog if an image is missing
    // The user should get back the status 204 if a blog was successfully created

})
 
 describe('GET /api/blogs/',()=>{
    it('It should get a status of 200 and return all blogs',async()=>{
        const response= await request(app)
        .get('/api/blogs/')
        .set('Authorization',`Bearer ${token}`)
        .expect(200)
        .expect({status:'success',data:[]})
    })
    //  the  user should not get all blogs when he is not an logged in
    it(' the user should not get all blogs when he is not  logged in',async()=>{
        const response = await request(app)
        .get('/api/blogs/')
        .expect(401)
        .expect({status:"fail",message:"no token provided"})
    })
    
 })

})