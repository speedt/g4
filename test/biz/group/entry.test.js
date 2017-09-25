/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.group', function(){
  it('#entry', function(){

    return biz.group.entry('1', '2', '123456')
    .then(doc => {
      console.log(doc);
      assert.ok(doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
