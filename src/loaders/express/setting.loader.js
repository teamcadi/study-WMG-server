const loadSetting = app => {
  app.set('PORT', process.env.PORT || 9000);
};
module.exports = loadSetting;
