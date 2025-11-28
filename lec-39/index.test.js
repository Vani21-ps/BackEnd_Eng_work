const app= require("./index");
const request = require("supertest");

describe("POST /sum", () => {
    it("it should return addition of 2 numbers",async()=>{
let response= await request(app).post("/sum").send({
    a:1,
    b:2
});

expect(response.body.data).toBe(3)
})
it("should return invalid argument when one argument is missing",async()=>{
    let response=await request(app).post("/sum").send({
    a:1
})
expect(response.body.message).toBe("invalid argument");
})
})

describe("POST /multiply", () => {
    it("it should return multiplication of 2 numbers",async()=>{
let response= await request(app).post("/multiply").send({
    a:3,
    b:4
});
expect(response.body.data).toBe(12)
})
})
