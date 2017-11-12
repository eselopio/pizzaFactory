const express = require('express');
const app = express();

let cluster = require('cluster');
let http = require('http');
let cors = require('cors');
let numCPUs = require('os').cpus().length;
let config = require('./config/config.json');

if (cluster.isMaster) {
    console.log('Clustering: I will start ' + numCPUs + ' workers...');
    
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online now!');
      });
      cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
      });
} else{
    let PORT = process.env.PORT || config.port || 3000;
    
    let app = express();


    app.listen(PORT, () => {
        console.log(config.name + ' listening on port ', PORT);
        });
}






