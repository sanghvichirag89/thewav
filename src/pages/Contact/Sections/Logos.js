import React from 'react';

import { darkLogos } from '../../Landing/Sections/MicroComponents/Logos.js';

const Logos = () => {
  return (
    <>
    {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    {/* //!.............................................  Large Screen  .................................................. */}
    {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    <section className='hidden box-border relative md:block -z-10'>

    {/* //! ..Below the Hero section......  */}

        {/* Logos */}
        <div className='flex flex-col py-[5rem] lg:mx-[11.5rem] xl:mx-[15rem] md:mx-[6rem]'>

        <div className='flex flex-row justify-between my-4'>   {/* First row */}
          <img src={darkLogos[0]} alt="image16.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[1]} alt="image17.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[2]} alt="image18.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[3]} alt="image19.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[4]} alt="image16.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[5]} alt="image17.png" className='lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
        </div>

        <div className='flex flex-row justify-between my-4'>     {/* Second row */}
          <img src={darkLogos[6]} alt="image17.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[7]} alt="image16.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[8]} alt="image19.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[9]} alt="image18.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[10]} alt="image17.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[11]} alt="image16.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
        </div>

        <div className='flex flex-row justify-between my-4'>     {/* Third row */}
          <img src={darkLogos[12]} alt="image17.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[13]} alt="image16.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[14]} alt="image19.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[15]} alt="image18.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[16]} alt="image17.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={darkLogos[17]} alt="image16.png" className='lg-[2rem] xl:h-[2.3rem] md:h-[1.85rem]'/>
        </div>

      </div>

    </section>

    {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    {/* //!.............................................  Small Screen  .................................................. */}
    {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    
    <section className='md:hidden box-border'>
      <div className='flex flex-col mt-14 mx-10 md:mx-20 pt-10 md:hidden'>

      <div className='flex flex-row justify-between my-4'>   {/* First row */}
        <img src={darkLogos[0]} alt="image16.png" className='h-[1.8rem] '/>
        <img src={darkLogos[1]} alt="image17.png" className='h-[1.8rem]'/>
        <img src={darkLogos[2]} alt="image18.png" className='h-[1.8rem] '/>
      </div>

      <div className='flex flex-row justify-between my-4'>     {/* Second row */}
        <img src={darkLogos[3]} alt="image17.png" className='h-[1.8rem]'/>
        <img src={darkLogos[4]} alt="image16.png" className='h-[1.8rem]'/>
        <img src={darkLogos[5]} alt="image19.png" className='h-[1.8rem] '/>
      </div>

      <div className='flex flex-row justify-between my-4'>     {/* Third row */}
        <img src={darkLogos[6]} alt="image16.png" className='h-[1.8rem] '/>
        <img src={darkLogos[7]} alt="image19.png" className='h-[1.8rem]'/>
        <img src={darkLogos[8]} alt="image17.png" className='h-[1.8rem]'/>
      </div>

      <div className='flex flex-row justify-between my-4'>     {/* Fourth row */}
        <img src={darkLogos[9]} alt="image18.png" className='h-[1.8rem] '/>
        <img src={darkLogos[10]} alt="image17.png" className='h-[1.8rem]'/>
        <img src={darkLogos[11]} alt="image16.png" className='h-[1.8rem]'/>
      </div>

      <div className='flex flex-row justify-between my-4'>     {/* Fifth row */}
        <img src={darkLogos[12]} alt="image18.png" className='h-[1.8rem] '/>
        <img src={darkLogos[13]} alt="image17.png" className='h-[1.8rem]'/>
        <img src={darkLogos[14]} alt="image16.png" className='h-[1.8rem]'/>
      </div>

      <div className='flex flex-row justify-between my-4'>     {/* Sixth row */}
        <img src={darkLogos[15]} alt="image18.png" className='h-[1.8rem] '/>
        <img src={darkLogos[16]} alt="image17.png" className='h-[1.8rem]'/>
        <img src={darkLogos[17]} alt="image16.png" className='h-[1.8rem]'/>
      </div>

      </div>
    </section>
    </>
  )
}

export default Logos