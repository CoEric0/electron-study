import React from 'react'
import jammy from '../assets/img/small-profile.jpg'
import './welcome.css'
import { Link } from 'react-router-dom'

function Welcome() {
  const name = 'new World'
  return (
    <div className="welcome">
      <h1>Welcome to this App!</h1>
      <p>Hello, {name}!</p>
      <p>This is a simple welcome component.</p>
      <img src={jammy} alt="Profile" />
    </div>
  );
}

export default Welcome;