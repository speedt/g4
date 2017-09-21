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
  var sql = 'INSERT INTO s_user_payment (id, user_id, goods_id, create_time, order_id, original_data) VALUES (?, ?, ?, ?, ?, ?)';

  /**
   *
   * @return
   */
  exports = module.exports = function(newInfo, trans){
    newInfo.original_data = JSON.stringify(newInfo);
    newInfo.id            = newInfo.id || utils.replaceAll(uuid.v1(), '-', '');
    newInfo.create_time   = new Date();

    return new Promise((resolve, reject) => {
      (trans || mysql).query(sql, [
        newInfo.id,
        newInfo.user_id,
        newInfo.goods_id,
        newInfo.create_time,
        newInfo.order_id,
        newInfo.original_data,
      ], (err, code) => {
        if(err) return reject(err);
        resolve(newInfo);
      });
    });
  };
})();
