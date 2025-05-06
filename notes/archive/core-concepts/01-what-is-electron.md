# 什么是 Electron？

Electron 是一个使用 Web 技术（HTML, CSS, JavaScript）构建跨平台桌面应用程序的框架。

简单来说，你可以把它想象成：

1.  **一个迷你的 Chrome 浏览器：** Electron 内嵌了 Chromium（Chrome 的开源内核），负责渲染界面 (HTML/CSS)。
2.  **加上 Node.js：** Electron 集成了 Node.js，让你可以访问操作系统级别的功能（如文件系统、网络等）。

这意味着你可以利用你熟悉的 Web 开发技能来创建功能强大的桌面应用，这些应用可以同时运行在 Windows, macOS 和 Linux 上。

#tag/core-concept #tag/electron

---

[[主进程 (Main Process)]]
[[渲染进程 (Renderer Process)]]
[[5. 进程间通信 (IPC)]]