import React,{useRef, useLayoutEffect } from 'react';
import Navbar from '../../../reusable/Navbar/Navbar.js';
import Styles from './Hero.module.css';

import HeroButton from '../../../reusable/Buttons/HeroButton.js'


import Arrow from '../images/arrow.svg';
import Arrow02 from '../images/arrow02.svg';



// Gsap
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export const Hero = (props) => {


    const handleButton = () =>{
      props.onClick(true)
    } 

  
    // //! Gsap Scroll animations....
    const ContactHeroRef = useRef(null);
    const ContactHeroRefSmall = useRef(null);


    // //! ====================================== For Large screen...
    useLayoutEffect(() => {
      
      let ctxEnd = gsap.context(() => {
        if(window.innerWidth>=480){

              let contactTL = gsap.timeline();
  
              contactTL.fromTo('.arrowAnimation',{y:70,opacity:0, duration:1},{y:0,opacity:1,duration:.4,ease:"Power4.out"})
                     .fromTo('.IamTheButton',{css:{opacity:0}},{ css:{opacity:1}, duration:.4, ease:"Power4.out"},'-=.1').play()
        }
      }, ContactHeroRef );

      return () => ctxEnd.revert(); // cleanup
      
    }, []);

    // //! ========================================= For small screen...
    useLayoutEffect(() => {
      
      let ctxEnd = gsap.context(() => {
        if(window.innerWidth<480){

              let contactTL = gsap.timeline();
  
              contactTL.fromTo('.arrowAnimation',{y:70,opacity:0, duration:1},{y:0,opacity:1,duration:.4,ease:"Power4.out"})
                     .fromTo('.IamTheButton',{css:{opacity:0}},{ css:{opacity:1}, duration:.4, ease:"Power4.out"},'-=.1').play()
        
                }
      }, ContactHeroRefSmall );
      return () => ctxEnd.revert(); // cleanup
      
    }, []);






  return (
    
    <>
    {/* //*     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    */}
    {/* //? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/* //! ........................................................... For large Screen .............................................................. */}
    {/* //? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    <main className='bg-[#080816] h-[80vh] box-border relative hidden md:block overflow-hidden z-50' ref={ContactHeroRef}>
        <div className={Styles.gradient}></div>
        
        {/* //?.......... Navbar Import  .......... */}
        <Navbar/>


        {/* //!Main Hero content..(large screen) */}
      <div className='pt-[8rem] flex flex-col justify-center items-center'>

        <div className='px-12'>
          <h1 className='text-4xl md:text-[3.25rem] font-extrabold leading-[1.25rem] text-white mb-4 text-center pb-2'>Grow your business today, right now.</h1>
        </div>

        <div className='px-6 md:px-48 pt-[1rem]'>
          <p className='text-white md:leading-normal text-center lg:px-44 xl:px-72 font-[20] md:font-light md:text-base'>The growth squad behind some of the world's most successful brands.If you want the best growth,you're at the right place.</p>
        </div>

        {/* //!Button for large screen only(large screen) .*/}
        <div className='mt-[6rem] z-10'>
          <a onClick={handleButton} className='IamTheButton'>
            <HeroButton name={'Get in Touch'}/>
          </a>

        </div>

      </div>

      <div className='lg:h-[25%] xl:h-[30%] md:h-[23%] relative'>
            {/* //? Arrow 06 from figma file....The left arrow.. */}
            <img className='arrowAnimation absolute h-[3.2rem] w-[4rem] bottom-[.2rem] left-[7rem]' src={Arrow} alt="left arrow" />
            {/* //? Arrow 05 from figma file....The second left arrow.. */}
            <img className='arrowAnimation absolute h-[3.7rem] w-[4.8rem] -top-[.5rem] left-[21%]' src={Arrow} alt="second left arrow" />
            {/* //? Arrow 03 from figma file....The center left arrow.. */}
            <img className='arrowAnimation absolute h-[3.0rem] w-[4.3rem] bottom-[1.4rem] left-[40%]' src={Arrow} alt="center left arrow" />
            {/* //? Arrow 02 from figma file....The center right arrow.. */}
            <img className='arrowAnimation absolute h-[2.4rem] w-[3.0rem] bottom-[4rem] left-[58%]' src={Arrow02} alt="center right arrow." />
            {/* //? Arrow 06 from figma file....The second right arrow.. */}
            <img className='arrowAnimation absolute h-[3.2rem] w-[4rem] -top-[2.7rem] right-[21%]' src={Arrow} alt="second right arrow" />
            {/* //? Arrow 04 from figma file....The right most arrow.. */}
            <img className='arrowAnimation absolute h-[5rem] w-[6rem] bottom-[.1rem] right-[10%]' src={Arrow} alt="right most arrow" />
      </div>

    </main>


        {/* //? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //!.......................................................... For Small Screen ................................................... */}
        {/* //? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* //! Main Hero section.(small screen). */}

        <main className='bg-[#080816] h-[60vh] w-[100vw] box-border relative md:hidden overflow-hidden' ref={ContactHeroRefSmall}>
          <div className={Styles.gradient}></div>
          
          {/* //? .......... Navbar Import  .......... */}
          <Navbar/>


          {/* //! Main Hero content..(small screen) */}
          <div className='pt-[8.4rem] flex flex-col justify-center items-center'>

            <div className='px-12'>
            <h1 className='text-4xl font-bold text-white text-center'>Grow your business today, right now.</h1>
            </div>

            <div className='px-6 md:px-48 pt-[1.8rem]'>
            <p className='text-base md:text-lg text-gray-100 leading-tight md:leading-normal text-center lg:px-44 xl:px-72 font-400 md:font-light md:text-[0.95rem]'>The growth squad behind some of the world's most successful brands.If you want the best growth,you're at the right place.</p>
            </div>

            {/* //? Button for (small screen) only .*/}
            <div className='mt-[4rem] z-10'>
              <a onClick={handleButton} className="IamTheButton">
                <HeroButton name={'Get in Touch'}/>
              </a>
            </div>

            </div>
            <div className='h-[20%] relative'>
                {/* //? Arrow 06 from figma file....The left arrow.. */}
                <img className='arrowAnimation absolute h-[3.4rem] w-[4.2rem] -bottom-[.2rem] left-[1rem]' src={Arrow} alt="Arrow at the left" />
                {/* //? Arrow 05 from figma file....The second left arrow.. */}
                <img className='arrowAnimation absolute h-[3.6rem] w-[4.6rem] -top-[2.3rem] left-[12%]' src={Arrow} alt="Arrow at the left" />
                {/* //? Arrow 03 from figma file....The center left arrow.. */}
                <img className='arrowAnimation absolute h-[3.2rem] w-[4rem] bottom-[1.4rem] left-[35%]' src={Arrow} alt="Arrow at the left" />
                {/* //? Arrow 02 from figma file....The center right arrow.. */}
                <img className='arrowAnimation absolute h-[2.2rem] w-[3rem] bottom-[5.5rem] left-[54%]' src={Arrow02} alt="Arrow at the left" />
                {/* //? Arrow 06 from figma file....The second right arrow.. */}
                <img className='arrowAnimation absolute h-[3.4rem] w-[4.4rem] -top-[4rem] right-[9%]' src={Arrow} alt="Arrow at the left" />
                {/* //? Arrow 04 from figma file....The right most arrow.. */}
                <img className='arrowAnimation absolute h-[5rem] w-[5.6rem] -bottom-[1.5rem] right-[3%]' src={Arrow} alt="Arrow at the left" />
            </div>

        </main>
    </>
  )
}