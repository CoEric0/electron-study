# 从 Webpack 迁移到 Vite + React

本文档记录了将 `example` 项目从基于 `electron-forge` 的 Webpack + TypeScript 模板迁移到使用 Vite + React 的过程。

#tag/migration #tag/vite #tag/react #tag/electron-forge

## 迁移背景

原始项目使用 `electron-forge` 的 Webpack 模板，虽然功能完善，但 Webpack 的冷启动和热更新速度在大型项目中可能较慢。Vite 利用浏览器原生 ES 模块导入（ESM）和按需编译，提供了极快的冷启动和即时热模块更换（HMR），能显著提升开发体验。

React 是一个流行的前端 UI 库，与 Vite 结合使用可以构建现代化的用户界面。

## 迁移步骤

1.  **调整 `package.json`**
    *   **添加依赖:**
        *   `vite`: 核心构建工具。
        *   `@vitejs/plugin-react`: Vite 的 React 插件。
        *   `electron-vite`: 简化 Vite 在 Electron 中配置的插件。
        *   `react`, `react-dom`: React 库。
        *   `@types/react`, `@types/react-dom`: React 的 TypeScript 类型定义。
    *   **移除依赖:**
        *   `@electron-forge/plugin-webpack`
        *   `@vercel/webpack-asset-relocator-loader`
        *   `css-loader`, `style-loader`, `ts-loader`, `node-loader`
        *   `fork-ts-checker-webpack-plugin`
    *   **更新 `main` 字段:** 指向 Vite 构建后的主进程入口，例如 `dist/main/index.js`。
    *   **更新 `scripts`:**
        *   添加 `dev`: `electron-vite dev` 用于启动开发服务器。
        *   添加 `build`: `electron-vite build` 用于构建生产版本。
        *   保留或调整 `start`, `package`, `make` 等 `electron-forge` 相关脚本。

2.  **创建 `vite.config.ts`**
    *   这是 Vite 的核心配置文件。
    *   使用 `defineConfig` 定义配置。
    *   引入 `@vitejs/plugin-react` 插件来处理 React 组件。
    *   引入 `vite-plugin-electron` (或类似插件如 `vite-plugin-electron-renderer`) 来配置 Electron 的主进程 (`main`)、预加载脚本 (`preload`) 和渲染进程 (`renderer`) 的入口和构建。
    *   配置 `build.rollupOptions.input` 指向渲染进程的 HTML 入口文件 (`index.html`)。

3.  **修改主进程入口 (`src/index.ts`)**
    *   移除 Webpack 特有的 `declare const MAIN_WINDOW_WEBPACK_ENTRY` 和 `MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY`。
    *   使用 `process.env['VITE_DEV_SERVER_URL']` (由 `electron-vite` 注入) 来判断是开发环境还是生产环境。
    *   开发环境下，使用 `mainWindow.loadURL(VITE_DEV_SERVER_URL)` 加载 Vite 开发服务器提供的页面。
    *   生产环境下，使用 `mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))` 加载构建后的 HTML 文件。
    *   更新 `webPreferences.preload` 的路径，指向 Vite 构建后的预加载脚本路径，例如 `path.join(__dirname, '../preload/index.js')`。
    *   确保 `contextIsolation` 为 `true`，`nodeIntegration` 为 `false` (安全最佳实践)。

4.  **重构渲染进程**
    *   **重命名:** 将 `src/renderer.ts` 重命名为 `src/renderer.tsx` 以支持 JSX。
    *   **重写:** 使用 React 和 ReactDOM 重写渲染逻辑。
        *   引入 `React`, `ReactDOM`, `useState`, `useEffect` 等。
        *   创建一个根组件 (例如 `App`)。
        *   使用 `ReactDOM.createRoot().render()` 将根组件挂载到 HTML 中的某个元素 (例如 `<div id="root">`)。
        *   将原来的 DOM 操作 (如 `document.getElementById`) 替换为 React 的状态管理 (如 `useState`) 和事件处理。
        *   保留或调整与主进程的 [[5. 进程间通信 (IPC)]] 逻辑 (通过预加载脚本暴露的 API)。
    *   **更新 `index.html`:**
        *   移除原有的 HTML 内容 (如按钮、文本等)。
        *   添加一个 React 应用的挂载点，例如 `<div id="root"></div>`。
        *   添加 `<script type="module" src="/src/renderer.tsx"></script>`。Vite 会在开发和构建时处理这个脚本引用。

5.  **调整预加载脚本 (`src/preload.ts`)**
    *   通常不需要大改，确保 `contextBridge.exposeInMainWorld` 暴露的 API 仍然符合需求。

6.  **删除 Webpack 配置文件**
    *   删除 `webpack.main.config.ts`, `webpack.renderer.config.ts`, `webpack.rules.ts`, `webpack.plugins.ts`。

7.  **更新 `forge.config.ts` (可选)**
    *   移除 `plugins` 数组中的 `@electron-forge/plugin-webpack`。
    *   根据需要调整其他配置。

## 运行与构建

*   **开发:** 运行 `npm run dev` 或 `yarn dev`。
*   **构建:** 运行 `npm run build` 或 `yarn build`。
*   **打包:** 运行 `npm run package` 或 `yarn package` / `npm run make` 或 `yarn make` (依赖 `electron-forge`)。

## 优点

*   **开发速度快:** Vite 的冷启动和 HMR 非常迅速。
*   **现代前端生态:** 可以方便地使用最新的前端技术和工具链。
*   **配置相对简洁:** `electron-vite` 简化了许多配置。

## 注意事项

*   需要理解 Vite 的工作原理，特别是开发服务器和生产构建的区别。
*   `electron-vite` 或类似插件的选择和配置是关键。
*   主进程和渲染进程的路径处理需要根据 Vite 的构建输出进行调整。

---

[[什么是 Electron？]]
[[主进程 (Main Process)]]
[[渲染进程 (Renderer Process)]]
[[预加载脚本 (Preload Scripts)]]
[[5. 进程间通信 (IPC)]]
[[打包与分发]]
[[Vite]]
[[React]]