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

### 根据 [ESLint](https://eslint.org/) 规则修复

```sh
npm run lint
```

### 目录

```
├─ env.d.ts // ts
├─ tsconfig.json // ts配置
├─ tsconfig.node.json // ts配置
├─ .vscode // vscode 配置文件
├─ public // 根目录静态资源(/访问)
├─ .env.xxx // 各环境的配置文件
├─ vite.config.ts // 项目配置
├─ index.html // 入口文件
├─ .__ignore // 配置忽略文件
├─ .eslintrc.cjs // eslint 配置
├─ .prettierrc.json // prettier 配置
├─ .package.json // 项目配置文件
├─ .package-lock.json // 安装的依赖包指定版本(node_modules 快照)
└─ src
   │─ App.vue // 根容器
   │─ main.ts
   │─ style.css 样式文件
   ├─ components // 组件
   ├─ assets // 静态资源
   ├─ pages // 页面
   ├─ router // 路由
   ├─ store // pinia 状态
   ├─ servers // 服务
   ├─ utils // 公用方法
```
