/*!
 * emag.login
 * Copyright(c) 2016 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const utils = require('speedt-utils').utils;

const biz = require('emag.biz');

const conf = require('../settings');

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
  res.render('site/index', {
    conf: conf,
    description: '',
    keywords: ',html5',
    data: {
      topMessage:   getTopMessage(),
      session_user: req.session.user,
    }
  });
};

/**
 *
 * @return
 */
function getTopMessage(){
	var t = new Date();
	var y = t.getFullYear();
	var m = utils.padLeft(t.getMonth() + 1, '0', 2);
	var d = utils.padLeft(t.getDate(), '0', 2);
	return '欢迎您。今天是'+ y +'年'+ m +'月'+ d +'日。';
};

/**
 *
 * @return
 */
exports.welcomeUI = function(req, res, next){
  res.render('site/welcome', {
    conf: conf,
    description: '',
    keywords: ',html5,nodejs'
  });
};
