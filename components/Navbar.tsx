import React, { useState } from 'react'

const Navbar = () => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

  return (
      <nav className="navbar">
          <div className="container flex">
            <div className="logo">
                <div className="img-container">
                    <img src="web-logo.png" />
                </div>
            </div>
            <ul className="list-menu dk">
                <li>
                    <a href="#">VINSMOKE SANJI</a>
                </li>
                <li>
                    <a href="#tokenomics">TOKENOMICS</a>
                </li>
                <li>
                    <a href="#buy">BUY NOW</a>
                </li>
                <li>
                    <a href="#features">FEATURES</a>
                </li>
                <li>
                    <a href="#partnerships">PARTNERSHIPS</a>
                </li>
                <li>
                    <a href="#roadmap">ROADMAP</a>
                </li>
                <li>
                    <a href="#team">TEAM</a>
                </li>
                <li>
                    <a href="#community">COMMUNITY</a>
                </li>
            </ul>

            <ul className="list-menu mb">
                <li>
                    {
                        isSidebarOpen ?
                        (
                            <button onClick={() => setisSidebarOpen(false)} className="openbtn">x</button>
                        )
                        :
                        <button className="openbtn" onClick={() => setisSidebarOpen(true)}>☰</button>
                    }

                    <div style={{height: isSidebarOpen? "60vh": 0}} className="sidebar">
                        
                        <a href="#">VINSMOKE SANJI</a>
                        <a href="#tokenomics">TOKENOMICS</a>
                        <a href="#buy">BUY NOW</a>
                        <a href="#features">FEATURES</a>
                        <a href="#partnerships">PARTNERSHIPS</a>
                        <a href="#roadmap">ROADMAP</a>
                        <a href="#team">TEAM</a>
                        <a href="#community">COMMUNITY</a>
                    </div>
                </li>
            </ul>
            
          </div>
      </nav>
  )
}

export default Navbar;