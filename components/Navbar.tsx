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
                    <a onClick={() => alert("Coming Soon!")} href="#">SANJIPAPER</a>
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
                    <a href="#community">COMMUNITY</a>
                </li>
            </ul>
            <h3 style={{display: isSidebarOpen? "none": "block"}} className="text-logo-mb">VINSMOKE SANJI</h3>
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
                        
                        <a onClick={() => alert("Coming Soon!")} href="#">SANJIPAPER</a>
                        <a href="#tokenomics">TOKENOMICS</a>
                        <a href="#buy">BUY NOW</a>
                        <a href="#features">FEATURES</a>
                        <a href="#partnerships">PARTNERSHIPS</a>
                        <a href="#community">COMMUNITY</a>
                    </div>
                </li>
            </ul>
            
          </div>
      </nav>
  )
}

export default Navbar;