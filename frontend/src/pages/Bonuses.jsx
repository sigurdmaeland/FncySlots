import React, { useState } from 'react'
import './css/bonuses2.css'
import './css/promocard.css'

const Bonuses = () => {
  const [showCode, setShowCode] = useState(true)

  

  return (
    <>
      {/* Bonuses 1 Innholdsseksjon */}
      <section className="bonuses-section">
        <div className="bonuses-container">
          <h2 className="bonuses-title">BONUSES</h2>
          <div className="bonuses-subtitle">ENJOY EXCLUSIVE BONUSES</div>





<div className="promo-container">
      <button
        className="promo-button"
        onClick={() => window.open("https://500.casino", "_blank")}
      >
        <div className="promo-left">
          <div className="promo-title">
            DAILY <span className="white-text">PROMO CODES</span>
          </div>
          <div className="promo-subtitle">
            EXCLUSIVELY <span className="highlight-text">500 CASINO</span> OFFER
          </div>
          <div className="promo-tag">PROMOTION</div>
          <div className="promo-description">
            Users under my code enjoy daily affiliate only promo codes on 500
            Casino. Use my code and be active in stream to claim.
          </div>
          <div className="promo-note">
            Use of the code will automatically enter you into<br />
            Fncy Slot’s leaderboards when wagering.
          </div>
        </div>

        {/* SVG fjernes automatisk i CSS ved små skjermer */}
        <div className="promo-right">
         <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            {/* ... hele SVG-en fra originalkode her ... */}
            {/* Sentrert gylden mynt med glans */} <g> <circle cx="90" cy="90" r="38" fill="#ffe082" stroke="#bfa14a" strokeWidth="6" /> <ellipse cx="90" cy="90" rx="28" ry="28" fill="#fffbe6" opacity="0.18"/> <text x="90" y="102" textAnchor="middle" fontWeight="bold" fontSize="32" fill="#bfa14a" opacity="0.9">$</text> </g> {/* Animerte STJERNER i polygon-form, utenfor mynten */} <g> {/* Stor stjerne oppe til venstre */} <polygon fill="#ffe082" opacity="0.85" points="30,40 34,52 47,53 37,61 41,74 30,66 19,74 23,61 13,53 26,52" > <animateTransform attributeName="transform" type="rotate" from="0 30 57" to="360 30 57" dur="7s" repeatCount="indefinite"/> </polygon> {/* Medium stjerne oppe til høyre */} <polygon fill="#ffe082" opacity="0.7" points="150,30 153,37 161,38 155,43 157,51 150,47 143,51 145,43 139,38 147,37" > <animateTransform attributeName="transform" type="rotate" from="0 150 44" to="360 150 44" dur="6s" repeatCount="indefinite"/> </polygon> {/* Liten stjerne nede til venstre */} <polygon fill="#ffe082" opacity="0.6" points="35,145 37,150 43,151 39,155 40,161 35,158 30,161 31,155 27,151 33,150" > <animateTransform attributeName="transform" type="rotate" from="0 35 153" to="360 35 153" dur="5.2s" repeatCount="indefinite"/> </polygon> {/* Medium stjerne nede til høyre */} <polygon fill="#ffe082" opacity="0.7" points="145,140 148,147 156,148 150,153 152,161 145,157 138,161 140,153 134,148 142,147" > <animateTransform attributeName="transform" type="rotate" from="0 145 153" to="360 145 153" dur="7.5s" repeatCount="indefinite"/> </polygon> {/* Liten stjerne midt venstre */} <polygon fill="#ffe082" opacity="0.5" points="20,90 22,94 27,95 23,98 24,103 20,100 16,103 17,98 13,95 18,94" > <animateTransform attributeName="transform" type="rotate" from="0 20 98" to="360 20 98" dur="4.5s" repeatCount="indefinite"/> </polygon> {/* Liten stjerne midt høyre */} <polygon fill="#ffe082" opacity="0.5" points="160,90 162,94 167,95 163,98 164,103 160,100 156,103 157,98 153,95 158,94" > <animateTransform attributeName="transform" type="rotate" from="0 160 98" to="360 160 98" dur="5.8s" repeatCount="indefinite"/> </polygon> </g> {/* Små glitrende prikker */} <g> <circle cx="120" cy="50" r="2" fill="#fffbe6" opacity="0.7"> <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/> </circle> <circle cx="60" cy="130" r="1.8" fill="#fffbe6" opacity="0.7"> <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/> </circle> <circle cx="140" cy="110" r="2.2" fill="#fffbe6" opacity="0.7"> <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite"/> </circle> <circle cx="40" cy="40" r="1.5" fill="#fffbe6" opacity="0.5"> <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite"/> </circle> <circle cx="160" cy="60" r="1.7" fill="#fffbe6" opacity="0.5"> <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/> </circle> </g>
          </svg>
        </div>
      </button>
    </div>









          <div className="featured-bonus">
            <div className="featured-header">
              <span className="featured-star">★</span>
              <span className="featured-label">Featured</span>
              <span className="featured-star">★</span>
            </div>
            <div className="bonus-card">
              <img src="/r.png" alt="500Casino" className="bonus-logo" />
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
    </>
  )
}

export default Bonuses