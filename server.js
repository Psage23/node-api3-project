const express = require('express');
const router = require('./posts/postRouter');
const server = express();

server.use(logger);
server.use(express.json());
server.use('/', router);



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
