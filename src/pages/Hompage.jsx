import React from 'react'
import Home from '../components/Home'
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';

function Homepage() {
  return (
    <div className="scroll-behavior: smooth" >
        <Navbar/>
        
        <Home/>
        <Services/>

        <hr className="h-px mt-12 w-[80%] mx-auto bg-gray-200 border-0 dark:bg-gray-700"/>
        <Footer/>
    </div>
  )
}

export default Homepage;