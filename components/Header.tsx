import React from 'react'

const Header = () => {
  return (
      <header className="header">
          <div className="container">
              <div className="grid">
                  <div className="text-header">
                    <h2>VINSMOKE SANJI!</h2>
                    <h3>THE NEXT BIGGEST MEME-UTILITY TOKEN ON THE BINANCE SMART CHAIN.</h3>
                    <p>Vinsmoke Sanji is a community meme token, ownership will be removed. The project will be developed in the direction of NFT and adventure game to give One Piece fans an experience of the journey across the ocean.</p>
                </div>

                  <div className="img-header">
                    <div className="img-container">
                        <img src="logo.png" />
                    </div>
                  </div>
              </div>

              <div className="token-desc">
                <div className="card">
                  <div className="card-content">
                    <div className="img-container">
                      <img src="sanji-logo-cl.jpg" />
                    </div>

                    <div className="text-desc">
                      <h3>SECURE & SAFE!</h3>
                      <div className="desc-p">
                        <p>Verified Smart Contract</p>
                        <p>Renounced</p>
                        <p>Locked</p>
                      </div>
                      <button onClick={() => alert("Coming Soon!")}>VIEW SANJIPAPER</button>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
      </header>
  )
}

export default Header;