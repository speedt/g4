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

const cfg = require('emag.cfg');
const biz = require('emag.biz');

const _  = require('underscore');
_.str    = require('underscore.string');
_.mixin(_.str.exports());

(() => {
  var sql = 'SELECT a.* FROM w_gift a WHERE a.user_id=? AND a.gift_type=? AND DATE(a.create_time)=?';

  /**
   *
   *
   * @return
   */
  exports = module.exports = function(user_id, gift_type, curr_date, cb){
    mysql.query(sql, [
      user_id,
      gift_type || 1,
      curr_date || utils.formatDate(new Date(), 'YYYY-MM-dd'),
    ], cb);
  };
})();
