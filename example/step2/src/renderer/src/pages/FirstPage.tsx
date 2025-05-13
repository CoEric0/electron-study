import React from 'react';

import { Link } from 'react-router-dom';
import './Page.css';

export function FirstPage() {
  return (
    <div className="page">
      <p>Backend Electron version: <span id= 'elec-version'></span></p>

      <p>Baidu Ping: <span id="ping-result"></span></p>
      <button id = "ping-button">Ping Baidu</button>

      <br/>

      <input type="text" id="input" placeholder="Type something..." />
      <button id="send-button">Send to Main</button>

      <button className="btn" style={{ marginLeft: '10px' }}>
        <Link to="/2nd">前往第二页</Link>
      </button>

      <br />
      
    </div>
  );
}

export default FirstPage;