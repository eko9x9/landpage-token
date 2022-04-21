import type { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default Home
