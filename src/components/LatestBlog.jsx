import React from 'react'
import { Link } from 'react-router-dom'
import Auther from '../assets/devAuth.jpg'


function LatestBlog({index,heading,date,category}) {
  return (
    <Link to={`/blog/${index}`} className=''>
      <div className='flex flex-col gap-2 mt-8'>
        <div>
          <div className='flex flex-row gap-2'>
            
            <div>
              <p>Darel ,{date}</p>
            </div>

          </div>
        </div>

        <div className='font-semibold md:w-[76%] w-[85%]'>
          <p >{heading}</p>
        </div>

        <div className='flex flex-row gap-4 mt-2 text-sm  '>
          <p className='rounded-3xl py-1 px-2 bg-[#019dec] text-sm'>{category}</p>
          <p className='p-1'>2 min read</p>
        </div>

      </div>
      <hr className="h-px mt-4 w-[80%]  bg-gray-200 border-0 dark:bg-gray-700"/>
    </Link>
        
  )
}

export default LatestBlog