import React from 'react';

import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Welcome from './components/welcome';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
      <HashRouter>
        {/* 其他页面元素 Components */}
        <Welcome />
        
        {/* 路由页面 Pages */}
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/2nd" element={<SecondPage />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
