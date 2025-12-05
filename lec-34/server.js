const express = require('express');
let { Queue, Worker } = require('bullmq');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let prediction_queue = new Queue("predict",{
    connection:{
        host:'localhost',
        port:6379,
    },
});
async function addJobs(){
    let job = await prediction_queue.add('myJobName',{data:'some data'});
    return job;
}
//addJobs()
//then((job)=>{
   // console.log(job.id)
//})

//comsumer
const myWorker = new Worker('predict', async job => {
console.log(job.id);
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});
app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});