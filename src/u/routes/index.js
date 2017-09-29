/*!
 * emag.login
 * Copyright(c) 2016 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const pushCake = require('../controllers/pushCake');
const user     = require('../controllers/user');
const site     = require('../controllers/site');

module.exports = function(app){
  app.post('/login$',     user.loginBack);
  app.get ('/login$',     user.loginUI);
  app.get ('/logout$',    user.logoutUI);

  app.get ('/changePwd$', user.login_validate, user.changePwdUI);
  app.get ('/',           user.login_validate, site.indexUI);
};
