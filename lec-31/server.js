const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8082 });

//wss.on("connection", function(socket) {
   // console.log('Client connected');
  //  socket.send("welcome!!");
    //setInterval(()=>{
       // socket.send("reliance stock price is" +" "+ Math.random())},1000) 
//socket.on("message", function(message) {
//console.log(message.toString());
//if(message.toString === "ping") {
   // socket.send("ping")
   // }else{
      //  socket.send("unknown message")}
  //  })
//})
//BROADCASTING
let allSockets=[]
wss.on("connection", function(socket) {
    console.log('Client connected');
    allSockets.push(socket)
    //console.log(allSockets);
    socket.on("message", function(message) {
        allSockets.forEach((s)=>{
            s.send(message.toString())
        })
    })
})