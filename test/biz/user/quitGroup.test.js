/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#quitGroup', function(){

    return biz.user.quitGroup('1')
    .then(() => {
      assert.ok(true);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
