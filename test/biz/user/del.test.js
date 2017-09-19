/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#del', function (done){

    biz.user.del('test_id', function (err){
      if(err) return assert.ok(!err);
      done();
    });
  });
});
