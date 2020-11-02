const loadMiddleware = require('./middleware.loader');
const loadRouters = require('./router.loader');

const loadExpress = app => {
  loadMiddleware(app);
  loadRouters(app);
};

module.exports = loadExpress;
