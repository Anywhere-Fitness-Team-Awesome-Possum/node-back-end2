const express = require('express');
const authRouter = require('../auth/router');
const userRouter = require('../users/users-router');
const instructorRouter = require('../instructor/instructor-router');
const cors = require('cors');
const helmet = require('helmet');

const server = express();  


server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


 
server.use(helmet());
server.use(cors());
server.use(express.json());




server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/auth', authRouter);
server.use('/api/auth/users/classes', userRouter);
server.use('/api/auth/instructor/classes', instructorRouter);

module.exports = server; 