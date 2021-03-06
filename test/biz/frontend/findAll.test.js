/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.frontend', function(){
  it('#findAll', function (){

    return biz.frontend.findAll()
    .then(docs => {
      console.log(docs);
      assert.equal(true, _.isArray(docs));
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
