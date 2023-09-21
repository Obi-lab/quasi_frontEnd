import React from 'react';
import Higo from '../assets/portfolio/higo.png';
import HigoTab from '../assets/portfolio/higo1.png';
import HigoMobile from '../assets/portfolio/higo2.png';
import { Link } from 'react-router-dom';
import Dabrid from '../assets/portfolio/dabrid.png'

export default function PortfolioContent() {
  return (
    <div className='w-[94%] mx-auto pt-5 mt-3  items-center'>
        <div className='flex flex-col gap-8'>
            <div className='flex md:flex-row flex-col gap-8 mb-6'>
                <div className='md:w-[60%] flex flex-row  bg-gray-300 rounded-2xl p-4'>
                    <div className=''>
                        <img src={Higo} className='rounded-xl'/>
                        
                    </div>
                  
                </div>
                <div className='md:w-[40%] '>
                    <div>
                        <p className='font-bold pb-5'>Project Higo</p>
                        <p className='py-4 w-[90%]'>
                            Quantity Survey and Building Technology firm website and landing page
                        </p>
                        <div className='flex flex-row gap-4 my-4'>
                            <p className='px-4 py-1 bg-[#e590d2] flex items-center text rounded-2xl'>Development</p>
                            <p className='px-4 py-1 bg-[#b4e4aa] flex items-center text rounded-2xl'>Design</p>
                            <p className='px-4 py-1 bg-[#019dec] flex items-center text rounded-2xl'>DevOps</p>

                        </div>
                        <div className='flex flex-row gap-4 mb-3'>
                            <p className='px-4 py-1 bg-[#019dec] flex items-center text rounded-2xl'>Content Engineering</p>
                            <p className='px-4 py-1 bg-[#e590d2] flex items-center text rounded-2xl'>SEO</p>
                            
                        </div>

                    </div>
                    <div className='flex flex-row'>
                        
                        <div>
                            <Link to='/portfolio'>
                                <button className='py-1 font-bold flex mt-5 rounded-full'>
                                    Check Out
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#019dec" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </span>
                                </button>
                            </Link> 
                        </div>
                    </div>

                </div>
                
            </div>

            {/*Higo */}
            <div className='flex md:flex-row flex-col gap-8 mb-6 '>
                <div className='md:w-[60%] flex flex-row  bg-gray-300 rounded-2xl p-4'>
                    <div className=''>
                        <img src={Dabrid} className='rounded-xl'/>
                        
                    </div>
                  
                </div>
                <div className='md:w-[40%] '>
                    <div>
                        <p className='font-bold pb-5'>Project Dabrid</p>
                        <p className='py-4 w-[90%]'>
                            AI logistics solution service on the web for exports and imports accross the globe.
                            
                        </p>
                        <div className='flex flex-row gap-4 my-3'>
                            <p className='px-4 py-1 bg-[#e590d2] flex items-center text rounded-2xl'>AI</p>
                            <p className='px-4 py-1 bg-[#b4e4aa] flex items-center text rounded-2xl'>Development</p>
                            <p className='px-4 py-1 bg-[#019dec] flex items-center text rounded-2xl'>DevOps</p>

                        </div>
                        <div className='flex flex-row gap-4 mb-3'>
                            <p className='px-4 py-1 bg-[#019dec] flex items-center text rounded-2xl'>Sockets</p>
                            <p className='px-4 py-1 bg-[#e590d2] flex items-center text rounded-2xl'>SEO</p>
                            
                        </div>

                    </div>
                    <div className='flex flex-row'>
                        
                        <div>
                            <Link to='/portfolio'>
                                <button className='py-1 font-bold flex mt-5 rounded-full'>
                                    Check Out
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#019dec" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </span>
                                </button>
                            </Link> 
                        </div>
                    </div>

                </div>
                
            </div>

            
        </div>

    </div>
  )
}
