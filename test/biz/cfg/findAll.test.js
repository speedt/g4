/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.cfg', function(){
  it('#findAll', function(){

    biz.cfg.findAll(1, function (err, docs){
      if(err) return assert.ok(!err);
      assert.notEqual(null, docs);
    });
  });
});
