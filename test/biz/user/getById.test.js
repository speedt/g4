/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#getById', function(){

    return biz.user.getById('1')
    .then(doc => {
      assert.equal(doc.id, '1');
    })
    .catch(err => {
      assert.ok(!err);
    })
  });
});
