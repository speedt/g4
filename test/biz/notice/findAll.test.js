/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.notice', function(){
  it('#findAll', function (done){

    biz.notice.findAll(function (err, docs){
      if(err) return assert.ok(!err, err);
      assert.equal(5, docs.length);
      done();
    });
  });
});
