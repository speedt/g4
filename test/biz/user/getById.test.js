/*!
 * emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const biz = require('emag.biz');
const expect = require('chai').expect;

describe('加法函数的测试', function(){
  it('1 加 1 等于 2', function(){
    expect(biz.user.getById(1, 1)).to.be.equal(1);
  });
});
