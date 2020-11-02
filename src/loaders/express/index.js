const loadMiddleware = require('./middleware.loader');
const loadRouters = require('./router.loader');
const loadSetting = require('./setting.loader');

const loadExpress = app => {
  loadSetting(app);
  loadMiddleware(app);
  loadRouters(app);
};

module.exports = loadExpress;
