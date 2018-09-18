/**
 * @file TESTS=test/app/graphql/user.test.js npm run test-local
 * @author 陈蔓青 <chenmanqing@baidu.com>
 */

'use strict';

const {app, assert} = require('egg-mock/bootstrap');

describe('test/app/graphql/user.test.js', () => {
    it('get user from graphql', async () => {
        const user = await app.factory.create('user');
        const query = JSON.stringify({
            query: `{ user(id: ${user.id}) { id name } }`
        });

        const ctx = app.mockContext();
        // eslint-disable-next-line
        const {data} = await ctx.service.graphql.query(query);
        assert.equal(data.user.id, user.id);
        assert.equal(data.user.name, user.name);
    });
});
