import React from 'react'
import Avatar from "../assets/avatar.png"

function Testimonials() {
  return (
    <div className='w-[94%] mx-auto pb-5  mt-3  items-center' id="testimonials">
      <div>
        <p className='py-2 text-2xl'>Testimonials</p>
        <p className='text-xl py-2'>What some of our clients are saying about us</p>

      </div>
      <div className='pt-2 flex flex-col gap-4 md:flex-row '>
        <div className=' border-t border-r rounded-2xl p-2  border-gray-200'>

          <img className="w-15 h-15 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={Avatar} alt="Bordered avatar" loading="lazy" />

          <p className='py-1'>Working with Higo was a game-changer for our construction project.Their expertise 
        in both construction technology and Quantity Surveying saved us time and money.</p>
          <p className='py-1 text-xl'>Darel</p>

        </div>

        <div className=' border-t border-r rounded-2xl p-2  border-gray-200'>
          
            <img className="w-15 h-15 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={Avatar} alt="Bordered avatar" loading="lazy"  />

            <p className='py-1'>I can't recommend Higo enough. Their innovative approach to construction and
             meticulous attention to budget management made our project a breeze. 
            </p>
            <p className='py-1 text-xl'>Bon</p>

        </div>

        <div className=' border-t border-r rounded-2xl p-2  border-gray-200'>
          <img className="w-15 h-15 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={Avatar} alt="Bordered avatar" loading="lazy"  />

          <p className='py-1'>From day one, Higo demonstrated their commitment to excellence. Their ability to combine construction 
          tech with QS insights resulted in a project that not only met our expectations but exceeded them. 
          </p>
          <p className='py-1 text-xl'>Otieno</p>

        </div>

      </div>

      

    </div>
  )
}

export default Testimonials