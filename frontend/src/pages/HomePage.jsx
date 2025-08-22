import React, { useEffect, useRef, useState } from 'react'
import './css/homepage/hero.css'
import './css/bonuses/bonuses2.css'
import './css/homepage/social.css'
import { FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'



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
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-content">
          {/* <img src="/logo1.png" alt="Logo" className="hero-logo" /> */}
          <h1 className="hero-title">JUICY REWARDS & VIP BONUSES</h1>
          <p className="hero-subtitle">
            PLAY WITH CODE <span className="hero-highlight">FNCY</span> FOR EXCLUSIVE REWARDS!
          </p>
          <div className="hero-buttons">
            <a href="/bonuses" className="hero-btn hero-btn-orange">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M5.789 1C4.467 1 3.395 2.1 3.395 3.459c0 .274.044.538.125.785H2.315a.826.826 0 0 0-.815.837v2.595c0 .397.27.73.632.815v4C2.132 13.875 3.226 15 4.576 15h6.848c1.35 0 2.444-1.124 2.444-2.51V8.491a.833.833 0 0 0 .632-.815V5.08a.826.826 0 0 0-.815-.837H12.48c.081-.247.125-.51.125-.785C12.605 2.1 11.533 1 10.21 1c-.873 0-1.659.38-2.211.986A2.981 2.981 0 0 0 5.789 1Zm5.635 12.327h-2.61V8.512h3.425v3.978a.826.826 0 0 1-.815.837Zm-4.239 0V8.512H3.761v3.978c0 .462.365.837.815.837h2.61Zm3.79-9.868a.775.775 0 0 1-.763.785H8.815v-.137c0-.792.625-1.434 1.396-1.434.422 0 .765.352.765.786Zm-3.79.648v.137H5.788a.775.775 0 0 1-.764-.785c0-.434.343-.786.765-.786.771 0 1.396.642 1.396 1.434Z" clipRule="evenodd"></path></svg>
                CLAIM BONUSES
              </span>
            </a>
            <a href="/leaderboards" className="hero-btn hero-btn-dark">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill="currentColor" d="m14.167 12.313-1.1.26a.654.654 0 0 0-.494.494l-.233.98a.668.668 0 0 1-1.16.28l-1.993-2.294a.332.332 0 0 1 .166-.54 5.66 5.66 0 0 0 3.02-1.886.333.333 0 0 1 .494-.034l1.48 1.48c.506.507.326 1.14-.18 1.26ZM1.8 12.313l1.1.26c.247.06.44.247.493.494l.234.98c.126.533.806.7 1.16.28l1.993-2.294a.332.332 0 0 0-.167-.54 5.66 5.66 0 0 1-3.02-1.886.333.333 0 0 0-.493-.034l-1.48 1.48c-.507.507-.327 1.14.18 1.26ZM8 1.333A4.663 4.663 0 0 0 3.333 6c0 .967.287 1.853.78 2.593A4.657 4.657 0 0 0 7.3 10.607c.227.04.46.06.7.06.24 0 .473-.02.7-.06a4.657 4.657 0 0 0 3.187-2.014c.493-.74.78-1.626.78-2.593A4.663 4.663 0 0 0 8 1.333Zm2.04 4.52-.553.554a.472.472 0 0 0-.114.406l.16.687c.127.54-.16.753-.64.467l-.666-.394a.467.467 0 0 0-.44 0l-.667.394c-.48.28-.767.073-.64-.467l.16-.687a.5.5 0 0 0-.113-.406l-.567-.554c-.327-.326-.22-.653.233-.726l.714-.12c.12-.02.26-.127.313-.234l.393-.786c.214-.427.56-.427.774 0l.393.786a.483.483 0 0 0 .32.234l.713.12c.447.073.554.4.227.726Z"></path></svg>
                LEADERBOARD
              </span>
            </a>
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

      {/* Bonuses 1 Innholdsseksjon */}
      <section className="bonuses-section">
        <div className="bonuses-container">
          <h2 className="bonuses-title">BONUSES</h2>
          <div className="bonuses-subtitle">ENJOY EXCLUSIVE BONUSES</div>

              {/* Bonuses 2 Innholdsseksjon */}
<div className="featured-header">
              <span className="featured-star">★</span>
              <span className="featured-label">Featured</span>
              <span className="featured-star">★</span>
            </div>

      <div className="bonus-container1">
      <div className="bonus-header1">
        <img
          src="500casino.png"
          alt="500 Casino"
          className="bonus-logo1"
        />
      </div>

      <div className="bonus-info1">
        <div className="bonus-site1" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <g clipPath="url(#a)">
              <path fill="currentColor" fillRule="evenodd" d="M12.91.247a1.798 1.798 0 0 0-1.82 0L2.41 5.325c-.563.33-.91.938-.91 1.596V17.08c0 .658.347 1.266.91 1.595l8.68 5.08c.563.328 1.257.328 1.82 0l8.68-5.08c.563-.329.91-.937.91-1.595V6.92c0-.658-.347-1.266-.91-1.596L12.91.247ZM8.11 6.18A7 7 0 0 1 12 5a7.008 7.008 0 0 1 7 7A7 7 0 1 1 8.111 6.18Zm1.416 8.62c.5 2.024 1.51 3.267 2.473 3.267.964 0 1.973-1.243 2.473-3.267H9.527Zm-.19-4.667a12.768 12.768 0 0 0 0 3.734h5.326c.092-.618.138-1.242.137-1.867a12.434 12.434 0 0 0-.137-1.867H9.337Zm-3.107 0a6.039 6.039 0 0 0 0 3.734H8.4a13.12 13.12 0 0 1 0-3.734H6.23Zm8.243-.933c-.5-2.024-1.51-3.267-2.473-3.267-.964 0-1.973 1.243-2.473 3.267h4.946Zm3.297.933H15.6a13.22 13.22 0 0 1 0 3.734h2.17a6.02 6.02 0 0 0 0-3.734ZM15.432 9.2h1.944a6.096 6.096 0 0 0-3.142-2.835c.583.856.99 1.82 1.198 2.835Zm-6.864 0a7.824 7.824 0 0 1 1.198-2.835A6.096 6.096 0 0 0 6.624 9.2h1.944Zm0 5.6H6.624a6.096 6.096 0 0 0 3.142 2.835A7.824 7.824 0 0 1 8.568 14.8Zm6.864 0a7.824 7.824 0 0 1-1.198 2.835 6.096 6.096 0 0 0 3.143-2.835h-1.945Z" clipRule="evenodd"></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="currentColor" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
          500.Casino
        </div>
        
        </div>

      
      <div className="bonus-box1">
        <p className="bonus-title1">MAIN BONUS</p>
        <h3>3 FREE SPINS</h3>
      </div>

      <div className="bonus-extra1">
        <p className="bonus-extra-title1">EXTRA</p>
        <p>+5% BONUS FOR EVERY DEPOSIT</p>
      </div>

      <button className="bonus-button1">CLAIM BONUS</button>

      <div className="bonus-footer1">
        <p>❓ HOW TO CLAIM BONUS</p>
      </div>
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