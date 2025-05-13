import { ipcRenderer } from 'electron';
import { use } from 'react';

console.log('Renderer script loaded.');

/**
 * 在 React 中，不再推荐直接操作 DOM，而是通过 React 的状态管理和组件生命周期来处理。
 * 例如，使用 useEffect 钩子来处理组件的挂载和卸载。
 * 也可以使用 useState 钩子来管理组件的状态。
 * 这些操作逻辑直接写于具体的页面/组件中，以变量操作的形式进行。
 */



// // 预加载脚本的使用
// const Elec_verison = document.getElementById('elec-version');
// console.log(myAPI.version);
// if (Elec_verison) {
//   Elec_verison.textContent = myAPI.version;
// }

// // 前端向后段传递信息
// const sendButton = document.getElementById('send-button');
// const inputMessage = document.getElementById('input');
// if (sendButton && inputMessage) {
//     // 更现代的事件监听方法：多个监听、事件捕获、移除监听
//     // 事件类型，回调函数（无参数）
//     sendButton.addEventListener('click', () => {
//         const message = inputMessage.value;
//         console.log('Sending message:', message);
//         // 直接向主进程发送消息
//         window.electron.ipcRenderer.send('message-from-renderer', message);
//         // 通过预加载脚本的 API
//         myAPI.r2m_message(message);
//     });
// }

// // 后端向前端传递信息(双向)
// const pingText = document.getElementById('ping-result');
// const pingButton = document.getElementById('ping-button');
// if (pingText && pingButton) {
//     pingButton.addEventListener('click', async () => {
//         // 更新页面
//         if (pingText) pingText.textContent = 'Loading...';
//         console.log('Fetching ping message from main process');

//         let p = await myAPI.ping_check()
//         pingText.textContent = p;
//         console.log('Ping message:', p);
//     });
// }



// // 你可以在这里添加更多的前端逻辑，例如使用 React, Vue 等框架