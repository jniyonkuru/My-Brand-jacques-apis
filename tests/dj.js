import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
let mongoServer;


const connect= async ()=>{
    await mongoose.disconnect();
    mongoServer= await MongoMemoryServer.create();
    const mongUri= mongoServer.getUri();
    await mongoose.connect(mongUri);
};
const close= async ()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
}
const clear = async ()=>{
    const collections = mongoose.connection.collections;
    for(const key in collections){
        await collections[key].deleteMany();
    }
}

export { clear, close, connect };
