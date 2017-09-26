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

const md5    = require('speedt-utils').md5;
const utils  = require('speedt-utils').utils;
const anysdk = require('speedt-anysdk');

const mysql  = require('emag.db').mysql;
const redis  = require('emag.db').redis;

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
      anysdk.wx(user_info)
      .then(p2)
      .then(data => resolve(data))
      .catch(reject);
    });
  };

  function p2(data){
    var _data = _.clone(data);

    return new Promise((resolve, reject) => {
      biz.user.getByOpenId(data.data.user_info.openid)
      .then(p3.bind(null, data.data.user_info))
      .then(() => resolve(_data))
      .catch(reject);
    });
  }

  var sql = 'UPDATE s_user SET nickname=?, sex=?, weixin_original=?, weixin_avatar=? WHERE user_name=?'

  function p3(user_info, user){
    if(!user) return newReg(user_info);

    user.weixin_original = JSON.stringify(user_info);
    user.nickname        = user_info.nickname;
    user.sex             = user_info.sex;
    user.weixin_avatar   = user_info.headimgurl;
    user.user_name       = user_info.unionid;

    return new Promise((resolve, reject) => {
      mysql.query(sql, [
        user.nickname,
        user.sex,
        user.weixin_original,
        user.weixin_avatar,
        user.user_name,
      ], err => {
        if(err) return reject(err);
        resolve(user);
      });
    });
  }

  function newReg(user_info){
    user_info.weixin_original = JSON.stringify(user_info);
    user_info.user_name       = user_info.unionid;
    user_info.user_pass       = '123456';
    user_info.weixin_avatar   = user_info.headimgurl;

    return biz.user.saveNew(user_info);
  }
})();
