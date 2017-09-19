/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#registerWX', function(){

    return biz.user.registerWX({
      openid:     'openid',
      weixin:     'unionid',
      headimgurl: 'headimgurl',
      nickname:   'nickname',
    })
    .then(doc => {
      assert.notEqual(null, doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
