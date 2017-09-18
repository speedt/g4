/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.frontend', function(){
  it('#findAll', function (){

    return biz.frontend.findAll()
    .then(docs => {
      assert.equal(0, docs.length);
    })
    .catch(err => {
      assert.ok(!err);
    })
  });
});
