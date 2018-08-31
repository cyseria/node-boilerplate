# Node Demo
### 本地开发

项目基于 node v8.11.3 开发，如果跑起来有问题，可以尝试下切换版本 :)
```bash
# 使用 nvm
$ nvm use
```

运行

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

#### ✨ 如何优雅的提交代码

1. 强烈建议使用主流的 [约定式 `comment message`](https://conventionalcommits.org/lang/zh-Hans) 格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

2. 使用 `npm run commit` 命令提交，或者全局安装 [commitizen](https://github.com/commitizen/cz-cli)。而不是直接使用 `git commit -m "xxx"`
    - 会被 `changelog` 记录的 type 有: `feat(新功能)`, `fix(修复 bug)`, `perf(性能优化)`, `revert(代码回滚)`

    ![](https://eux-public.bj.bcebos.com/2018/08/31/18ba8de6d5f699a4980441b3c.png)

3. 提交代码的时候在 `commit message` 中带上 `iCafe` 卡片信息。(ps. 已经与代码库关联，可直接输入卡片 id)

    ![](https://eux-public.bj.bcebos.com/2018/08/31/17255c71f611d1359a8b4f74c.png)
    
    ![](https://eux-public.bj.bcebos.com/2018/08/31/17f024589d4da55697196207b.png)

4. 上线的时候对版本进行更新。使用 `npm version patch` or `npm version xxx`，而不只是直接提交完代码就去发单。更新版本会自动执行以下内容:
    - fecs check --level 2
    - run test script
    - create CHANGELOG


### 部署到 dev

使用微云 docker 部署，相关操作已在流水线中集成。

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


进一步了解，参见 [egg 文档][egg]。
