/*!
 * emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var add = require('../../../src/biz/user/getById');
var expect = require('chai').expect;

describe('加法函数的测试', function(){
  it('1 加 1 应该等于 2', function(){
    expect(add(1, 1)).to.be.equal(1);
  });
});
