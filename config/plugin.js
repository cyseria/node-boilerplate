/**
 * @file plugin
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

// plugins: egg-validate
exports.validate = {
    enable: true,
    package: 'egg-validate'
};

// plugins: egg-graphql
// exports.graphql = {
//     enable: true,
//     package: 'egg-graphql'
// };

// plugins: egg-sequelize
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
};
