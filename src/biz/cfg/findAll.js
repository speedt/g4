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

/**
 *
 * @return
 */
exports = module.exports = function(status, cb){
  var sql = 'SELECT a.* FROM s_cfg a';
  if(null !== status){ sql += ' WHERE a.status=?'; }
  sql += ' ORDER BY a.title ASC';

  mysql.query(sql, [status], cb);
};
