/**
 * @file 路由相关
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    // restful 风格 url 定义: https://eggjs.org/zh-cn/basics/router.html#restful-%E9%A3%8E%E6%A0%BC%E7%9A%84-url-%E5%AE%9A%E4%B9%89
    router.resources('users', '/users', app.controller.user);
};
