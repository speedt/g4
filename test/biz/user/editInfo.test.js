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
      nickname:      '4',
      current_score: '3',
      vip:           '2',
      id:            '1',
    })
    .then(doc => {
      console.log(doc);
      assert.equal('1', doc.id);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
