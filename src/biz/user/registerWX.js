/*!
 * emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const path = require('path');
const cwd  = process.cwd();
const conf = require(path.join(cwd, 'settings'));

const uuid  = require('node-uuid');

const md5   = require('speedt-utils').md5;
const utils = require('speedt-utils').utils;

const mysql  = require('emag.db').mysql;
const redis  = require('emag.db').redis;
const anysdk = require('emag.lib').anysdk;

const cfg = require('emag.cfg');
const biz = require('emag.biz');

const _  = require('underscore');
_.str    = require('underscore.string');
_.mixin(_.str.exports());

(() => {
  /**
   *
   * @return
   */
  exports = module.exports = function(user_info){
    return new Promise((resolve, reject) => {
      formVali(user_info)
      .then(biz.user.saveNew)
      .then(() => resolve(user_info))
      .catch(reject);
    });
  };

  function formVali(user_info){
    user_info.original_data = JSON.stringify(user_info);
    user_info.id            = user_info.openid;
    user_info.user_name     = user_info.openid;
    user_info.user_pass     = '123456';
    user_info.weixin        = user_info.unionid;
    user_info.weixin_avatar = user_info.headimgurl;

    return Promise.resolve(user_info);
  }
})();
