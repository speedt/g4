/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.goods', function(){
  it('#saveNew', function (done){

    biz.goods.saveNew({
      id:         'test_id',
      goods_name: 'goods_name',
      goods_desc: 'goods_desc',
      payment_id: 'payment_id',
    }, function (err, status){
      if(err) return assert.ok(!err, err);
      assert.ok(true);
      done();
    });
  });
});
