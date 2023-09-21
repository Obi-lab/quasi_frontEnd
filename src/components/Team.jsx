import React,{useState,useEffect} from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Avatar from "../assets/avatar.png"



function Team() {

  useEffect(()=>{
      const target_div=document.querySelector('.carousel_div')
      const target_element_one=target_div.childNodes[3]
      const target_element_two=target_div.childNodes[4]
      target_element_one.classList.remove('text-white')
      target_element_one.classList.add('text-[#3f418c]')
      target_element_two.classList.remove('text-white')
      target_element_two.classList.add('text-[#3f418c]')
      
      
  })
  
  return (
    <div className='w-[94%] mx-auto pt-5 mt-3  items-center' id="services">
      <div className='flex flex-col'>
       <p className='mx-auto font-bold'>Meet The Team</p>
        {/*huge screen */}
        <div className='md:block hidden'>
          <div className='pt-2 flex flex-col gap-4 md:flex-row '>
            <div className='md:w-1/3 flex flex-col '>
              <div className=''>
                <img className="w-15 h-15 p-1 mx-auto rounded-full dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy" />
              </div>
              <p className='mx-auto'>Boniface </p>
              <p className='mx-auto'>Ceo and Cofounder</p>
              <p className='mx-auto'>Quantity Survey Expert</p>
            </div>

            <div className='md:w-1/3 flex flex-col '>
              <div className=''>
                <img className="w-15 h-15 p-1 mx-auto rounded-full dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy"  />
              </div>
              <p className='mx-auto'>Hiram</p>
              <p className='mx-auto'>Cofounder</p>
              <p className='mx-auto'>Bilding Technology Expert</p>
              
            </div>

            <div className='md:w-1/3 flex flex-col '>
              <div className=''>
                <img className="w-15 h-15 p-1 mx-auto rounded-full  dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar"  loading="lazy" />
              </div>
              <p className='mx-auto'>Liz</p>
              <p className='mx-auto'>Staff</p>
              <p className='mx-auto'>Architect and Designer</p>
            </div>
          </div>
        </div>


        {/*small screen screen */}
        <div className='md:hidden block'>
          <Carousel  className="rounded-xl  carousel_div">
            {/* Carousel Images */}
            <div className="relative flex flex-col h-full w-full mx-auto">
              <img className="w-15 h-15 p-1 mx-auto rounded-full dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy"  />
              <p className='mx-auto '>Boniface </p>
              <p className='mx-auto'>Ceo and Cofounder</p>
              <p className='mx-auto'>Quantity Survey Expert</p>
              
            </div>
            <div className="relative flex flex-col h-full w-full">
              <img className="w-15 h-15 p-1 mx-auto rounded-full dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy"  />
              <p className='mx-auto'>Hiram</p>
              <p className='mx-auto'>Cofounder</p>
              <p className='mx-auto'>Bilding Technology Expert</p>
              
            </div>
            <div className="relative flex flex-col h-full w-full">
              <img className="w-15 h-15 p-1 mx-auto rounded-full dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy"  />
              <p className='mx-auto'>Liz</p>
              <p className='mx-auto'>Staff</p>
              <p className='mx-auto'>Architect and Designer</p>
              
            </div>
            
          </Carousel>
          

        </div>
        
      </div>
        
    </div>
  )
}

export default Team;