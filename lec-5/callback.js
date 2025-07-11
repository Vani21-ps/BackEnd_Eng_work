let account_balance = 200000;

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


function buyProduct(product_name ){
   return new Promise((resolve,reject)=>{
let isProduct = null;
for(let i = 0 ; i < product.length ; i++){
    if(product[i].name == product_name){
     
        isProduct = product[i];
        break;
    }
}
if(!isProduct){
    return reject("product is not available" );
}
else{
     return resolve( isProduct.amount);
}
console.log(isProduct);
})
}


function deductAmount(amount){
    return new Promise((resolve,reject)=>{
if(account_balance >= amount){
    account_balance = account_balance - amount;
    return resolve("yout product is purchased");
}
else{
    return reject("Insufficient Balance");
}
    })
}

/*buyProduct("IPhone")
    .then((data)=>{
      return  deductAmount(data);
       //  console.log(data)
    })
    .then((message)=>{
        console.log(message)
        console.log(account_balance);
    })
    .catch((err)=>{
console.log(err);
    })*/
   async function myfun(){
    try{
        let amount=await buyProduct("IPhone")
    //console.log(amount);
    let message=await deductAmount(amount);
    console.log(message);
    }catch(error){
        console.log(error)
    }
   }
   console.log(myfun())
console.log("start");
console.log("end");
   

