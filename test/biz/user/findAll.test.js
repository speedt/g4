/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#findAll', function (done){

    biz.user.findAll(1, function (err, docs){
      if(err) return assert.ok(!err);
      assert.equal(14, docs.length);
      done();
    });
  });
});
