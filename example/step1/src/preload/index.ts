import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { version } from 'vue';

// 在这里，你可以安全地暴露 Node.js API 或自定义函数给渲染器进程

const api = {
  // 你可以在这里定义你想要暴露的 API
  // 例如，暴露一个简单的函数
  version: process.version
}


// 自己定义的 api
contextBridge.exposeInMainWorld('myAPI', api);
// 使用 electron-toolkit 提供的 API
contextBridge.exposeInMainWorld('electron', electronAPI);

console.log('Preload script loaded.');