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
  const sql = 'UPDATE w_notice SET title=?, content=? WHERE id=?';

  /**
   *
   *
   * @return
   */
  exports = module.exports = function(newInfo, cb){
    mysql.query(sql, [
      newInfo.title,
      newInfo.content,
      newInfo.id,
    ], cb);
  };
})();
