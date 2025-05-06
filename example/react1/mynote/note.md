# 使用 Yarn 来开始第一个项目
1. 使用 vite 工具构建，相比npx create-react-app，vite 的依赖体积更小，并且支持热更新。
```bash
yarn create vite@latest react1 --template react
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
    - 该目录下的文件会被直接复制到构建输出目录中，通常用于存放静态资源，如图片、字体等。
- src
    - 该目录下的文件是应用的源代码，包含了应用的组件、样式、路由等。


