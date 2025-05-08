import React, { StrictMode } from 'react' // 引入 React 和 StrictMode，用于在开发模式下检查潜在问题
import { createRoot } from 'react-dom/client' // 引入 createRoot 方法，用于创建 React 应用的根节点
// import './index.css' // 引入全局样式文件
import App from './App.tsx' // 引入主应用组件

// 使用 createRoot 方法将 React 应用挂载到 HTML 中 id 为 'react_handle' 的元素上
createRoot(document.getElementById('react_handle')!).render(
    <App />
);
