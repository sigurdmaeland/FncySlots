import React, { useState } from 'react'
import './css/bonuses/bonuses2.css'
import './css/bonuses/promocard.css'

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
          <div className="promo-description" style={{ textTransform: "uppercase" }}>
  USERS UNDER MY CODE ENJOY DAILY AFFILIATE ONLY PROMO CODES ON 500
  CASINO. USE MY CODE AND BE ACTIVE IN STREAM TO CLAIM.
</div>
          <div className="promo-note">
            Use of the code will automatically enter you into<br />
            Fncy Slot’s leaderboards when wagering.
          </div>
        </div>

        {/* SVG fjernes automatisk i CSS ved små skjermer */}
        <div className="promo-right">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
    {/* Hovedsirkel */}
    <g>
      <circle cx="90" cy="90" r="38" fill="#e63926" stroke="#b32a1c" strokeWidth="6" />
      <ellipse cx="90" cy="90" rx="28" ry="28" fill="#ff432e" opacity="0.18"/>
      <text x="90" y="102" textAnchor="middle" fontWeight="bold" fontSize="32" fill="#fff" opacity="0.9">$</text>
    </g>
    {/* Stjerner og effekter */}
    <g>
      <polygon fill="#e63926" opacity="0.85" points="30,40 34,52 47,53 37,61 41,74 30,66 19,74 23,61 13,53 26,52">
        <animateTransform attributeName="transform" type="rotate" from="0 30 57" to="360 30 57" dur="7s" repeatCount="indefinite"/>
      </polygon>
      <polygon fill="#ff432e" opacity="0.7" points="150,30 153,37 161,38 155,43 157,51 150,47 143,51 145,43 139,38 147,37">
        <animateTransform attributeName="transform" type="rotate" from="0 150 44" to="360 150 44" dur="6s" repeatCount="indefinite"/>
      </polygon>
      <polygon fill="#b32a1c" opacity="0.6" points="35,145 37,150 43,151 39,155 40,161 35,158 30,161 31,155 27,151 33,150">
        <animateTransform attributeName="transform" type="rotate" from="0 35 153" to="360 35 153" dur="5.2s" repeatCount="indefinite"/>
      </polygon>
      <polygon fill="#e63926" opacity="0.7" points="145,140 148,147 156,148 150,153 152,161 145,157 138,161 140,153 134,148 142,147">
        <animateTransform attributeName="transform" type="rotate" from="0 145 153" to="360 145 153" dur="7.5s" repeatCount="indefinite"/>
      </polygon>
      <polygon fill="#e63926" opacity="0.5" points="20,90 22,94 27,95 23,98 24,103 20,100 16,103 17,98 13,95 18,94">
        <animateTransform attributeName="transform" type="rotate" from="0 20 98" to="360 20 98" dur="4.5s" repeatCount="indefinite"/>
      </polygon>
      <polygon fill="#ff432e" opacity="0.5" points="160,90 162,94 167,95 163,98 164,103 160,100 156,103 157,98 153,95 158,94">
        <animateTransform attributeName="transform" type="rotate" from="0 160 98" to="360 160 98" dur="5.8s" repeatCount="indefinite"/>
      </polygon>
    </g>
    {/* Små sirkler */}
    <g>
      <circle cx="120" cy="50" r="2" fill="#ff432e" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="130" r="1.8" fill="#e63926" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="140" cy="110" r="2.2" fill="#ff432e" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="40" r="1.5" fill="#e63926" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="60" r="1.7" fill="#b32a1c" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
        </div>
      </button>
    </div>




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


     



      
    </>
  )
}

export default Bonuses