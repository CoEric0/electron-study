# Electron 学习项目

## 项目目标

本项目旨在借助 AI 助手（Trae AI）的协助，通过在界面中使用 TypeScript 语言，系统性、循序渐进地学习 Electron。学习过程将侧重于将 Electron 官方文档的知识转化为个人化的、易于理解和回顾的 Obsidian 笔记。

## 核心参考资料

- Electron 官方文档: [https://www.electronjs.org/docs/latest/](https://www.electronjs.org/docs/latest/)

## 工作目录结构

- `README.md`: (本文件) 项目介绍、学习方法、协作指南。
- `example/`: 存放运行文档示例代码的临时 Electron 项目。此目录内容会根据当前学习内容覆盖更新。
- `notes/`: 核心学习笔记区 (Markdown 格式, 为 Obsidian 优化)。由 AI 维护。
- `prompts/`: 存放与 AI 交互的常用提示词模板。
- `catalogue.md`: 学习大纲，基于 Electron 官方文档结构。

## 协作方式

我们将采用以下方式进行协作学习：

1.  **AI 角色**: AI 将扮演一位循循善诱、经验丰富的 Electron 编程导师。
2.  **教学方法**:
    *   **对话式教学**: AI 的回复将模拟口头讲解、引导和提问。
    *   **笔记同步**: 涉及新知识点或代码示例时，AI 会同步更新或创建 `./notes/` 中的对应笔记文件。
    *   **启发式引导**: AI 会通过提问、类比、分解问题等方式引导思考，而非直接给出完整答案。
    *   **短交互**: 保持对话简洁、聚焦，通过高频、简短的互动逐步深入。
    *   **主动性**: AI 会根据学习进度和上下文，主动提出相关问题或建议。
3.  **笔记规范 (`./notes/`)**:
    *   严格使用 Markdown 语法。
    *   充分利用 Obsidian 的 `[[WikiLink]]` 和 `#tag`。
    *   内容精练，包含最小化示例代码，优先原子化笔记。
    *   在 `./notes/` 内创建层级化子目录。
    *   采用迭代式生成，每次交互更新一小部分。

## 学习流程

1.  初始化项目结构 (README, role.md, catalogue.md)。
2.  创建第一个 Electron 项目 (`./example/`)。
3.  根据 `catalogue.md` 的规划，逐步学习 Electron 核心概念和 API。
4.  学习过程中，AI 将结合讲解、笔记、示例代码进行教学。

让我们开始这段学习之旅吧！