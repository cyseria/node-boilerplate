/**
 * @file 生产环境配置
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

module.exports = appInfo => {
    const config = (exports = {});

    /* ----- plugins: egg-sequelize begin ----- */
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'node-demo-dev',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root@mAnyu'
    };
    /* ----- plugins: egg-sequelize end -----  */

    return config;
};
