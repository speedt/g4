/*!
 * emag.cfg
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const path  = require('path');
const cwd   = process.cwd();
const conf  = require(path.join(cwd, 'settings'));

const http  = require('http');
const ajax  = require('speedt-utils').ajax;
const _     = require('underscore');

const log4js = require('log4js');

// log4js.configure({
//   appenders: {
//     cfg: {
//       type: 'dateFile',
//       filename: path.join(cwd, 'logs'),
//       pattern: 'yyyy-MM-dd.log',
//       alwaysIncludePattern: true
//     },
//     console: {
//       type: 'console'
//     }
//   },
//   categories: {
//     default: {
//       appenders: ['cfg', 'console'],
//       level: 'debug'
//     }
//   }
// });

const logger = log4js.getLogger('cfg');

var p1 = new Promise((resolve, reject) => {
  ajax(http.request, {
    host: conf.app.resHost,
    port: 80,
    path: '/assets/cfg/common.json',
    method: 'GET',
  }, null, null).then(html => {
    resolve(JSON.parse(html));
  }).catch(reject);
});

Promise.all([p1]).then(values => {
  exports.common = values[0].data;

  const biz = require('emag.biz');

  biz.cfg.findAll(null, (err, docs) => {
    if(err) return logger.error('load dynamic config:', err);

    var dynamic = exports.dynamic = {};

    for(let i of docs){
      if(!dynamic[i.type_]) dynamic[i.type_] = {};
      dynamic[i.type_][i.key_] = i.value_;
    }

    logger.debug('loaded dynamic config:', dynamic);
    logger.info('loaded all config: success');
  });

}).catch(err => {
  logger.error('load config:', err);
  process.exit(1);
});
