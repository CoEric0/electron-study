# Electron 项目结构解析

当我们使用 `electron-forge` 创建一个典型的 Electron + TypeScript 项目时，会生成一套标准的目录和文件结构。理解这些文件的作用对于后续开发至关重要。

## 关键文件与目录

以下是 `example` 目录中一些核心文件和目录的说明：

1.  **`package.json`**: 
    *   Node.js 项目的清单文件，定义了项目名称、版本、依赖项、脚本等。
    *   对于 Electron 项目，它还包含了 `electron-forge` 的配置，以及指定主进程入口文件的 `main` 字段。
    *   #tag/configuration #tag/npm

2.  **`forge.config.ts`**: 
    *   `electron-forge` 的配置文件 (TypeScript 格式)。
    *   用于配置应用的打包、构建和发布选项 (makers, packagers, publishers)。
    *   #tag/configuration #tag/build #tag/packaging

3.  **`src/` 目录**: 存放应用的主要源代码。
    *   **`index.ts`**: [[主进程 (Main Process)]] 的入口文件。这是 Electron 应用启动时首先执行的文件，负责创建浏览器窗口 (`BrowserWindow`) 和处理系统事件。
    *   **`renderer.ts`**: [[渲染进程 (Renderer Process)]] 的主要脚本文件。它运行在网页环境 (`index.html`) 中，负责处理用户界面逻辑。
    *   **`index.html`**: 应用的主 HTML 文件，作为渲染进程的界面载体。
    *   **`preload.ts`**: [[预加载脚本 (Preload Scripts)]]。这是一个特殊的脚本，运行在渲染进程加载网页之前，但可以访问 Node.js API 和部分 Electron API。它主要用于通过 `contextBridge` 安全地将主进程的功能暴露给渲染进程。
    *   **`index.css`**: (或类似 CSS 文件) 用于定义 `index.html` 的样式。
    *   #tag/source-code

4.  **`tsconfig.json`**: TypeScript 配置文件，定义了 TypeScript 编译器的选项。
    *   #tag/configuration #tag/typescript

5.  **`webpack.*.config.ts`**: Webpack 配置文件。
    *   `electron-forge` 使用 Webpack 来打包和处理主进程、渲染进程和预加载脚本的代码。
    *   #tag/configuration #tag/build #tag/webpack

## 总结

理解这个基本的项目结构有助于我们定位不同功能的代码，并为后续学习 [[进程间通信 (IPC)]] 等核心概念打下基础。

#tag/getting-started #tag/project-structure

---

[[快速开始]]
[[主进程 (Main Process)]]
[[渲染进程 (Renderer Process)]]
[[预加载脚本 (Preload Scripts)]]