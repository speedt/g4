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
              'c.nickname target_nickname, '+
              'b.nickname source_nickname, '+
              'a.* '+
            'FROM '+
              '(SELECT * FROM s_user_transfer WHERE source_id=?) a '+
              'LEFT JOIN s_user b ON (a.source_id=b.id) '+
              'LEFT JOIN s_user c ON (a.target_id=c.id) '+
            'WHERE '+
              'b.id IS NOT NULL AND '+
              'c.id IS NOT NULL '+
            'ORDER BY a.create_time DESC';
  /**
   *
   * @return
   */
  exports = module.exports = function(id, trans){
    return new Promise((resolve, reject) => {
      (trans || mysql).query(sql, [id], (err, docs) => {
        if(err) return reject(err);
        resolve(docs);
      });
    });
  };
})();
