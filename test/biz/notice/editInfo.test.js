/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.notice', function(){
  it('#editInfo', function (done){

    var newInfo = {
      id:      'test_id',
      title:   'title_1',
      content: 'content_1',
    };

    biz.notice.editInfo(newInfo, function (err){
      if(err) return assert.ok(!err);
      done();
    });
  });
});
