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

    return biz.transfer.gold('I3KZQZ', 'FGDSD3', 100)
    .then(() => {
      assert.ok(true);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
