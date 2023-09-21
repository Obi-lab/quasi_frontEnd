import React from 'react'
import Design1 from '../assets/design1.jpg'
import Design2 from '../assets/design2.jpg'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/portfolio/homeP.png'
function Home() {

  return (
    <div className='mt-2 w-[94%] bg-[#101139] mx-auto pt-5 pb-8 mt-3 rounded-xl ' id="home">
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-[60%] flex flex-col'>
                <div className='mx-auto flex flex-col w-[97%]  md:w-[80%]'>
                    <p className='md:text-4xl text-xl text-center md:text-left text-white py-7 md:w-[80%]'>
                        Elevate Your <span className='text-[#019dec]'>Digital Presence </span>
                         With Our Expertise in the online space
                     </p>

                    <p className='text-sm md:text-m  text-center md:text-left text-white pb-7'>
                        Stand Out in the Crowded Online Landscape with our digital Solutions
                    </p>
                    <div className='mx-auto md:mx-0' >
                        <button className=' my-4 px-4 py-2 bg-[#0099ea] rounded-2xl'>
                            Connect with us
                        </button>
                    </div>
                
                    
                </div>

            </div>
            <div className='md:w-[40%] '>
                <img src={HomeImage} className='' />
            </div>
        </div>
    </div>
  )
}

export default Home