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
    if(source === target) return Promise.reject('INVALID_PARAMS');

    gold_num -= 0;

    if(!_.isNumber(gold_num)) return Promise.reject('INVALID_PARAMS');
    if(1 > gold_num)          return Promise.reject('INVALID_PARAMS');

    return new Promise((resolve, reject) => {
      biz.user.getById(source)
      .then(p1.bind(null, gold_num))
      .then(biz.user.getById.bind(null, target))
      .then(mysql.beginTransaction.bind(mysql))
      .then(p2.bind(null, source, target, gold_num))
      .then(() => resolve())
      .catch(reject);
    });
  };

  function p1(gold_num, user){
    if(gold_num <= user.gold_count) return Promise.resolve();
    return Promise.reject('元宝不足');
  }

  function p2(source, target, gold_num, trans){
    return new Promise((resolve, reject) => {
      p3(source, gold_num, trans)
      .then(p4.bind(null, target, gold_num, trans))
      .then(p5.bind(null, source, target, gold_num, trans))
      .then(mysql.commitTransaction.bind(null, trans))
      .then(() => resolve())
      .catch(err => {
        trans.rollback(() => reject(err));
      });
    });
  }

  function p3(source, gold_num, trans){
    return new Promise((resolve, reject) => {
      trans.query(sql_1, [gold_num, source], err => {
        if(err) return reject(err);
        resolve();
      });
    });
  }

  function p4(target, gold_num, trans){
    return new Promise((resolve, reject) => {
      trans.query(sql_2, [gold_num, target], err => {
        if(err) return reject(err);
        resolve();
      });
    });
  }

  function p5(source, target, gold_num, trans){
    return new Promise((resolve, reject) => {
      trans.query(sql_3, [
          utils.replaceAll(uuid.v1(), '-', ''),
          source,
          target,
          new Date(),
          gold_num,
        ], err => {
        if(err) return reject(err);
        resolve();
      });
    });
  }
})();
