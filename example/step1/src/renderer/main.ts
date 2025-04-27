// 这是一个简单的渲染进程脚本示例

// 获取 HTML 元素并添加事件监听器
const pingResultElement = document.getElementById('ping-result');
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

console.log(window)

console.log('Renderer script loaded.');

// 你可以在这里添加更多的前端逻辑，例如使用 React, Vue 等框架