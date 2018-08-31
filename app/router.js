/**
 * @file router
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
};
