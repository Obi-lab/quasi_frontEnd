import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Hompage'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import NoPage from './pages/NoPage'
import Landing from './pages/Landing'
import BlogDetails from './pages/BlogDetails'

import FirstBlog from './blogs/FirstBlog'
import SecondBlog from './blogs/SecondBlog'
import ThirdBlog from './blogs/ThirdBlog'
import "./index.css"

function App() {

  return (
    <div className="font-['Open_Sans'] h-screen items-center">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='blog/1' element={<FirstBlog/>} />
        <Route path='blog/2' element={<SecondBlog/>} />
        <Route path='blog/3' element={<ThirdBlog/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
