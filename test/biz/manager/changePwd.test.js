/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.manager', function(){
  it('#changePwd', function(){

    return biz.manager.changePwd({
      user_pass: '1',
      old_pass:  '1',
      id:        '1',
    })
    .then(doc => {
      console.log(doc)
      assert.equal('1', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
