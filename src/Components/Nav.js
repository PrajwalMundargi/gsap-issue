import React, { useRef, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP directly

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'Power4.easeInOut',
      });
    }
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div ref={navRef} className='w-full h-[50px] flex justify-between'>
      <div className='text-white text-4xl ml-5 cursor-pointer'>Portfolio</div>
      <div className='flex gap-6'>
        <div className='text-white text-xl mr-5 cursor-pointer'>Home</div>
        <div className='text-white text-xl mr-5 cursor-pointer'>Projects</div>
        <div className='text-white text-xl mr-5 cursor-pointer'>Resume</div>
        <div className='text-white text-xl mr-5 cursor-pointer'>About Me</div>
        <div className='text-white text-xl mr-5 cursor-pointer'>Blogs</div>
      </div>
    </div>
  );
};

export default Nav;
