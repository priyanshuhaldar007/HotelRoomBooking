// import React from 'react'
import '../assets/Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='Nav fc-white'>
        <div className="logo"><span>Ph</span><span>find your balance</span></div>
        <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li className='btn'>Login</li>
            <li className='btn'>Signup</li>
        </ul>
    </div>
  )
}
