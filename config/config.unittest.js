/**
 * @file 测试环境配置
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

module.exports = appInfo => {
    const config = (exports = {});

    /* ----- plugins: egg-sequelize begin ----- */
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'node-demo-unittest',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root@mAnyu'
    };
    /* ----- plugins: egg-sequelize end -----  */

    return config;
};
