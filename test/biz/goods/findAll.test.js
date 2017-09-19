/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.goods', function(){
  it('#findAll', function (done){

    biz.goods.findAll(function (err, docs){
      if(err) return assert.ok(!err);
      assert.equal(9, docs.length);
      done();
    });
  });
});
