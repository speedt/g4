/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.cfg', function(){
  it('#init', function (done){

    biz.cfg.init(function (err, docs){
      if(err) return assert.ok(!err);
      assert.equal(7, docs.length);
      done();
    });
  });
});
