const sum=require("./sum");
test("addition of two numbers 1+2 will be 3",()=>{
    expect(sum(1,2)).toBe(3);
   // expect(sum(0,0)).toBe(0);
})
test("all arguments must be passed",()=>{
    expect(sum(0)).toBe("invalid argument");
})
