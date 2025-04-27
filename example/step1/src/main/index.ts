import { app, BrowserWindow } from 'electron';
import path from 'node:path';


console.log(process.env.VITE_DEV_SERVER_URL)
console.log(process.env['ELECTRON_RENDERER_URL'])
console.log(process.env.NODE_ENV)


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'), // 这里应当指向编译后的js文件
      contextIsolation: true, // 推荐开启上下文隔离
      nodeIntegration: false, // 推荐关闭 Node.js 集成
    },
  });

  // VITE_DEV_SERVER_URL 已过时
  // const devServerUrl = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173';
  // ELECTRON_RENDERER_URL 是最新的
  const devServerUrl = process.env.ELECTRON_RENDERER_URL || 'http://localhost:5173';

  // 加载渲染进程的 HTML 文件
  if (process.env.NODE_ENV !== 'production') {
    win.loadURL(devServerUrl);
    // 开发模式下打开开发者工具
    win.webContents.openDevTools();
  } else {
    // 生产模式下加载打包后的 HTML
    win.loadFile(path.join(__dirname, '../../src/renderer/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // 在 macOS 外，当所有窗口都关闭时退出应用程序。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});