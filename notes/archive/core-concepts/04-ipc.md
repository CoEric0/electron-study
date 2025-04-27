# 进程间通信 (IPC)

在 Electron 中，[[主进程 (Main Process)]] 和 [[渲染进程 (Renderer Process)]] 是相互隔离的，它们不能直接访问彼此的模块或变量。为了让它们能够交流，Electron 提供了**进程间通信 (IPC)** 机制。

想象一下，主进程像后端服务器，渲染进程像前端页面。它们需要一种方式来发送消息和请求数据。

## 核心模块

*   `ipcMain`: 在主进程中使用，用于监听和响应来自渲染进程的消息。
*   `ipcRenderer`: 在渲染进程中使用，用于向主进程发送消息。
*   `contextBridge`: 在[[预加载脚本 (Preload Scripts)]]中使用，是**推荐**的方式，用于安全地将主进程的功能暴露给渲染进程。

## 通信方式

1.  **渲染进程 -> 主进程 (异步消息):** `ipcRenderer.send(channel, ...args)` 发送，`ipcMain.on(channel, (event, ...args) => {})` 接收。
2.  **渲染进程 -> 主进程 (双向同步/异步):** `ipcRenderer.invoke(channel, ...args)` 发送，`ipcMain.handle(channel, async (event, ...args) => { return result; })` 接收并返回值。
3.  **主进程 -> 渲染进程:** `webContents.send(channel, ...args)` 发送，`ipcRenderer.on(channel, (event, ...args) => {})` 接收。

**注意:** 直接使用 `ipcRenderer` 和 `ipcMain` 进行通信存在安全风险，尤其是在加载远程内容时。强烈建议通过 `contextBridge` 在预加载脚本中进行封装。

#tag/core-concept #tag/process-model #tag/ipc

---

[[什么是 Electron？]]
[[主进程 (Main Process)]]
[[渲染进程 (Renderer Process)]]
[[预加载脚本 (Preload Scripts)]]