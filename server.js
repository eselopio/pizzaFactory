'use strict';

require('./utils/autoload')();
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
    
    let Router = autoload('./app/Router');
    let app = express();
    let server = http.createServer(app);

    /* MIDDLEWARE */
    require('./config/middleware')(app, express);
  
    app.use(cors());
  
    /* ROUTES */
    Router.forEach(route => {
      app.use(route.path, route.middleware, route.handler);
    });

    /* ERRORS */
    app.use(function(req, res, next) {
      res.status(404);

      res.json({
        error: 'Not found'
      });
    });

    app.use(function(err, req, res, next) {
      console.log(err.name);
      if (err.name === 'UnauthorizedError') {

        res.status(401).json({
          error: 'Please send a valid Token...'
        });
      }
    });

    app.use(function(err, req, res, next) {
      res.status(err.status || 500);

      res.json({
        error: err.message
      });
    });   

    app.listen(PORT, () => {
      console.log(config.name + ' listening on port ', PORT);
    });
}






