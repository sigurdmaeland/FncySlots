import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaStore, FaGift, FaChartBar, FaDiscord, FaBars, FaTimes } from 'react-icons/fa'
import './css/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/logo4.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-center">
        <NavLink to="/" className="navbar-item">
          <FaHome className="navbar-icon" />
          Home
        </NavLink>
        <NavLink to="/store" className="navbar-item">
          <FaStore className="navbar-icon" />
          Store
        </NavLink>
        <NavLink to="/bonuses" className="navbar-item">
          <FaGift className="navbar-icon" />
          Bonuses
        </NavLink>
        <NavLink to="/leaderboards" className="navbar-item">
          <FaChartBar className="navbar-icon" />
          Leaderboards
        </NavLink>
      </div>
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="navbar-right">
        <button className="login-button">
          LOGIN <FaDiscord style={{ marginLeft: 8 }} />
        </button>
      </div>
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <NavLink to="/" className="navbar-item" onClick={() => setMenuOpen(false)}>
            <FaHome className="navbar-icon" /> Home
          </NavLink>
          <NavLink to="/store" className="navbar-item" onClick={() => setMenuOpen(false)}>
            <FaStore className="navbar-icon" /> Store
          </NavLink>
          <NavLink to="/bonuses" className="navbar-item" onClick={() => setMenuOpen(false)}>
            <FaGift className="navbar-icon" /> Bonuses
          </NavLink>
          <NavLink to="/leaderboards" className="navbar-item" onClick={() => setMenuOpen(false)}>
            <FaChartBar className="navbar-icon" /> Leaderboards
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar