/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.cfg', function(){
  it('#findByType', function (done){

    biz.cfg.findByType('group_type_pushCake', function (err, docs){
      if(err) return assert.ok(!err, err);
      console.log(docs)
      assert.equal(true, _.isArray(docs));
      done();
    });
  });
});
