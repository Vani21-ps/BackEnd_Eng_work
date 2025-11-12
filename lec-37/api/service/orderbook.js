
class OrderBook{
    constructor(symbol){
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this.currentPrice = null;
    }

    _sort(side){
        if(side=="BUY"){
            console.log("AAAA");
            this.bids.sort((a,b)=>{
                if(a.price != b.price){
                    return b.price - a.price; //sort according to price (higher first)
                }
                return a.timestamp - b.timestamp; //sort according to time
            }) //lexiographically
        }
        else{
            this.ask.sort((a,b)=>{
                if(a.price != b.price){
                    return a.price - b.price; //sort according to price (lower first)
                }
                return a.timestamp - b.timestamp; //sort according to time
            }) //lexiographically
        }
    }

    placeOrder(price,quantity,type,side,userName){
        let order = {
            symbol : this.symbol,
            orderId : Math.floor(Math.random()*1000000),
            side: side,
            type: type,
            price: Number(price),
            originalQty: quantity,
            executedQty: 0,
            remainingQty: quantity,
            user: userName,
            timestamp: Date.now()
        }

        if(order.type=="LIMIT"){
            let result = this._LimitMatch(order);
            if(result.remainingQty > 0){
                if(order.side=="BUY"){
                    this.bids.push(order);
                    this._sort("BUY");
                } else {
                    this.ask.push(order);
                    this._sort("SELL");
                }
            }
        } else {
            let result = this._MarketMatch(order);
        }
       
    }

    _LimitMatch(order){
        if(order.side=="BUY"){
            let askArr = this.ask;
            while(order.remainingQty > 0 && askArr.length > 0){
                let top = askArr[0];
                if(top.price <= order.price){
                    let buyQuantity = Math.min(top.remainingQty, order.remainingQty);
                    //update-->order
                    order.executedQty += buyQuantity;
                    order.remainingQty -= buyQuantity;

                    top.executedQty += buyQuantity;
                    top.remainingQty -= buyQuantity;

                    if(top.remainingQty == 0){
                        askArr.shift(); //remove the top order
                    }
                } else {
                    break;
                }
            }
        }

        else if(order.side=="SELL"){
            let bidArr = this.bids;
            let i = 0;
            while(i < bidArr.length && order.remainingQty > 0 && order.price <= bidArr[i].price){
                let top = bidArr[0];
                if(top.price >= order.price){
                    let sellQuantity = Math.min(order.remainingQty, top.remainingQty);

                    order.executedQty += sellQuantity;
                    order.remainingQty -= sellQuantity;
                    top.remainingQty -= sellQuantity;

                    if(top.remainingQty === 0){
                        bidArr.shift(); //remove top from bids
                    }
                } else {
                    break;
                }
            }
        }
        else{
            return "Invalid order side";
        }

        return order;
    }

    _MarketMatch(order){
        if(order.side=="BUY"){
            let askArr=this.ask;
            while(order.remainingQty>0 && askArr.length>0){
                let top=askArr[0];
                let buyQuantity=Math.min(top.remainingQty,order.remainingQty);

                order.executedQty+=buyQuantity;
                order.remainingQty-=buyQuantity;

                top.executedQty+=buyQuantity;
                top.remainingQty-=buyQuantity;

                if(top.remainingQty==0){
                    askArr.shift(); //remove the top order
                }
            }
        }
        else if(order.side=="SELL"){
            let bidArr=this.bids;
            while(order.remainingQty>0 && bidArr.length>0){
                let top=bidArr[0];
                let sellQuantity=Math.min(top.remainingQty,order.remainingQty);

                order.executedQty+=sellQuantity;
                order.remainingQty-=sellQuantity;

                top.executedQty+=sellQuantity;
                top.remainingQty-=sellQuantity;

                if(top.remainingQty==0){
                    bidArr.shift(); //remove the top order
                }
            }
        }
    }
}


//     let BTCUSDOrderBook=new OrderBook("BTC_USD");
//     BTCUSDOrderBook.bids.push({price:5,quantity:1,type:"LIMIT",user:"Vani"});
//     BTCUSDOrderBook.bids.push({price:4,quantity:2,type:"LIMIT",user:"Anu"});
//     BTCUSDOrderBook.bids.push({price:5,quantity:1,type:"LIMIT",user:"Ravi"});
//     console.log(BTCUSDOrderBook);
//     BTCUSDOrderBook._sort("BUY");
//     console.log(BTCUSDOrderBook.bids);
//     BTCUSDOrderBook.bids.push({price:5,quantity:4,type:"LIMIT",user:"aa"});
//     BTCUSDOrderBook.bids.push({price:4,quantity:5,type:"LIMIT",user:"A"});
//     BTCUSDOrderBook.bids.push({price:5,quantity:4,type:"LIMIT",user:"R"});
// console.log(BTCUSDOrderBook.bids);

let BTCUSDOrderBook=new OrderBook("BTC_USD");
BTCUSDOrderBook.placeOrder("100",3,"LIMIT","BUY","VANI");
BTCUSDOrderBook.placeOrder("101",2,"LIMIT","SELL","ANU");
BTCUSDOrderBook.placeOrder("99",1,"LIMIT","SELL","RAVI");
console.log(BTCUSDOrderBook);
BTCUSDOrderBook.placeOrder("100",3,"LIMIT","BUY","VANI");
BTCUSDOrderBook.placeOrder("101",2,"LIMIT","SELL","ANU");
BTCUSDOrderBook.placeOrder("99",1,"LIMIT","SELL","RAVI");
console.log(BTCUSDOrderBook);
module.exports = OrderBook;