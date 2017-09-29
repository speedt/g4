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
  var sql_1 = 'UPDATE s_user SET gold_count=gold_count-? WHERE id=?';
  var sql_2 = 'UPDATE s_user SET gold_count=gold_count+? WHERE id=?';
  var sql_3 = 'INSERT INTO s_user_transfer (id, source_id, target_id, create_time, gold_num) VALUES (?, ?, ?, ?, ?)';

  /**
   *
   * @return
   */
  exports = module.exports = function(source, target, gold_num){
    return new Promise((resolve, reject) => {
      resolve({
        id:          '1',
        source_id:   '2',
        target_id:   '3',
        create_time: new Date(),
        gold_num:    4,
      });
    });
  };
})();
