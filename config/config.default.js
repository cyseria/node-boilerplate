/**
 * @file config
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1535617963473_3838';

    // add your config here
    config.middleware = [];

    return config;
};
