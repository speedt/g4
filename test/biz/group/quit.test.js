/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.group', function(){
  it('#quit', function(){

    return biz.group.quit('1', '2')
    .then(doc => {
      if(doc) console.log(doc);
      assert.ok(true);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
