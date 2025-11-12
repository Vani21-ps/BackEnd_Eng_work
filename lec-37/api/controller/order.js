const OrderBook = require('../service/orderbook');
const ob=new OrderBook("BTCUSD");
let {publisher}=require("../../shared/index.js");

module.exports.postPlaceOrder=async(req,res)=>{
let {type,side,price,quantity,userName}=req.body;

let response= ob.placeOrder(price,quantity,type,side,userName);
await publisher.connect();
await publisher.PUBLISH("book:update",JSON.stringfy(response.book));
res.json(response);
}
