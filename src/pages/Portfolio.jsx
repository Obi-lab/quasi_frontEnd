import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PortfolioContent from '../components/PortfolioContent'



function Portfolio() {
  

  return (
    <div>
        <Nav/>
        
        <PortfolioContent/>
        <hr className="h-px mt-12 w-[80%] mx-auto bg-gray-200 border-0 dark:bg-gray-700"/>
        <Footer/>
    </div>
  )
}

export default Portfolio