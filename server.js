const express = require('express');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');
const server = express();

server.use(logger);
server.use(express.json());
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const {method, originalUrl} = req;
  console.log(`${method} to ${originalUrl}`);

  next();
}


module.exports = server;
