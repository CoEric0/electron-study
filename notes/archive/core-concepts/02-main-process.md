# 主进程 (Main Process)

在 Electron 应用中，有且只有一个**主进程**。

你可以将主进程想象成应用的“大脑”或“指挥中心”。它是整个应用程序的入口点，负责：

1.  **创建和管理应用的窗口** (`BrowserWindow` 实例)。
2.  **处理操作系统级别的交互**：例如创建菜单、响应应用的生命周期事件（启动、关闭等）。
3.  **与所有渲染进程通信**。

主进程运行在一个完整的 Node.js 环境中，因此它可以直接使用所有的 Node.js API，比如访问文件系统 (`fs`)、网络 (`net`) 等。

**关键点：**

*   主进程不负责渲染 HTML 界面，那是[[渲染进程 (Renderer Process)]]的工作。
*   主进程是应用的核心，它的崩溃通常意味着整个应用的退出。

#tag/core-concept #tag/process-model

---

[[什么是 Electron？]]
[[渲染进程 (Renderer Process)]]
[[5. 进程间通信 (IPC)]]
[[预加载脚本 (Preload Scripts)]]