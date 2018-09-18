'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // GET /users
    async index() {
        const ctx = this.ctx;
        const query = {
            limit: ctx.helper.parseInt(ctx.query.limit),
            offset: ctx.helper.parseInt(ctx.query.offset)
        };
        ctx.body = await ctx.service.user.list(query);
    }

    // GET /users/:id
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
    }

    // POST /users
    async create() {
        const ctx = this.ctx;
        const user = await ctx.service.user.create(ctx.request.body);
        ctx.status = 201;
        ctx.body = user;
    }

    // PUT /users/:id
    async update() {
        const ctx = this.ctx;
        const id = ctx.helper.parseInt(ctx.params.id);
        const body = ctx.request.body;
        ctx.body = await ctx.service.user.update({id, updates: body});
    }

    // DELETE /users/:id
    async destroy() {
        const ctx = this.ctx;
        const id = ctx.helper.parseInt(ctx.params.id);
        await ctx.service.user.del(id);
        ctx.status = 200;
    }
}

module.exports = UserController;
