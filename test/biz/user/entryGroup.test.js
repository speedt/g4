/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#entryGroup', function(){

    return biz.user.entryGroup({
      group_id: '121212',
      id:       '1',
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
