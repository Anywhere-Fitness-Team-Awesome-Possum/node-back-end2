const express = require('express');
const authRouter = require('../auth/router');
const userRouter = require('../users/users-router');
const instructorRouter = require('../instructor/instructor-router');
const cors = require('cors');
const helmet = require('helmet');

const server = express(); 

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
  res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" )
});

server.use('/api/auth', authRouter);
server.use('/api/auth/users/classes', userRouter);
server.use('/api/auth/instructor/classes', instructorRouter);

module.exports = server; 