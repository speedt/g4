/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#genId', function(){

    return biz.user.genId()
    .then(id => {
      console.log(id)
      assert.ok(id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
