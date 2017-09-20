/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.backend', function(){
  it('#open', function (done){

    biz.backend.open('123456', function (err, code){
      if(err) return assert.ok(!err, err);
      assert.equal('OK', code);
      done();
    });
  });
});
