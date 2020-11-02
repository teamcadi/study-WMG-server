const authRouter = require('../../api/auth/routes');

const loadRouters = app => {
  app.use('/auth', authRouter(require('express').Router()));
  app.use('/papago', authRouter(require('express').Router()));
  app.use('/users', authRouter(require('express').Router()));
  app.use('/words', authRouter(require('express').Router()));
};

module.exports = loadRouters;
