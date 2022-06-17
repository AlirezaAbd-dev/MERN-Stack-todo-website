const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const ErrorMiddleware = require('./http/middleware/Error');
const api = require('./routes/api');
const app = express();

class Application {
  constructor() {
    this.setupExpressServer();
    this.setupMongoose();
    this.setupRoutesAndMiddlewares();
    this.setupConfigs();
  }

  setupRoutesAndMiddlewares() {
    // built-in middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use(express.static('uploads'));

    // third-party middleware
    app.use(cors());

    //routes
    app.use('/api', api);

    app.use(ErrorMiddleware);
  }

  setupConfigs() {
    winston.add(new winston.transports.File({ filename: 'error-log.log' }));
    winston.add(
      new winston.transports.MongoDB({
        db: 'mongodb://localhost:27017/todoList',
        level: 'error',
      }),
    );

    process.on('uncaughtException', (err) => {
      console.log(err);
      winston.error(err.message);
    });
    process.on('unhandledRejection', (err) => {
      console.log(err);
      winston.error(err.message);
    });
  }

  setupMongoose() {
    mongoose
      .connect('mongodb://localhost:27017/todoList', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('db connected');
        winston.info('db connected');
      })
      .catch((err) => {
        console.error('db not connected', err);
      });
  }
  setupExpressServer() {
    const port = process.env.myPort || 3000;
    app.listen(port, (err) => {
      if (err) console.log(err);
      else console.log(`app listen to port ${port}`);
    });
  }
}

module.exports = Application;
