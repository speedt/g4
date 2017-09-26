/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.group', function(){
  it('#genId', function(){

    return biz.group.genId()
    .then(free_id => {
      console.log(free_id);
      assert.ok(!!free_id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
