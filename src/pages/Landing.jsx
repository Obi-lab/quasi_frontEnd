import React, { useEffect, useState } from 'react';

function Landing() {

    const [animationText, setAnimationText] = useState('');
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500']; // Array of Tailwind CSS text color classes

    useEffect(() => {
        const textToAnimate = ' HHigo'; // Text to animate
        let index = 1;
        
        
        const animationInterval=setInterval(()=>{
            setAnimationText((prevText) => prevText + textToAnimate[index]);

            index ++;
            if (index === (textToAnimate.length - 1)) {
                clearInterval(animationInterval); // Stop the animation when all letters are displayed
        
                // After the animation, set a timer to redirect
                const redirectTimer = setTimeout(() => {
                  // Redirect to landing page
                  window.location.href = '/home'; 
                }, 500); //  milliseconds
            }
            

        },500)

        return () => {
            clearInterval(animationInterval);
          };

    },[])

  return (
    <div>
      <div className='h-screen w-screen  flex items-center'>
        <div className='mx-auto text-4xl font-bold'>
          {animationText.split('').map((letter, index) => (
            <span key={index} className={colors[index % colors.length]}>
              {letter}
            </span>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Landing;
