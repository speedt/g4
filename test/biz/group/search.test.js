/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.group', function(){
  it('#search', function(){

    return biz.group.search('1', '2', {
      id: 'test_id',
    })
    .then(doc => {
      console.log(doc);
      assert.ok(doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
