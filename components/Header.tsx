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
                      <img src="https://arabyoshi.com/wp-content/uploads/2022/04/web-img-4.png" />
                    </div>

                    <div className="text-desc">
                      <h3>SECURE & SAFE!</h3>
                      <div className="desc-p">
                        <p>• 2% Liquidity</p>
                        <p>• 1% Dev Wallet</p>
                        <p>• Verified Smart Contract</p>
                        <p>• 5% Marketing Wallet </p>
                        <p>• 5% Marketing Wallet</p>
                        <p>• Max Transaction 2%</p>
                        <p>• Max Wallet 4%</p>
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