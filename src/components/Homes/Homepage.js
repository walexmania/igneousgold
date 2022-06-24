import * as React from 'react'
import Header from './Header'
import Home from './Home'
import About from './HomeAbout'
import ContactUs from './HomeContact'
import Footer from './HomeFooter'
import Services from './HomeServices'

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Services />
      <About />
      <ContactUs />
      <Footer />
    </React.Fragment>
  )
}

export default Homepage
