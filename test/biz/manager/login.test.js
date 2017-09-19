/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.manager', function(){
  it('#login', function(){

    return biz.manager.login({
      user_name: 'admin',
      user_pass: '1',
    })
    .then(doc => {
      assert.equal('1', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
