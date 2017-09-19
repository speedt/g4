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
      user_name: 'test_user',
      user_pass: '111111',
    })
    .then(doc => {
      assert.notEqual(null, doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
