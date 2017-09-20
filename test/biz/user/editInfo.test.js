/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#editInfo', function(){

    return biz.user.editInfo({
      nickname:      'hx',
      current_score: '1',
      vip:           '2',
      id:            'test_id',
    })
    .then(doc => {
      assert.equal('test_id', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
