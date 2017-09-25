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

var Method = function(group, user){
  if(!user.group_id) throw new Error('group id cannot be empty');

  var self = this;

  self.id   = user.group_id;
  self.name = group.name || ('Room '+ self.id);

  self._users   = {};
  self._players = {};

  self.create_user_id = user.id;
  self.create_time    = new Date().getTime();

  self.visitor_count = group.visitor_count || 0;  // 游客人数
  self._player_count = group.player_count  || 4;

  (() => {
    self._free_seat = [];

    for(let i = 1; i <= self._player_count; i++){
      self._free_seat.push(i)
    }
  })();

  self.entry(user);
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

(function(){
  /**
   * 进入群组
   *
   * @return
   */
  pro.entry = function(user){
    var self = this;

    if(self.getUser(user.id)) return '已在房间';
    if(self.isFull())         return '房间满员';

    user.opts = {};

    setSeat.call(self, user);

    self._users[user.id] = user;

    user.opts.entry_time = new Date().getTime();
    user.opts.is_quit    = 0;
    user.opts.is_ready   = 0;

    return user;
  };

  function setSeat(user){
    var seat_no = this._free_seat.shift();
    if(!(0 < seat_no)) return;

    this._players[seat_no] = user;
    user.opts.seat         = seat_no;
  }
})();

/**
 *
 * @return
 */
pro.quit = function(user_id){
  var self = this;

  var _user = self.getUser(user_id);
  if(!_user) return true;
};

exports = module.exports = Method;
