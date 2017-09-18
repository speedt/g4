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
  const numkeys = 2;
  const sha1    = '16dd95ae2b44a0df9af02f02e8751bbc87b6db4d';

  /**
   *
   * @return
   */
  exports = module.exports = function(back_id, cb){
    redis.evalsha(sha1, numkeys, conf.redis.database, back_id, cb);
  };
})();
