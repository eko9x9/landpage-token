import React from 'react';

const Content = () => {
  return (
      <section className="content">

          <div id="tokenomics" className="info-token">
            <div className="container">
              <div className="grid">

                <div className="tokenomics">
                  <h2>TOKENOMICS</h2>
                  <div className="img-inner">
                    <img src="/sanji-n.jpg" />
                  </div>
                  <div className="text-inner">
                    <h3>94% Liquidity Pool</h3>
                    <h3>3% Dev Wallet</h3>
                    <h3>3% Marketing Wallet</h3>
                    <h2 style={{fontSize: "1.8rem"}}>Tax</h2>
                    <h3>2% Liquidity</h3>
                    <h3>1% Dev Wallet</h3>
                    <h3>5% Marketing Wallet </h3>
                    <h3>Max Transaction 2%</h3>
                    <h3>Max Wallet 4%</h3>
                  </div>

                </div>

                <div id="buy" className="market">
                  <h2>BUY NOW!</h2>
                  <div className="img-inner">
                    <a href="#">
                      <img src="/pancakeswap.png" />
                    </a>
                  </div>
                  <a href="#" className="btn">BUY NOW!</a>
                  <p>Please set slippage to 10%</p>
                  <div className="img-inner">
                    <a href="#">
                      <img src="/dextools.png" />
                    </a>
                  </div>
                  <div className="img-inner">
                    <a href="#">
                      <img src="/poocoin_logo.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="features" className="features">
            <h2 className="title">
              FEATURES
            </h2>
            <div className="container">
              <div className="card w-color">
                <div className="inner-card flex">
                  <div style={{textAlign: "right"}} className="text">
                    <h2>VINSMOKE SANJI GO-KART GIVEAWAY!…</h2>
                    <p>At 1500 holders we will be giving away our very own Go-Kart! Giveaway will be available for those holding a set amount of SANJI.</p>
                  </div>
                  {/* <div className="img-inner">
                      <img src="/doge-relfections.png" />
                  </div> */}
                </div>
              </div>

              <div className="list-features grid">
                <div className="card">
                  <div className="inner-card">
                    <div className="text">
                      <h3>SANJI NFTS</h3>
                      <p>After the launch of SANJI Token, we will be launching a unique SANJI NFT collection of 888. Allowing These NFTs will be integrated into our P2E game and gives you unique discounts</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="inner-card">
                    <div className="text">
                      <h3>MARKETPLACE</h3>
                      <p>A unique marketplace where you can trade your SANJI NFTs & NFT game assets! We will introduce our SANJISwap on the marketplace so you can purchase tokens directly from the platform. Other cryptocurrencies will be integrated into the marketplace.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="inner-card">
                    <div className="text">
                      <h3>SANJI BONANZA</h3>
                      <p>Our very own Party P2E game, play with the community, friends & family in various mini party games to earn SANJI tokens. Compete in the leaderboard for weekly prizes & discover new NFT assets for your SANJI.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="inner-card">
                    <div className="text">
                      <h3>SANJI MERCH</h3>
                      <p>We will create the most unique Merch for our SANJI. Show off to the world our community through our shirts, hoodies, hats, coffee mugs, etc. We will collab with well known clothing brands as we grow, we will also marker-icon unique 1/1 merch for your SANJI NFT.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="partnerships" className="partnerships">
              <div className="container">
                <h2>PARTNERSHIPS</h2>
                <div className="img-partner">
                  <div className="img-inner">
                    <img src="bscscan.png" />
                  </div>
                  <div className="img-inner">
                    <img src="pink.png" />
                  </div>
                  <div className="img-inner">
                    <img src="pancake.png" />
                  </div>
                  <div className="img-inner">
                    <img src="more-soon.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="community" className="community">
            <h2>COMMUNITY</h2>
            <div className="container">
              <div className="grid">

                <div className="card">
                  <div className="img-inner">
                    <a href="https://t.me/VinsmokeSanjiOfficial">
                      <img src="tg-web.png" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>TELEGRAM</h3>
                    <p>Join our Telegram to meet an amazing community!</p>
                  </div>
                </div>
                <div className="card">
                  <div className="img-inner">
                    <a href="https://twitter.com/VIN_SMOKESANJI">
                      <img src="twt-web.png" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>VINSMOKE SANJI TWITTER</h3>
                    <p>Keep up to date with all the latest about SANJI.</p>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>

      </section>
  )
}

export default Content