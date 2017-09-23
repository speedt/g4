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

const roomPool = require('emag.model').roomPool;

const logger = require('log4js').getLogger('biz.group');

(() => {
  /**
   *
   * @return
   */
  exports = module.exports = function(server_id, channel_id, group_info){
    return new Promise((resolve, reject) => {
      formVali(group_info)
      .then(biz.user.getByChannelId.bind(null, server_id, channel_id))
      .then(p1)
      .then(doc => resolve(doc))
      .catch(reject);
    });
  };

  function formVali(group_info){
    if(!_.isObject(group_info)) return Promise.reject('INVALID_PARAMS');
    if( _.isArray (group_info)) return Promise.reject('INVALID_PARAMS');
    return Promise.resolve();
  }

  function p1(user){
    if(user.group_id) return Promise.reject('MUST_BE_QUIT');
    return Promise.resolve(user);
  }

  function p3(group_info, user){
    var room = roomPool.create(group_info, user);
  }
})();
