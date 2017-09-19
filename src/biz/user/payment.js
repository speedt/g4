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

const md5    = require('speedt-utils').md5;
const utils  = require('speedt-utils').utils;
const anysdk = require('speedt-anysdk');

const mysql  = require('emag.db').mysql;
const redis  = require('emag.db').redis;

const cfg = require('emag.cfg');
const biz = require('emag.biz');

const _  = require('underscore');
_.str    = require('underscore.string');
_.mixin(_.str.exports());

(() => {
  /**
   *
   * @return
   */
  exports = module.exports = function(payInfo){
    if(!anysdk.payment(payInfo)) return Promise.reject('ERROR');

    return new Promise((resolve, reject) => {
      formVali(payInfo)
      .then(p1)
      .then(() => resolve())
      .catch(reject);
    });
  };

  function formVali(payInfo){
    if(!_.isString(payInfo.user_id))    return Promise.reject('INVALID_PARAMS');
    if(!_.isString(payInfo.product_id)) return Promise.reject('INVALID_PARAMS');
    if(!_.isString(payInfo.order_id))   return Promise.reject('INVALID_PARAMS');

    payInfo.goods_id = payInfo.product_id;
    return Promise.resolve(payInfo);
  }

  function p1(payInfo){
    return new Promise((resolve, reject) => {
      mysql.beginTransaction()
      .then(p2.bind(null, payInfo))
      .then(() => resolve())
      .catch(reject);
    });
  }

  function p2(payInfo, trans){
    return new Promise((resolve, reject) => {
      biz.user_payment.saveNew(payInfo, trans)
      .then(p3.bind(null, payInfo, trans))
      .then(mysql.commitTransaction.bind(null, trans))
      .then(() => resolve())
      .catch(err => {
        trans.rollback(() => reject(err));
      })
    });
  }

  function p3(payInfo, trans){
    return new Promise((resolve, reject) => {
      biz.goods.findDetailById(payInfo.goods_id, trans)
      .then(editPayment.bind(null, payInfo.user_id, trans))
      .then(() => resolve())
      .catch(reject);
    });
  }

  function editPayment(id, trans, data){
    var _keys = process(data);

    var sql = 'UPDATE s_user SET ';
    sql += _keys[0];
    sql += ' WHERE id=?';

    var _params = _keys[1];
    _params.push(id);

    return new Promise((resolve, reject) => {
      (trans || mysql).query(sql, _params, err => {
        if(err) return reject(err);
        resolve();
      });
    });
  };

  function process(data){
    var _a = [], _b = [];

    for(let i of data){
      _a.push(getFieldName(i.game_prop_id) +'='+ getFieldName(i.game_prop_id) +'+?');
      _b.push(i.num);
    }

    return [_a.join(','), _b];
  }

  function getFieldName(field_no){
    switch(field_no){
      case '3': return 'current_score';
      case '4': return 'gold_count';
    }
  }
})();
