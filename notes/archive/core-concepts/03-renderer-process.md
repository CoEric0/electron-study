# 渲染进程 (Renderer Process)

与只有一个[[主进程 (Main Process)]]不同，一个 Electron 应用可以有**多个渲染进程**。

每个渲染进程负责管理一个网页（通常是一个 `BrowserWindow` 实例或 `BrowserView` 实例加载的页面）。你可以把它看作是浏览器中的一个标签页。

渲染进程的主要职责是：

1.  **渲染界面**：使用 HTML, CSS 和 JavaScript 来构建用户界面。
2.  **执行页面逻辑**：处理用户交互、运行前端 JavaScript 代码。

**关键点：**

*   每个渲染进程都运行在它自己的沙箱环境中，默认情况下**不能直接访问 Node.js API 或操作系统资源**。这是出于安全考虑。
*   如果渲染进程需要访问系统功能（如读写文件），它必须通过[[5. 进程间通信 (IPC)]]与主进程协作。
*   [[预加载脚本 (Preload Scripts)]] 是连接渲染进程和主进程能力的关键桥梁。

#tag/core-concept #tag/process-model

---

[[什么是 Electron？]]
[[主进程 (Main Process)]]
[[5. 进程间通信 (IPC)]]
[[预加载脚本 (Preload Scripts)]]