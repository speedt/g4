/*!
 * emag.login
 * Copyright(c) 2016 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const user     = require('../controllers/user');
const site     = require('../controllers/site');

module.exports = function(app){
  app.post('/login$',  user.login);
  app.get ('/login$',  user.loginUI);
  app.get ('/logout$', user.logoutUI);

  app.post('/resetPwd$',    user.login_validate, user.resetPwd);
  app.get ('/transRecord$', user.login_validate, user.transRecordUI);

  app.post('/changePwd$', user.login_validate, user.changePwd);
  app.get ('/changePwd$', user.login_validate, user.changePwdUI);

  app.post('/transfer$', user.login_validate, user.transfer);
  app.get ('/transfer$', user.login_validate, user.transferUI);

  app.get ('/friends$', user.login_validate, user.friendsUI);
  app.get ('/welcome$', user.login_validate, site.welcomeUI);
  app.get ('/',         user.login_validate, site.indexUI);
};
