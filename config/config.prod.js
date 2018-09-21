/**
 * @file 生产环境配置
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

module.exports = appInfo => {
    const config = (exports = {});

    config.logger = {
        dir: `${appInfo.root}/logs`
    };

    /* ----- plugins: egg-sequelize begin online ----- */
    config.sequelize = {
        dialect: 'mysql',
        database: 'graphql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root@mAnyu'
    };

    /* ----- plugins: egg-sequelize end online -----  */

    return config;
};
