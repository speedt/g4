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

(() => {
  /**
   *
   * @return
   */
  exports = module.exports = function(server_id, channel_id, group_id){
    var room = roomPool.get(group_id);
    if(!room) return Promise.reject('群组不存在');

    return new Promise((resolve, reject) => {
      biz.user.getByChannelId(server_id, channel_id)
      .then(p1.bind(null, group_id))
      .then(biz.user.entryGroup)
      .then(p2.bind(null, room))
      .then(doc => resolve(doc))
      .catch(reject);
    });
  };

  function p1(group_id, user){
    if(user.group_id) return Promise.reject('MUST_BE_QUIT');

    user.group_id = group_id;
    return Promise.resolve(user);
  }

  function p2(room, user){
    var _entry = room.entry(user);
    if('string' === typeof _entry) return Promise.reject(_entry);

    var _users = [];

    for(let i of _.values(room.getUsers())){
      _users.push([
        i.id,
        i.opts.seat,
        i.nickname,
        i.weixin_avatar,
      ]);
    }

    return Promise.resolve([
      room.getUsers(),
      _users,
    ]);
  }
})();
