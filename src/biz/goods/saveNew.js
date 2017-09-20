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
  const sql = 'INSERT INTO w_goods (id, goods_name, goods_desc, create_time, cost, payment_id, disposable, interval_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  /**
   *
   *
   * @return
   */
  exports = module.exports = function(newInfo, cb){
    mysql.query(sql, [
      newInfo.id || utils.replaceAll(uuid.v1(), '-', ''),
      newInfo.goods_name,
      newInfo.goods_desc,
      new Date(),
      newInfo.cost          || 0,
      newInfo.payment_id,
      newInfo.disposable    || 0,
      newInfo.interval_time || 0,
    ], cb);
  };
})();
