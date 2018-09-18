/**
 * @file 对用户的查询进行处理
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

module.exports = {
    Query: {
        user(root, {id}, ctx) {
            return ctx.connector.user.getInfoByService(id);
        }
    }
};
