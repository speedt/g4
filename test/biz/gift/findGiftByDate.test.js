/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.gift', function(){
  it('#findGiftByDate', function (done){

    biz.gift.findGiftByDate('9c012a33aa8b4ecc8aaf20ea149a6f25', 1, '2017-08-06', function (err, docs){
      if(err) return assert.ok(!err, err);
      console.log(docs);
      assert.equal(true, _.isArray(docs));
      done();
    });
  });
});
