# Electron 学习大纲

这份大纲参考了 Electron 官方文档的结构，并结合了核心概念的学习路径，作为我们学习 Electron 的路线图。

## 一、入门与基础

1.  **Electron 是什么？**
    *   [[什么是 Electron？|核心概念]] ([[主进程 (Main Process)]], [[渲染进程 (Renderer Process)]])
    *   与 Web 开发的异同
    *   #tag/introduction
2.  **快速开始**
    *   环境搭建 (Node.js, npm/yarn)
    *   创建第一个 Electron 应用 (`electron-forge`)
    *   项目结构解析 (`package.json`, `main process entry`, `renderer process files`, `preload script`)
    *   #tag/getting-started #tag/setup
3.  **开发流程**
    *   开发、构建与打包基础 (`electron-forge` commands: `start`, `make`, `package`)
    *   调试技巧 (主进程、渲染进程)
    *   #tag/development #tag/build #tag/debug

## 二、核心概念深入

1.  **进程模型**
    *   [[主进程 (Main Process)]]
    *   [[渲染进程 (Renderer Process)]]
    *   [[进程间通信 (IPC)]] (`ipcMain`, `ipcRenderer`, `contextBridge`, `invoke/handle`)
    *   [[预加载脚本 (Preload Scripts)]]
    *   #tag/core-concept #tag/process-model
2.  **应用生命周期**
    *   `app` 模块事件 (e.g., `ready`, `window-all-closed`, `activate`)
    *   窗口管理 (`BrowserWindow` 创建与控制)
    *   #tag/core-concept #tag/app-lifecycle
3.  **原生 UI**
    *   菜单 (`Menu`, `MenuItem`)
    *   对话框 (`dialog`)
    *   托盘 (`Tray`)
    *   通知 (`Notification`)
    *   #tag/native-ui
4.  **安全性**
    *   安全注意事项概览
    *   `contextIsolation` 和 `contextBridge`
    *   `sandbox`
    *   #tag/security

## 三、常用 API 与模块

*   `app`
*   `BrowserWindow`
*   `ipcMain` / `ipcRenderer`
*   `Menu` / `MenuItem`
*   `dialog`
*   `shell`
*   `webContents`
*   `session`
*   `protocol`
*   (根据学习进度和需求逐步添加)
*   #tag/api

## 四、进阶主题

1.  **打包与分发**
    *   `electron-forge` 深入
    *   代码签名
    *   自动更新
    *   #tag/packaging #tag/distribution
2.  **性能优化**
    *   #tag/performance
3.  **测试**
    *   #tag/testing
4.  **与原生代码集成** (可选)
    *   Node.js C++ Addons
    *   #tag/native-integration

## 五、实战与示例

*   (根据学习过程中的具体示例补充)
*   #tag/example

---

**说明:**

*   `[[WikiLink]]` 用于链接到 `./notes/` 目录下的对应笔记文件。
*   `#tag` 用于分类和快速查找。
*   本大纲会根据学习进度和理解动态调整。