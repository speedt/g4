/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.payment', function(){
  it('#saveNew', function(){

    return biz.payment.saveNew({
      order_id: 'order_id',
      goods_id: 'goods_id',
      user_id:  'user_id',
    })
    .then(doc => {
      console.log(doc);
      assert.notEqual(null, doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
