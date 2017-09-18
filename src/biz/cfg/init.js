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

/**
 *
 * @return
 */
exports = module.exports = function(cb){
  biz.cfg.findAll(null, function (err, docs){
    if(err) return cb(err);

    redis.select(conf.redis.database, function (err){
      if(err) return cb(err);

      for(let i of docs){
        redis.hset('cfg::'+ i.type_, i.key_, i.value_, redis.print);
      }

      cb(null, docs);
    });
  });
};
