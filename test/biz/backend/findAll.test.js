/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.backend', function(){
  it('#findAll', function (done){

    biz.backend.findAll(function (err, docs){
      if(err) return assert.ok(!err);
      assert.equal(1, docs.length);
      done();
    });
  });
});
