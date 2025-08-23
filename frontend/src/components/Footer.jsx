import React from 'react'
import { FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'
import './css/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-logo-wrap">
          <img src="/logo6.png" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-menu">
          <div className="footer-menu-header">Menu</div>
          <a href="/" className="footer-link">Home</a>
          <a href="/store" className="footer-link">Store</a>
          <a href="/bonuses" className="footer-link">Bonuses</a>
          <a href="/leaderboards" className="footer-link">Leaderboards</a>
        </div>

        <div className='footer-information'>
        <div className="footer-information-header">Information</div>
        <a href="/terms_and_conditions" className="footer-link-2">Terms & Conditions</a>
        <a href="/privacy_policy" className="footer-link-2">Privacy Policy</a>
        </div>

        <div className="footer-socials">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>
      </div>
      <div className="footer-copyright">
        © COPYRIGHT 2025 FNCY SLOTS
      </div>
      <hr className="footer-divider" />
      <div className="footer-warning">
        <span className="footer-18">18+</span>
        <span className="footer-warning-text">
          WE DO NOT TAKE RESPONSIBILITY FOR ANY LOSSES FROM GAMBLING IN CASINOS AND BETTING SITES WHICH ARE LINKED OR PROMOTED ON OUR WEBSITE(S). AS A PLAYER, YOU ARE RESPONSIBLE FOR YOUR BETS.
        </span>
      </div>
    </footer>
  )
}

export default Footer