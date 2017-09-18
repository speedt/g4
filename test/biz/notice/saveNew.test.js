/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.notice', function(){
  it('#saveNew', function (done){

    var newInfo = {
      id:      'test_id',
      title:   'title',
      content: 'content',
      user_id: '1',
    };

    biz.notice.saveNew(newInfo, function (err){
      if(err) return assert.ok(!err);
      done();
    });
  });
});
