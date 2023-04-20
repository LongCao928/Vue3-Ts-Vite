<div align="center">
   
   [![vue](https://img.shields.io/badge/3.2.47-vue-brightgreen)](https://cn.vuejs.org/guide/introduction.html)
   [![vue-router](https://img.shields.io/badge/4.1.6-vue%20router-yellow)](https://router.vuejs.org/zh/)
   [![pinia](https://img.shields.io/badge/2.0.32-pinia-lightgrey)](https://pinia.vuejs.org/zh/)
   [![vite](https://img.shields.io/badge/4.1.4-vite-orange)](https://cn.vitejs.dev/guide/)
   [![axios](https://img.shields.io/badge/1.3.5-axios-blueviolet)](https://www.axios-http.cn/docs/intro)
   [![element-plus](https://img.shields.io/badge/2.3.3-element--plus-ff69b4)](https://element-plus.org/zh-CN/guide/design.html)

   <br />

   [![typescript](https://img.shields.io/badge/4.8.4-typescript-blue)]()
   [![eslint](https://img.shields.io/badge/8.34.0-eslint-red)]()
   [![prettier](https://img.shields.io/badge/2.8.4-prettier-orange)]()
   [![sass](https://img.shields.io/badge/1.62.0-sass-ff69b4)]()
   [![qs](https://img.shields.io/badge/6.11.1-qs-blueviolet)]()
   [![husky](https://img.shields.io/badge/8.0.3-husky-lightgrey)]()
   [![lint-staged](https://img.shields.io/badge/13.2.1-lint--staged-yellow)]()
   [![vue-tsc](https://img.shields.io/badge/1.2.0-vue--tsc-brightgreen)]()
   
</div>

# Vue3+Ts+Vite 开发基础模板

## 推荐 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 对 ts 中 `.vue` 导入的类型支持

TypeScript 无法默认情况下处理 `.vue` 导入的输入信息，
因此，我们用 `vue-tsc` 替换 `tsc` CLI 进行类型检查。 在开发中, 我们需要 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 使 TypeScript 语言服务意识到 `.vue` 类型。

如果独立的 TypeScript plugin 您感觉不够快，那么 Volar 还实现了更具性能的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) 。您可以通过以下步骤启用它：

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 自定义配置

查看 [Vite Configuration Reference](https://vitejs.dev/config/).

## 🚀 开发

```bash
# 配置
1. 安装 eslint 插件
2. 安装 prettier 插件
3. node v18.15.x
4. npm v9.5.x

## 依赖安装

```sh
npm install
```

### 开发环境

```sh
npm run dev
```

### 生产环境打包

```sh
npm run build
```

### 代码格式检查[ESLint](https://eslint.org/) 

```sh
npm run lint
```

### 目录

```
├─ xxx.d.ts // ts 环境变量配置
├─ tsconfig.json // ts 全局配置
├─ tsconfig.node.json // ts配置
├─ .vscode // vscode 配置文件
├─ public // 根目录静态资源(/访问)
├─ .env.xxx // 各环境的配置文件
├─ vite.config.ts // 项目配置
├─ index.html // 入口文件
├─ .gitignore // 配置 git 提交忽略文件
├─ .eslintrc.cjs // eslint 配置
├─ .prettierrc.json // prettier 配置
├─ .package.json // 项目配置文件
├─ .package-lock.json // 安装的依赖包指定版本(node_modules 快照)
└─ src
   │─ App.vue // 根容器
   │─ main.ts
   ├─ components // 组件
   ├─ assets // 静态资源
   ├─ views // 页面
   ├─ router // 路由
   ├─ stores // pinia 状态
   ├─ servers // 服务
   ├─ utils // 公用方法
```

## Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
