/*!
 * emag.model
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const path = require('path');
const cwd  = process.cwd();
const conf = require(path.join(cwd, 'settings'));

const util = require('util');

const uuid  = require('node-uuid');
const utils = require('speedt-utils').utils;

const _  = require('underscore');
_.str    = require('underscore.string');
_.mixin(_.str.exports());

const Base = require('./base');

const DIRECTION_CLOCKWISE     = 1;  // 顺时针
const DIRECTION_ANTICLOCKWISE = 0;  // 逆时针

const AS_READY = 'AS_READY';

const logger = require('log4js').getLogger('model.room');

var Method = function(group, user){
  var self  = this;
  Base.call(self, group, user);

  self. act_seat      = 1;
  self. act_status    = AS_READY;
  self._act_direction = DIRECTION_CLOCKWISE;
};

util.inherits(Method, Base);

var pro = Method.prototype;

pro.ready = function(){
  return 'ready';
};

module.exports = function(group, user){
  return new Method(group, user);
};
