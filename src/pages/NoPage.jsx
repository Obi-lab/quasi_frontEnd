import React from 'react'
import Nomatch from '../components/Nomatch'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function NoPage() {
  return (
    <div>
        <Nav/>
        <Nomatch/>
        <hr className="h-px mt-12 w-[80%] mx-auto bg-gray-200 border-0 dark:bg-gray-700"/>
        <Footer/>

    </div>
  )
}

export default NoPage