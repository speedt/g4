/*!
 * emag.model
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const path = require('path');
const cwd  = process.cwd();
const conf = require(path.join(cwd, 'settings'));

const uuid  = require('node-uuid');
const utils = require('speedt-utils').utils;

const _  = require('underscore');
_.str    = require('underscore.string');
_.mixin(_.str.exports());

const logger = require('log4js').getLogger('model.room');

const DIRECTION_CLOCKWISE     = 1;  // 顺时针
const DIRECTION_ANTICLOCKWISE = 0;  // 逆时针

module.exports = function(opts){
  return new Method(opts);
}

var Method = function(opts){
  var self  = this;
  self.opts = opts;

  self.id   = opts.id;
  self.name = opts.name || ('Room '+ opts.id);

  self._users   = {};
  self._players = {};
};

var pro = Method.prototype;

pro.release = function(){};
