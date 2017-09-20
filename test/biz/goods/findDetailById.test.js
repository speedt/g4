/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const _      = require('underscore');
const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.goods', function(){
  it('#findDetailById', function (){

    return biz.goods.findDetailById('1')
    .then(docs => {
      console.log(docs);
      assert.equal(true, _.isArray(docs));
    })
    .catch(err => {
      assert.ok(!err, err);
    });
  });
});
