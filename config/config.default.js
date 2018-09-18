/**
 * @file 默认配置，所有环境都会使用
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1535617963473_3838';

    // plugins: egg-graphql
    config.middleware = ['graphql'];

    // Egg 内置的 [egg-security](https://github.com/eggjs/egg-security/) 插件默认对所有『非安全』的方法，例如 POST，PUT，DELETE 都进行 CSRF 校验。
    // 这里测试方便设置允许跨域访问，实际建议通过 ip 白名单的方式来做过滤。ignore: ctx => isInnerIp(ctx.ip), 或参考官方使用
    config.security = {
        csrf: {
            ignore: () => true
        }
    };

    /* ----- plugins: egg-graphql begin ----- */
    // config.graphql = {
    //     router: '/graphql',
    //     // 是否加载到 app 上，默认开启
    //     app: true,
    //     // 是否加载到 agent 上，默认关闭
    //     agent: false,
    //     // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    //     graphiql: true,
    //     // graphQL 路由前的拦截器
    //     onPreGraphQL: function* (ctx) {},
    //     // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    //     onPreGraphiQL: function* (ctx) {}
    // };

    /* ----- plugins: egg-graphql end -----  */
    return config;
};
