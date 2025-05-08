import React from 'react'
import jammy from '../assets/img/small-profile.jpg'
import './welcome.css'
import { Link } from 'react-router-dom'

function Welcome() {
  const name = 'nWorld'
  return (
    <div className="welcome">
      <h1>Welcome to this App!</h1>
      <p>Hello, {name}!</p>
      <p>This is a simple welcome component.</p>
      <img src={jammy} alt="Profile" />

      <button className="btn" style={{ marginLeft: '10px' }}>
        <Link to="/2nd">前往第二页</Link>
      </button>

      
    </div>
  );
}

export default Welcome;