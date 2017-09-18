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
  var sql = 'UPDATE s_cfg SET value_=? WHERE key_=? AND type_=?';

  /**
   *
   * @return
   */
  exports = module.exports = function(newInfo, cb){
    mysql.query(sql, [
      newInfo.value_,
      newInfo.key_,
      newInfo.type_,
    ], function (err, status){
      if(err) return cb(err);
      if(1 > status.affectedRows) return cb(new Error('affectedRows: 0'));

      redis.select(conf.redis.database, function (err){
        if(err) return cb(err);
        redis.hset('cfg::'+ newInfo.type_, newInfo.key_, newInfo.value_, redis.print);
        cb(null, newInfo);
      });
    });
  };
})();
