import React from 'react'
import { Link } from 'react-router-dom';
import Dev from '../assets/portfolio/dev.png';
import Design from '../assets/portfolio/artstation.png';
import Seo from '../assets/portfolio/seo.png';
import Content from '../assets/portfolio/content.png';

function Services() {
  return (
    <div className='w-[94%] mx-auto pt-5 mt-3  items-center' id="services">

        <div className='flex flex-col gap-8'>
            <div className='mx-auto md:w-[70%] text-center'>
                <p className='md:text-2xl text-xl font-bold py-4'>The Quasi-State Solution</p>
                <p className='text-gray-800 pb-2'>
                    Bringing unique solutions to business websites is crucial to stand out in a competitive 
                    online landscape.We offer innovative and unique solutions to enhance your brands 
                    digital presence.
                </p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-[50%] flex flex-col gap-4 border md:border-0 border-[#101139] rounded-2xl p-4 '>
                        <div className='flex flex-row gap-4'>
                            <img src={Design} className='' />
                            <p className='text-[#e590d2] font-bold '>Clean Minimal Web <br/> Design</p>
                        </div>
                        <div>
                            <p className='py-2'>
                            We sculpt websites that don't just look good ,they work wonders. User-centric, mobile-responsive, 
                            and visually captivating, your website will leave an indelible mark on every visitor
                            </p>
                            <p className='font-semibold'>Design</p>
                        </div>
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-4 md:border md:border-[#101139] rounded-2xl p-4'>
                        <div className='flex flex-row gap-4'>
                            <img src={Dev} className='' />
                            <p className='text-[#d5439c] font-bold '>Modern Website<br/> Development</p>
                        </div>
                        <div>
                            <p className='py-2'>
                                Our web design team crafts visually stunning, user-friendly websites that captivate your audience.
                                Every pixel we place, every line of code we write, and every element we design is meticulously 
                                curated to convey your brand's story
                            </p>
                            <p className='font-semibold'>Development</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-[50%] flex flex-col gap-4 border border-[#101139] p-4 rounded-2xl'>
                        <div className='flex flex-row gap-4'>
                            <img src={Seo} className='' />
                            <p className='text-[#64A157] font-bold '>Cutting-Edge SEO <br/> Strategies</p>
                        </div>
                        <div>
                            <p className='py-2'>
                            We optimize your site's structure, keywords, and content to increase organic traffic,
                             drive leads, and maximize your online visibility.
                            When you partner with us, you're choosing a path to digital prominence.
                            </p>
                            <p className='font-semibold'>Search Engine Optimization</p>
                        </div>
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-4 '>
                        <div className='flex flex-row gap-4'>
                            <img src={Content} className='' />
                            <p className='text-[#019dec] font-bold '>Engaging And Informative<br/> Content</p>
                        </div>
                        <div>
                            <p className='py-2'>
                            We create content that resonates with your target audience, builds trust,
                             and converts visitors into loyal customers. 
                            Our content strategy is tailored to your unique brand identity and business objectives.
                            </p>
                            <p className='font-semibold'>Content Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services;