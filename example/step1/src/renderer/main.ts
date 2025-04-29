import { ipcRenderer } from 'electron';

// 这是一个简单的渲染进程脚本示例

// 获取 HTML 元素并添加事件监听器
// const pingResultElement = document.getElementById('ping-result');
// if (pingResultElement && window.myAPI) {
//   console.log('Calling preload API...');
//   try {
//     const result = window.myAPI.ping();
//     pingResultElement.textContent = result;
//   } catch (error) {
//     console.error('Error calling preload API:', error);
//     pingResultElement.textContent = 'Error!';
//   }
// } else {
//   if (!pingResultElement) console.error('Element #ping-result not found');
//   if (!window.myAPI) console.error('window.myAPI is not defined, check preload script and contextBridge.');
//   if(pingResultElement) pingResultElement.textContent = 'API not available';
// }


console.log('Renderer script loaded.');


// 预加载脚本的使用
const Elec_verison = document.getElementById('elec-version');
console.log(myAPI.version);
if (Elec_verison) {
  Elec_verison.textContent = myAPI.version;
}

// 前端向后段传递信息
const sendButton = document.getElementById('send-button');
const inputMessage = document.getElementById('input');
if (sendButton && inputMessage) {
    // 更现代的事件监听方法：多个监听、事件捕获、移除监听
    // 事件类型，回调函数（无参数）
    sendButton.addEventListener('click', () => {
        const message = inputMessage.value;
        console.log('Sending message:', message);
        // 直接向主进程发送消息
        window.electron.ipcRenderer.send('message-from-renderer', message);
        // 通过预加载脚本的 API
        myAPI.r2m_message(message);
    });
}

// 后端向前端传递信息(双向)
const pingText = document.getElementById('ping-result');
const pingButton = document.getElementById('ping-button');
if (pingButton) {
    pingButton.addEventListener('click', async () => {
        // 更新页面
        if (pingText) pingText.textContent = 'Loading...';
        console.log('Fetching ping message from main process');

        let p = await myAPI.ping_check()
        pingText.textContent = p;
        console.log('Ping message:', p);
    });
}



// 你可以在这里添加更多的前端逻辑，例如使用 React, Vue 等框架