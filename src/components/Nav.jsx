import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/portfolio/logo.png';
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };
    
  return (
    <header className='bg-white mt-1 w-[94%] mx-auto'>
        <nav className='flex justify-between items-center  '>
            <div className='flex flex-row items-center'>
                <img className="w-48" src={Logo}/>
            </div>
            <div className={`md:static md:min-h-fit absolute md:w-auto w-[94%] top-[15%] left-[3%] min-h-[60vh] flex justify-between
             left-0 md:block ${menuOpen ? 'block z-50' : 'hidden'} md:bg-white bg-[#3f418c] rounded  items-center px-5 transition-all duration-300`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8'>
                    <Link to='/' className='font-bold hover:text-[#3f418c] text-slate-700'>
                        Home   
                    </Link>
                    <Link to='/portfolio' className='font-bold hover:text-[#3f418c] text-slate-700'>
                        Portfolio   
                    </Link>
                    <Link to='/blog' className='font-bold hover:text-[#3f418c] text-slate-700'>
                        Blog  
                    </Link>
                    
                </ul>
                
            </div>
            <div className='md:static  absolute top-[-100%]'>
                <Link to='https://wa.me/254748370829'>
                    <button className='bg-[#3f418c] text-white  px-5 py-2 hover:py-3 rounded-full'>
                    Contact Us
                    </button>
                </Link>
            </div>
            <div className='block md:hidden md:z-0 '>
                
                    {menuOpen ? (
                        <AiOutlineClose onClick={toggleMenu} />
                    ) : (
                        <AiOutlineMenu onClick={toggleMenu} />
                    )}
               
            </div>
        </nav>
    </header>
  )
}

export default Nav;