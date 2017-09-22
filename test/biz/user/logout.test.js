/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#logout', function(){

    return biz.user.logout('1', '2')
    .then(doc => {
      console.log(doc);
      assert.equal(true, _.isArray(doc));
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
