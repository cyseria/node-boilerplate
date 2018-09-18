/**
 * @file 取 User 数据
 * 如果需要使用 dataloader 来缓存数据降低数据库的访问频次，可以参见 https://zhuanlan.zhihu.com/p/30604868
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

// const DataLoader = require('dataloader');

class UserConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }

    async getInfoByService(id) {
        return await this.ctx.service.user.find(id);
    }
}

module.exports = UserConnector;
