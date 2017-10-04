/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#loginWX', function(){

    return biz.user.loginWX({
      user_name: 'oGYue1LK1U5DPUyslPSSl_JpIGvE',
      user_pass: '123456',
    })
    .then(token => {
      console.log(token);
      assert.equal(2, token.length);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
