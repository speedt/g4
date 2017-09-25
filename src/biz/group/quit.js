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
  exports = module.exports = function(server_id, channel_id){
    return new Promise((resolve, reject) => {
      biz.user.getByChannelId(server_id, channel_id)
      .then(p1)
      .then(p2)
      .then(doc => resolve(doc))
      .catch(reject);
    });
  };

  function p1(user){
    if(!user.group_id) return Promise.reject('不在群组');
    return Promise.resolve(user);
  }

  function p2(user){
    var room = roomPool.get(user.group_id);

    if(!room){
      return new Promise((resolve, reject) => {
        biz.user.quitGroup(user.id)
        .then(() => resolve())
        .catch(reject);
      });
    }

    if(!room.quit(user.id)){
      return Promise.resolve([
        room.getUsers(),
        [
          user.id,
          user.opts.seat,
          room.isStart(),
        ],
      ]);
    }

    return new Promise((resolve, reject) => {
      biz.user.quitGroup(user.id)
      .then(() => {
        if(1 > _.size(room.getUsers())) return resolve();

        resolve([
          room.getUsers(),
          [
            user.id,
            user.opts.seat,
            room.isStart(),
          ],
        ]);
      })
      .catch(reject);
    });
  }
})();
