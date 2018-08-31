/**
 * @file home
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
}

module.exports = HomeController;
