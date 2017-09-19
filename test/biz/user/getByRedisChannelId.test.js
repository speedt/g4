/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#getByRedisChannelId', function(){

    return biz.user.getByRedisChannelId('1', '2')
    .then(user => {
      assert.equal('1', user.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
