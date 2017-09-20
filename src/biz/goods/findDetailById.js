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
              'c.prop_name game_prop_name, '+
              'b.goods_name, '+
              'a.* '+
            'FROM '+
              '(SELECT * FROM w_goods_detail WHERE goods_id=?) a '+
              'LEFT JOIN w_goods b ON (a.goods_id=b.id) '+
              'LEFT JOIN w_game_prop c ON (a.game_prop_id=c.id) '+
            'WHERE '+
              'b.id IS NOT NULL AND '+
              'c.id IS NOT NULL '+
            'ORDER BY a.create_time DESC';
  /**
   * 获取某一商品的详细道具列表
   *
   * @param id
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
