const fs=require("fs");
const{read, write}=require("../IO/io.js");
// //read demo.txt and demo2.txt and write in final.txt
// fs.readFile("../users.txt","utf-8",function(err,data1){
//     if(err) return console.log(err);
//     let users1=JSON.parse(data1);
//     fs.readFile("../users2.txt","utf-8",function(err,data2){
//         if(err) return console.log(err);
//         // let data2=data;
//         let users2 = JSON.parse(data2);
//         console.log(users2);
//         let AllUsers= users1.concat(users2);
//         console.log(AllUsers);
//        // let result=data1.trim()+"\n"+data1+data2.trim();
//         fs.writeFile("./AllUsers.txt",JSON.stringify(AllUsers),function(err){
//             if(err) return console.log(err);
//             console.log("done");
//         })
//     })
// })
async function task(file1 , file2 , file3){
   let users= await read(file1);
   console.log(users)
   let users2 = await read(file2);
//    let a = JSON.parse(user1);
//    let b = JSON.parse(user2);
   let AllUsers = users.concat(users2);
   let mes = await write(file3, JSON.stringify(AllUsers));
   console.log(mes);          

}
task("../users.txt", "../users2.txt", "./AllUsers.txt");
