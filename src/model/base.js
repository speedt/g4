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

var Method = function(opts){
  var self  = this;
  self.opts = opts;

  self.id   = opts.id;
  self.name = opts.name || ('Room '+ opts.id);

  self._users   = {};
  self._players = {};

  self.create_user_id = opts.user_id;
  self.create_time    = new Date().getTime();

  self.visitor_count = opts.visitor_count || 0;  // 游客人数
  self._player_count = opts.player_count  || 4;

  (() => {
    self._free_seat = [];

    for(let i = 1; i <= self._player_count; i++){
      self._free_seat.push(i)
    }
  })();
};

var pro = Method.prototype;

/**
 *
 * @param seat_no
 * @return
 */
pro.getNextSeatBySeat = function(seat_no){
  seat_no -= 0;
  return (this._player_count < (++seat_no)) ? 1 : seat_no;
};

/**
 *
 * @return
 */
pro.getUser = function(id){
  return this._users[id];
};

/**
 * 获取所有用户
 *
 * @return
 */
pro.getUsers = function(){
  return this._users;
};

/**
 *
 * @return
 */
pro.getUserBySeat = function(id){
  return this._players[id];
};

/**
 * 判断是否是
 *
 * @return
 */
pro.isPlayer = function(user){
  return 0 < user.opts.seat;
};

/**
 *
 * @return
 */
pro.isReady = function(user){
  return 0 < user.opts.is_ready;
};

/**
 *
 * @return
 */
pro.isQuit = function(user){
  return 0 < user.opts.is_quit;
};

/**
 * 判断是否游戏是否开始
 *
 * @return
 */
pro.isStart = function(){
  return this._player_count <= this.getReadyCount();
};

/**
 * 获取举手人数
 *
 * @return
 */
pro.getReadyCount = function(){
  var count = 0;

  for(let i of _.values(this._players)){
    if(this.isReady(i)) ++count;
  }

  return count;
};

/**
 *
 * @return
 */
pro.release = function(){
  return 1 > this.getUserCount();
};

/**
 *
 * @return
 */
pro.getUserCount = function(){
  return _.size(this._users);
};

/**
 * 房间满了吗？
 *
 * @return boolean
 */
pro.isFull = function(){
  return (this._player_count + this.visitor_count) <= this.getUserCount();
};

exports = module.exports = Method;
