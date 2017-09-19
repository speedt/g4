/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.manager', function(){
  it('#getByName', function(){

    return biz.manager.getByName('admin')
    .then(doc => {
      assert.equal('1', doc.id);
    })
    .catch(err => {
      assert.ok(!err);
    })
  });
});
