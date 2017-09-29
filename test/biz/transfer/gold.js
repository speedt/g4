/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.transfer', function(){
  it('#gold', function(){

    return biz.transfer.gold('1', '2', 100)
    .then(doc => {
      console.log(doc);
      assert.ok(doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
