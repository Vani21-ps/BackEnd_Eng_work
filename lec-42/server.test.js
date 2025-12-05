const mongoose = require('mongoose');
let{MongoMemoryServer}=require("mongodb-memory-server");
let User=require("./model/user.model");
const request = require('supertest');
const app = require('./server');
let mongoServer;
beforeAll(async()=>{
    mongoServer=await MongoMemoryServer.create();
    let url=mongoServer.getUri();
    await mongoose.connect(url)
})
afterEach(async()=>{
    await User.deleteMany();
})
afterAll(async()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
})
describe("POST /api/users/register",()=>{
it(" should return user already exists if email is vanijain1982@yahoo.com",async()=>{
    await User.create({
        name:"Vani Jain",
        email:"vanijain1982@yahoo.com",
        password:"password123"
    })

let response= await request(app).post("/api/users/register").send({
    name:"Vani Jain",
    email:"vanijain1982@yahoo.com",
    password:"password123"
})
expect(response.body.message).toBe("user already exists");
})})
