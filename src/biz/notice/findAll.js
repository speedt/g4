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
  var sql = 'SELECT '+
              'b.user_name, '+
              'a.* '+
            'FROM '+
              '(SELECT * FROM w_notice) a '+
              'LEFT JOIN s_manager b ON (a.user_id=b.id) '+
            'WHERE '+
              'b.id IS NOT NULL '+
            'ORDER BY a.create_time DESC';

  /**
   *
   *
   * @return
   */
  exports = module.exports = function(cb){
    mysql.query(sql, null, cb);
  };
})();
