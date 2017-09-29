/*!
 * emag.login
 * Copyright(c) 2016 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const biz = require('emag.biz');

const conf  = require('../settings');
const utils = require('speedt-utils').utils;

const request = require('request');

const logger = require('log4js').getLogger('controllers.user');

exports.loginUI = function(req, res, next){
  res.render('user/login', {
    conf: conf,
    data: {}
  });
};

exports.login = function(req, res, next){
  var query = req.body;

  biz.user.loginBack(query)
  .then(user => {
    // session
    req.session.userId = user.id;
    req.session.user = user;

    res.send({});
  })
  .catch(err => {
    if('string' !== typeof err) return next(err);
    res.send({ error: { msg: err } });
  });
};

exports.login_validate = function(req, res, next){
  if(req.session.userId) return next();
  if(req.xhr) return res.send({ error: { msg: '无权访问' } });
  res.redirect(conf.html.virtualPath +'login?refererUrl='+ escape(conf.html.virtualPath + req.url.substr(1)));
};

exports.logoutUI = function(req, res, next){
  req.session.destroy();
  res.redirect(conf.html.virtualPath +'login');
};

/**
 *
 * @return
 */
exports.changePwdUI = function(req, res, next){
  res.render('user/changePwd', {
    conf: conf,
    description: '',
    keywords: ',html5,nodejs'
  });
};

exports.changePwd = function(req, res, next){
  var query = req.body;

  query.id = req.session.userId;

  biz.user.changePwd(query)
  .then(() => {
    res.send({});
  })
  .catch(err => {
    if('string' !== typeof err) return next(err);
    res.send({ error: { msg: err } });
  });
};

/**
 *
 * @return
 */
exports.friendsUI = function(req, res, next){
  biz.user.findAllByChild(req.session.userId)
  .then(docs => {

    res.render('user/friends', {
      conf: conf,
      description: '',
      keywords: ',html5,nodejs'
    });

  })
  .catch(next);
};
