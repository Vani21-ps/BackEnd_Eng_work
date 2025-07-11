let product=[
      {
        name :"IPhone",
        amount:70000,
        quantity:1
    },
    {
        name :"samsung",
        amount:7000,
        quantity:10
    },
]

// function buyProduct(product_name , cb){

//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }


let account_balance = 200000;
buyProduct("IPhone" , function(err , amount) {  
// console.log("product is purchased");
if(err) return console.log(err)
    console.log(amount);
deductAmount(amount , function(err , message){
    if(err) return console.log(err);
    console.log(message);
})
});



function buyProduct(product_name , cb){
let isProduct = null;
for(let i = 0 ; i < product.length ; i++){
    if(product[i].name == product_name){
     
        isProduct = product[i];
        break;
    }
}
if(!isProduct){
    cb("product is not available" , null)
}
else{
    cb(null , isProduct.amount);
}
console.log(isProduct);
}

function deductAmount(amount,cb){
if(account_balance >= amount){
    account_balance = account_balance - amount;
    console.log("yout product is purchased");
}
else{
    cb("Insufficient Balance");
}

}