/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.cfg', function(){
  it('#editInfo', function (done){

    var newInfo = {
      value_: '1',
      key_:   '2',
      type_:  '3',
    };

    biz.cfg.editInfo(newInfo, function (err, doc){
      if(err) return assert.ok(!err);
      assert.equal('1', doc.value_);
      done();
    });
  });
});
