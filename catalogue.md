# Electron 学习大纲

本大纲基于 Electron 官方文档结构，旨在提供一个系统化的学习路径。我们将根据此大纲逐步深入学习 Electron。

## 1. 入门 (Getting Started)

-   [[Electron 是什么]]
-   [[快速入门]] (创建第一个 Electron 应用)
-   [[应用结构]]
-   [[主进程与渲染器进程]]
-   [[预加载脚本]]
-   [[上下文隔离]]
-   [[进程间通信 (IPC)]]
    -   [[渲染器到主进程 (单向)]]
    -   [[渲染器到主进程 (双向)]]
    -   [[主进程到渲染器]]
    -   [[渲染器到渲染器]]
-   [[使用 Electron Vite 进行打包和分发]]

## 2. 核心概念 (Core Concepts)

-   [[应用生命周期]]
-   [[窗口管理 (BrowserWindow)]]
-   [[菜单 (Menu)]]
-   [[原生文件对话框]]
-   [[托盘 (Tray)]]
-   [[通知 (Notification)]]
-   [[最近使用的文档]]
-   [[应用进度]]
-   [[离屏渲染]]
-   [[原生 Node.js 模块]]
-   [[安全性]]

## 3. API 模块深入

(根据学习进度和需求，选择性深入)

-   **主进程 API:**
    -   `app`
    -   `BrowserWindow`
    -   `ipcMain`
    -   `Menu`, `MenuItem`
    -   `Tray`
    -   `dialog`
    -   `Notification`
    -   `globalShortcut`
    -   `powerMonitor`, `powerSaveBlocker`
    -   `screen`
    -   `shell`
    -   ...
-   **渲染器进程 API:**
    -   `ipcRenderer`
    -   `webFrame`
    -   `desktopCapturer`
    -   ...
-   **通用 API:**
    -   `clipboard`
    -   `nativeImage`
    -   `contextBridge`
    -   ...

## 4. 开发实践 (Development)

-   [[调试主进程]]
-   [[调试渲染器进程]]
-   [[使用 WebDriverIO 进行端到端测试]]
-   [[单元测试主进程]]
-   [[使用开发者工具]]
-   [[内容安全策略 (CSP)]]

## 5. 分发 (Distribution)

-   [[代码签名]] (macOS, Windows)
-   [[自动更新]]
-   [[应用商店提交]] (Mac App Store, Windows Store)

## 6. 进阶主题 (Advanced)

-   [[性能优化]]
-   [[辅助功能 (Accessibility)]]
-   [[国际化]]
-   [[使用原生 Node.js 模块]]
-   [[安全最佳实践]]

---

**说明:**

-   `[[WikiLink]]` 格式表示这是一个 Obsidian 笔记链接，我们将在学习过程中创建对应的笔记文件。
-   本大纲是一个初步规划，可以根据实际学习情况进行调整。