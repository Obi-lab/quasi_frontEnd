import React from 'react'
import Vision from "../assets/vision48.png"
import Mission from "../assets/mission48.png"
import History from "../assets/history48.png"
import Guarantee from "../assets/guarantee48.png"
import Email from "../assets/email.png"
import Whatsapp from "../assets/whatsapp.png"
import Call from "../assets/call.png"
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='mt-2 w-[94%] bg-gradient-to-br from-blue-700 to-pink-700  mx-auto pt-5 pb-5 mt-3 text-white rounded-3xl' id="about">
        <div className='px-2'>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-[50%]'>
                    <p className='py-2 '> About Us</p>
                    <p className='text-2xl py-1'>Building Efficiency, Shaping Tomorrow</p>

                </div>
                <div className='md:w-[50%]'>
                    <p className='md:w-[87%]'>
                        Higo ventures is a building and construction company that 
                        harness technology for smarter, more efficient construction.
                    </p>
                    <Link to='/portfolio'>
                        <button className='border bg-[#fff] text-[#1f3528] border-gray-300 rounded-full px-6  my-2'>More</button>
                    </Link>
                </div>

            </div>
        </div>
        <div className='px-2 flex md:flex-row pt-5 flex-col gap-4'>
            <div className='md:w-[30%] flex flex-col gap-2'>
                <div className='border border-gray-300  px-2 rounded-3xl'>
                    <div>
                        <img className='py-1 w-10 ' src={Guarantee} />
                    </div>

                    <p className='text-xl text-white'>Certification</p>
                    <p className='md:w-[97%]  py-1'>
                        Higo ventures is a registered and recognized Quantity Survey 
                        firm by The Government of Kenya
                    </p>

                </div>
                <div className='border border-gray-300 px-2 rounded-3xl'>
                    <div>
                        <img className='py-1' src={Vision} />
                    </div>
                    <p className='text-xl text-white'>Our Vision</p>
                    <p className='md:w-[85%] py-2'>
                     To lead globally in construction tech and QS, shaping sustainable, efficient, and affordable
                     built environments.
                    </p>

                </div>
                  
            </div>
            <div className='md:w-[30%] border-b border-gray-300 flex flex-col gap-2'>
                <div className='border border-gray-300 px-2 rounded-3xl'>
                    <div>
                        <img className='py-4' src={Mission} />
                    </div>
                    <p className='text-xl text-white'>Our Mission</p>
                    <p className='md:w-[85%] py-3'>
                    To revolutionize construction through tech and precision QS for cost-effective, innovative, 
                    and resilient projects.
                    </p>


                </div>
                <div className=' px-2 flex flex-col items-center'>
                    <div className='border border-gray-300 w-[100%] rounded-3xl '>
                        <div className='flex  items-center mx-auto'>
                            <p className='text-white py-4 mx-auto'>
                                Get in touch with us  
                            </p>
                        </div>
                        
                    </div>

                    
                    <div className=' md:w-[97%] flex gap-6 py-1 mx-auto'>

                        <div className=" flex flex-row gap-5 items-center mx-auto">
                           
                            <a href="tel:+254731805194">
                                <img className='py-1 w-10 ' src={Call} />
                            </a>
                            <Link to='https://wa.me/254710217169'>
                                <img className='py-1 w-10 ' src={Whatsapp} />
                            </Link>
                        </div>
                        
                    </div>

                </div>
                
                  
            </div>
            <div className="md:w-[40%] bg-[url('./assets/about.jpg')] rounded-3xl bg-cover bg-center  flex flex-col gap-2">
                  
            </div>
            

        </div>
        
    </div>
  )
}

export default About