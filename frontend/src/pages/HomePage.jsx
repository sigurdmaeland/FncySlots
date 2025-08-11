import React, { useEffect, useRef } from 'react'
import './css/homePage.css'
import { FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'

const HomePage = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach(card => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight - 80) {
          card.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Video øverst, ikke som bakgrunn */}
      <section className="homepage-video-section">
        <video
          className="homepage-top-video"
          src="/bakgrunnsvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-content">
          <img src="/logo1.png" alt="Logo" className="hero-logo" />
          <h1 className="hero-title">JUICY REWARDS & VIP BONUSES</h1>
          <p className="hero-subtitle">
            Play with code <span className="hero-highlight">FNCY</span> for exclusive rewards!
          </p>
          <div className="hero-buttons">
            <a href="/bonuses" className="hero-btn hero-btn-orange">CLAIM BONUSES</a>
            <a href="/leaderboards" className="hero-btn hero-btn-dark">LEADERBOARD</a>
          </div>
          <div className="hero-earn-section">
            <span className="hero-earn-text">
              START EARNING <span className="hero-highlight">REWARDS</span>
            </span>
            <button
              className="scroll-down-circle"
              onClick={() => {
                const nextSection = document.querySelector('.homepage-content')
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              aria-label="Scroll down"
            >
              <svg
                className="scroll-down-svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15" stroke="#bdbdbd" strokeWidth="2" fill="rgba(24,24,27,0.18)" />
                <path d="M10 14L16 20L22 14" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Socials-section som egen seksjon under */}
      <section className="homepage-content">
        <div className="socials-section">
          <h2 className="socials-title">
            FOLLOW <span className="juicy">FNCY</span> SOCIALS
          </h2>
          <div className="socials-cards">
            <div className="social-card" ref={el => cardsRef.current[0] = el}>
              <div className="social-icon youtube"><FaYoutube /></div>
              <div className="social-card-title">YOUTUBE</div>
              <div className="social-card-desc">SUBSCRIBE ON CHANNEL</div>
              <button className="social-card-btn youtube-btn">SUBSCRIBE</button>
            </div>
            <div className="social-card" ref={el => cardsRef.current[1] = el}>
              <div className="social-icon twitter"><FaTwitter /></div>
              <div className="social-card-title">X / TWITTER</div>
              <div className="social-card-desc">STAY IN TOUCH</div>
              <button className="social-card-btn twitter-btn">FOLLOW</button>
            </div>
            <div className="social-card" ref={el => cardsRef.current[2] = el}>
              <div className="social-icon discord"><FaDiscord /></div>
              <div className="social-card-title">DISCORD</div>
              <div className="social-card-desc">JOIN THE COMMUNITY</div>
              <button className="social-card-btn discord-btn">JOIN</button>
            </div>
          </div>
          <div className="socials-footer">
            LIFESTYLE, GAMBLING, GAMING AND MORE
            <br />
            <span className="enjoy">ENJOY!</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage