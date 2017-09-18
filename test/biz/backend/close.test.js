/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.backend', function(){
  it('#close', function (done){

    biz.backend.close('123456', function (err, code){
      if(err) return assert.ok(!err);
      assert.equal('OK', code);
      done();
    });
  });
});
