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
  it('#editInfo', function (done){

    biz.goods.editInfo({
      id:         'test_id',
      goods_name: '1',
      goods_desc: '2',
      payment_id: '3',
    }, function (err, status){
      if(err) return assert.ok(!err, err);
      assert.ok(true);
      done();
    });
  });
});
