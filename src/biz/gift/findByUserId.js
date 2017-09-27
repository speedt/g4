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
              'e.prop_name game_prop_name, '+
              'd.type_name gift_type_name, '+
              'c.goods_name, '+
              'b.user_name, b.vip user_vip, '+
              'a.* '+
            'FROM '+
              '(SELECT * FROM w_gift WHERE user_id=?) a '+
              'LEFT JOIN s_user b ON (a.user_id=b.id) '+
              'LEFT JOIN w_goods c ON (a.goods_id=c.id) '+
              'LEFT JOIN w_gift_type d ON (a.gift_type=d.id) '+
              'LEFT JOIN w_game_prop e ON (a.game_prop_id=e.id) '+
            'WHERE '+
              'b.id IS NOT NULL AND '+
              'c.id IS NOT NULL AND '+
              'd.id IS NOT NULL AND '+
              'e.id IS NOT NULL '+
            'ORDER BY a.create_time DESC';
  /**
   *
   *
   * @return
   */
  exports = module.exports = function(user_id, cb){
    mysql.query(sql, [user_id || 0], cb);
  };
})();
