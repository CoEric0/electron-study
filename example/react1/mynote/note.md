# 使用 Yarn 来开始第一个项目
1. 使用 vite 工具构建，相比npx create-react-app，vite 的依赖体积更小，并且支持热更新。
```bash
yarn create vite@latest react1 -- --template react
```
当前项目为 react + ts + swc 模版。

2. 安装依赖
```bash
cd react1
yarn
```

3. 运行项目
```bash
yarn dev
```
或者将其暴露给局域网
```bash
yarn dev --host
```

# 了解模版项目中的各类文件
## 根目录下的配置文件
- package.json
    - 所有基于node.js的项目的配置文件，包含了项目的基本信息、依赖、(yarn)脚本定义。
- yarn.lock
    - yarn 的锁文件，由 yarn 自动管理，确保不同机器的开发兼容性。(It works on my machine)
- pnp系列
    - yarn 的 pnp 模式下的配置文件，替代传统 node_modules (本项目未使用)
- vite.config.ts
    - vite 的配置文件，定义开发行为、vite插件等。
- tsconfig.json
    - TypeScript 编译配置。可以细分为 node、具体 app 等
    - "noEmit": true: 重要：表示 tsc 命令本身不应产生输出文件。类型检查由 tsc 完成，而实际的代码转换和打包由 Vite (内部使用 esbuild 或 SWC) 完成。
    - "include": ["src"]: 指定此配置文件仅应用于 src 目录下的文件。
- eslint 系列
    - 开发插件 eslint 的配置文件

## src 目录下的文件
- App.tsx
    - 该文件是应用的入口文件，包含了应用的主要组件和路由配置。
- App.css
    - 组件样式
- index.css
    - 全局样式
- main.tsx
    - 该文件是应用的主文件，包含了应用的入口函数和渲染逻辑。
- vite-env.d.ts
    - 该文件是应用的类型声明文件，包含了应用的全局类型声明和模块声明。
## 工程化结构
- public
    - 不通过 vite 直接复制到构建输出目录中以提供给浏览器，通常用于存放静态资源，如图片、字体等。
- src
    - 该目录下的文件是应用的源代码，包含了应用的组件、样式、路由等。
- index.html
    - 入口 HTML 文件，Vite 会自动注入脚本和样式。


