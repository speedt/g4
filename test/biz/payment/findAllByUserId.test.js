/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.payment', function(){
  it('#findAllByUserId', function (done){

    biz.payment.findAllByUserId('9c012a33aa8b4ecc8aaf20ea149a6f25', function (err, docs){
      if(err) return assert.ok(!err, err);
      console.log(docs);
      assert.equal(true, _.isArray(docs));
      done();
    });
  });
});
