const loadExpress = require('./loaders/express');
const app = require('express')();

const server = () => {
  loadExpress(app);

  app.listen(9000, err => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    } else console.log('server start');
  });
};

server();
