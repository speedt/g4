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
  const sql = 'INSERT INTO w_notice (id, title, content, create_time, user_id) VALUES (?, ?, ?, ?, ?)';

  /**
   *
   *
   * @return
   */
  exports = module.exports = function(newInfo, cb){
    newInfo.create_time = new Date();
    newInfo.id          = newInfo.id || utils.replaceAll(uuid.v1(), '-', '');

    mysql.query(sql, [
      newInfo.id,
      newInfo.title,
      newInfo.content,
      newInfo.create_time,
      newInfo.user_id,
    ], cb);
  };
})();
