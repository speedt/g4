/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#getByChannelId', function(){

    return biz.user.getByChannelId('1', '2')
    .then(doc => {
      console.log(doc);
      assert.equal('1', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
