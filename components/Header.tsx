import React from 'react'

const Header = () => {
  return (
      <header className="header">
          <div className="container">
              <div className="grid">
                  <div className="text-header">
                    <h2>YOSHI STOPPED RACING AND STARTED HIS VERY OWN FUEL COMPANY!</h2>
                    <h3>THE NEXT BIGGEST MEME-UTILITY TOKEN ON THE BINANCE SMART CHAIN.</h3>
                    <p>ArabYoshi looks to create a fun and social meme-utility token to bring the community together whilst providing enticing features! ArabYoshi will be the next biggest meme token!</p>
                    <p>Keep reading, there’s much more to ArabYoshi!</p>
                </div>

                  <div className="img-header">
                    <div className="img-container">
                        <img src="https://arabyoshi.com/wp-content/uploads/2022/04/web-img-2.png" />
                    </div>
                  </div>
              </div>

              <div className="token-desc">
                <div className="card">
                  <div className="card-content">
                    <div className="img-container">
                      <img src="https://arabyoshi.com/wp-content/uploads/2022/04/web-img-4.png" />
                    </div>

                    <div className="text-desc">
                      <h3>SECURE & SAFE!</h3>
                      <div className="desc-p">
                        <p>• Low Tax Fees Liquidity</p>
                        <p>• Locked Liquidity Year</p>
                        <p>• Verified Smart Contract</p>
                        <p>• Anti-Whale Mechanism</p>
                      </div>
                      <button>VIEW ARABPAPER</button>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
      </header>
  )
}

export default Header;