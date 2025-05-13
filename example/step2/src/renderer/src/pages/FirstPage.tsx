import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
import './Page.css';

export function FirstPage() {
  // --------- 变量 ----------
  const vv = myAPI.version
  console.log(vv)


  // --------- 操作 ----------

  // useState: React Hook, 使用一个值初始化，返回 状态 的（值，更新函数）
  const [version, setVersion] = useState<string>('')
  const [pingResult, setPingResult] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')


  // useEffect: React Hook, 组件挂载时执行一次
  useEffect(() => {
    setVersion(vv)
  },[])

  const sendMessage = (message: string): void => {
    console.log('Sending message:', message);
    // 直接向主进程发送消息
    window.electron.ipcRenderer.send('message-from-renderer', message);
    // 通过预加载脚本的 API
    myAPI.r2m_message(message);
  }

  const tryPing = async (): Promise<void> => {
    // 更新页面
    setPingResult('Loading...')
    console.log('Fetching ping message from main process');

    let p = await myAPI.ping_check()
    setPingResult(p)
    console.log('Ping message:', p)
  }


  // --------- 页面 ----------
  return (
    <div className="page">
      <p>Backend Electron version: <span>{version}</span></p>

      <br/>

      {/* 要通过 set 方法来允许 value 值改变 */}
      <input 
        type="text" 
        id="input" 
        placeholder="Type something..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
      // 渲染过程中会立刻运行一次，应避免立即执行
      // onClick={sendMessage(inputValue)}
      onClick={() => sendMessage(inputValue)}
      >Send to Main</button>

      <br/>

      <p>Baidu Ping: <span>{pingResult}</span></p>
      <button
        onClick={() => tryPing()}
      >Ping Baidu</button>

      <button className="btn" style={{ marginLeft: '10px' }}>
        <Link to="/2nd">前往第二页</Link>
      </button>

      <br />

    </div>
  );
}

export default FirstPage;