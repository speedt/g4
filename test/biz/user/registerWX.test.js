/*!
 * test.emag.biz
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const assert = require('assert');
const biz    = require('emag.biz');

describe('biz.user', function(){
  it('#registerWX', function(){

    var data = {
      data: {
        user_info: {
          "openid":     "oGYue1LK1U5DPUyslPSSl_JpIGvE",
          "nickname":   "☆喵星纳粹元首希特喵☆",
          "sex":        1,
          "language":   "zh_CN",
          "city":       "Zhengzhou",
          "province":   "Henan",
          "country":    "CN",
          "headimgurl": "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoDA8HqHL3ZNz3jcQhf6aAryIdZ1j8Bh75TPTpoScMpODMsBa3mVBbQGDFxoajZiaF2JV9p8JHQXBQ/0",
          "privilege":  [],
          "unionid":    "o_Kvsv7qZbLl8kFuTLrVDhMRMF4U"
        }
      }
    };

    return biz.user.registerWX(data)
    .then(doc => {
      console.log(doc);
      assert.notEqual(null, doc);
    })
    .catch(err => {
      assert.ok(!err, err);
    })
  });
});
