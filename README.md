# Node Demo

[CHANGELOG](https://github.com/cyseria/node-boilerplate/blob/master/CHANGELOG.md)

## 🛠 开发流程

### 本地开发

项目基于 node v8.11.3 开发，如果跑起来有问题，可以尝试下切换版本 :)
```bash
# 使用 nvm
$ nvm use
```

**安装 mysql 并建立数据库**

```bash
brew install mysql # macOS
brew service start mysql

# sql
create database `node-demo-dev`;
create database `node-demo-unittest`;
```

**安装 node 依赖**

```bash
npm i
```

**执行 migration 执行数据变更**

```bash
# for develop
npm run sequelize -- db:migrate
```

**启动项目**

```bash
npm run dev
```
open http://localhost:8080/


### 测试

**建立数据库**

```
# for unittest
NODE_ENV=test npm run sequelize -- db:migrate
```

**运行测试**

```bash
npm run test-local
```

**运行特定用例文件**

```bash
TESTS=test/x.test.js npm run test-local
```

数据库测试使用 [factory-girl]: https://github.com/aexmachina/factory-girl 快速创建数据

### 部署到 dev


### 上线

## 📝 项目相关

### 指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


### 相关依赖

所有插件依赖相关的，可以查找通过查找代码片段获取，如果不需要使用，直接删去即可。结构如下：

```javascript

// plugins: egg-xxx

or:

/* ----- plugins: egg-xxx begin ----- */
xxxxx
/* ----- plugins: egg-xxx end -----  */

```

目前项目的依赖如下：

- [x] 数据校验: [egg-validate](https://github.com/eggjs/egg-validate)
- [] 数据库
    - [] simple: [egg-mysql](https://github.com/eggjs/egg-mysql), 如需使用可参照官方文档 https://eggjs.org/zh-cn/tutorials/mysql.html 配置，或者参考 `baidu/hi/node-robot-server` 项目。
    - [x] use ORM: [egg-sequelize](https://github.com/eggjs/egg-sequelize), [mysql2](https://github.com/sidorares/node-mysql2)。使用 [sequelize-cli](https://github.com/sequelize/cli) 来管理数据库的接口变更 & 数据迭代。
- [x] api 接口: [egg-graphql](https://github.com/eggjs/egg-graphql), restful
- [] 消息队列: kafka


## ✨ 附: 如何优雅的开发&提交代码

1. 项目使用了 [prettier](https://prettier.io/) 来做一些规范约定，建议对编辑器安装相关插件，便于自动格式化代码，统一项目整体的风格。

2. 强烈建议使用主流的 [约定式 `comment message`](https://conventionalcommits.org/lang/zh-Hans) 格式

    ```
    <type>(<scope>): <subject>

    <body>

    <footer>
    ```

3. 使用 `npm run commit` 命令提交，或者全局安装 [commitizen](https://github.com/commitizen/cz-cli)。而不是直接使用 `git commit -m "xxx"`
    - 会被 `changelog` 记录的 type 有: `feat(新功能)`, `fix(修复 bug)`, `perf(性能优化)`, `revert(代码回滚)`

4. 提交代码的时候在 `commit message` 中带上 `issue` 卡片信息。


5. 上线的时候对版本进行更新。使用 `npm version patch` or `npm version xxx`，而不只是直接提交完代码就去发单。更新版本会自动执行以下内容:
    - fecs check --level 2
    - run test script
    - create CHANGELOG