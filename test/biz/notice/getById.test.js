/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.notice', function(){
  it('#getById', function(){

    return biz.notice.getById('da426e6076be11e7ad1a29fa785dd421')
    .then(doc => {
      assert.equal('da426e6076be11e7ad1a29fa785dd421', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
