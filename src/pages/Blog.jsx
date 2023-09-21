import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import data from '../markdown/headings'
import BlogHeadings from '../components/BlogHeadings'
import LatestBlog from '../components/LatestBlog'
import Bluebackground from '../components/Bluebackground'


function Blog() {

  const articles =data.articles
  const latestBlog=articles[(articles.length - 1)]
  
  
  
  return (
    <div  className=''>
      <Nav/>
      <Bluebackground/>
      <div className='bg-white mt-1 w-[94%] mx-auto'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-[68%]'>
            {articles.map((article,index)=>{
              return <BlogHeadings
                       index={article.index} heading={article.heading}
                        pretext={article.preText} date={article.Date}
                        category={article.category}
                      />
            })}
            
          </div>
          <div className='md:w-[32%]'>
            <p className='font-bold mt-8'>Latest </p>
            <LatestBlog index={latestBlog.heading} heading={latestBlog.heading} date={latestBlog.Date}
              category={latestBlog.category}
            />
             

          </div>

        </div>
      </div>
      
      
      <Footer/>
    </div>
  )
}

export default Blog