/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

// Declare the API exposed by preload.ts
declare global {
  interface Window {
    electronAPI: {
      sendMessage: (message: string) => Promise<string>;
      onResponse: (callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => Electron.IpcRenderer;
    }
  }
}

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const button = document.getElementById('ipc-button');
const responseElement = document.getElementById('ipc-response');

button.addEventListener('click', async () => {
  console.log('Button clicked, sending message...');
  responseElement.textContent = 'Sending...';
  try {
    const response = await window.electronAPI.sendMessage('Hello from Renderer!');
    console.log('Response received:', response);
    responseElement.textContent = response;
  } catch (error) {
    console.error('Error sending message:', error);
    responseElement.textContent = `Error: ${error.message}`;
  }
});

// Example of receiving messages from main process (if needed later)
// window.electronAPI.onResponse((_event, value) => {
//   console.log('Received response via onResponse:', value);
//   responseElement.textContent = value;
// });
