import React from 'react'
import { NavLink } from 'react-router-dom'
const linkStyle = ({ isActive }) => ({ textDecoration:'none', fontWeight: isActive ? 700 : 500 })
export default function Footer() {
  return (
    <footer className='rr-footer'>
      <nav className='rr-footer-nav rr-container'>
        <NavLink to='/' style={linkStyle}>Home</NavLink>
        <NavLink to='/auto' style={linkStyle}>Auto</NavLink>
        <NavLink to='/contracten' style={linkStyle}>Contracten</NavLink>
        <NavLink to='/gezondheid' style={linkStyle}>Gezondheid</NavLink>
        <NavLink to='/huur' style={linkStyle}>Huur</NavLink>
        <NavLink to='/overheid' style={linkStyle}>Overheid</NavLink>
      </nav>
    </footer>
  )
}
