/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#login', function(){

    return biz.user.login({
      user_name: 'hx',
      user_pass: '1',
    })
    .then(token => {
      assert.equal(2, token.length);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
