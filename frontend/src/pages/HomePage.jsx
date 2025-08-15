import React, { useEffect, useRef, useState } from 'react'
import './css/homepage/hero.css'
import './css/homepage/bonuses.css'
import './css/homepage/faq.css'
import './css/homepage/social.css'
import { FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'

const faqQuestions = [
  {
    q: "HOW DO I EARN POINTS?",
    a: "You earn points by wagering on partnered casinos using the FNCY code. The more you wager, the more points you collect!"
  },
  {
    q: "HOW TO SPEND POINTS?",
    a: "Points can be spent on rewards, giveaways, or exclusive Fncy events. Check the rewards page for current offers!"
  },
  {
    q: "HOW TO PARTICIPATE IN THE LEADERBOARD?",
    a: "Use the FNCY code when wagering. Your points will automatically be tracked and added to the leaderboard."
  },
  {
    q: "LOST POINTS AFTER CHANGING YOUR KICK USERNAME?",
    a: "If you changed your Kick username and lost points, contact support with your old and new username for help."
  }
]

const HomePage = () => {
  const cardsRef = useRef([])
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

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
                const nextSection = document.querySelector('.bonuses-section')
                if (nextSection) {
                  const targetY = nextSection.getBoundingClientRect().top + window.scrollY
                  const startY = window.scrollY
                  const distance = targetY - startY
                  const duration = 800 // ms, øk for enda saktere
                  let start

                  function step(timestamp) {
                    if (!start) start = timestamp
                    const progress = Math.min((timestamp - start) / duration, 1)
                    window.scrollTo(0, startY + distance * progress)
                    if (progress < 1) {
                      window.requestAnimationFrame(step)
                    }
                  }
                  window.requestAnimationFrame(step)
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

      {/* Bonuses-section mellom video og socials */}
      <section className="bonuses-section">
        <div className="bonuses-container">
          <h2 className="bonuses-title">BONUSES</h2>
          <div className="bonuses-subtitle">ENJOY EXCLUSIVE BONUSES</div>
          <div className="featured-bonus">
            <div className="featured-header">
              <span className="featured-star">★</span>
              <span className="featured-label">Featured</span>
              <span className="featured-star">★</span>
            </div>
            <div className="bonus-card">
              <img src="/r.png" alt="500casino" className="bonus-logo" />
              <div className="bonus-info">
                <div className="bonus-site">500 Casino</div>
                <div className="bonus-type">Casino</div>
              </div>
              <div className="bonus-rewards">
                <span className="bonus-rewards-title">REWARDS</span>
                <div className="bonus-rewards-main">
                  <span className="bonus-perk">5% DEPOSIT BONUS</span>
                  <span className="bonus-cases">3 FREE CASES</span>
                </div>
              </div>
              <div className="bonus-code-row" style={{ width: "100%", justifyContent: "center" }}>
                <span className="bonus-code-label">Use Code:</span>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  {showCode ? (
                    <button
                      className="bonus-code"
                      onClick={() => {
                        navigator.clipboard.writeText('FNCY')
                        setShowCode(false)
                        setTimeout(() => setShowCode(true), 2000)
                      }}
                      style={{
                        cursor: 'pointer',
                        border: 'none',
                        background: 'none',
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                      aria-label="Copy code"
                    >
                      FNCY
                      {/* Heroicons Copy SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "6px"}} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#ffe082" strokeWidth="1.8">
                        <rect x="9" y="9" width="10" height="10" rx="2" stroke="#ffe082" strokeWidth="1.8" fill="none"/>
                        <rect x="5" y="5" width="10" height="10" rx="2" stroke="#bdbdbd" strokeWidth="1.2" fill="none"/>
                      </svg>
                    </button>
                  ) : (
                    <span style={{
                      margin: "0 auto",
                      color: "#ffe082",
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      textAlign: "center",
                      width: "100%"
                    }}>
                      Copied!
                    </span>
                  )}
                </div>
              </div>
              <button className="bonus-claim-btn">Claim Bonus</button>
              <div className="bonus-note">
                Use of the code will automatically enter you into Fncy slot's leaderboard when wagering on their site.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-section */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-title">FAQ</h2>
          <div className="faq-list">
            {faqQuestions.map((item, idx) => (
              <details
                className="faq-item"
                key={item.q}
                open={openFaq === idx}
                onClick={e => {
                  e.preventDefault()
                  setOpenFaq(openFaq === idx ? null : idx)
                }}
              >
                <summary>{item.q}</summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
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