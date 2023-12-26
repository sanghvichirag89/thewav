import React,{useLayoutEffect} from 'react';
import Styles from './End.module.css';
import MessageIcon from '../images/end/envelope.svg'
import HelloIcon from '../images/end/phone.svg'
import BuildingIcon from '../images/end/building.svg'
import { useRef } from 'react';

// Gsap
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const End = () => {

    const cpEndRef = useRef(null);

    useLayoutEffect(() => {
  
        let ctxEnd = gsap.context(() => {

            if(window.innerWidth>=480){
                let cptlEnd = gsap.timeline();
    
                cptlEnd.fromTo('.cpIcons',{y:-20,opacity:0},{y:0,opacity:1,duration:.6,ease:"Power2.out"},'+=.3').pause()

    

                ScrollTrigger.create({
                    trigger: "#scrollStarterLarge",
                    start:'top center+=150',
                    end:'bottom center',
                    markers:false,
                    srub:1,
                    onEnter: () => cptlEnd.play()
                    }); 
              
            }else{

                let cptlEnd = gsap.timeline();
    
                cptlEnd.fromTo('.cpIcons',{y:-20,opacity:0},{y:0,opacity:1,duration:.7,ease:"Power2.out"},'+=.3').pause()    
    
                ScrollTrigger.create({
                    trigger: "#scrollStarterSmall",
                    start:'top center+=100',
                    end:'bottom center',
                    markers:false,
                    scrub:1,
                    onEnter: () => cptlEnd.play()
                    }); 

            }

        }, cpEndRef ); 
        
        return () => ctxEnd.revert(); // cleanup
        
      }, []);




  return (
    <>
    {/* //?###################################################################################################################### */}
    {/* //! ...............  This area contains the Drop a message, say Hello and Visit us section  .................. */}
    {/* //?###################################################################################################################### */}
    <main className='relative w-[100vw] bg-[#080816] overflow-hidden' ref={cpEndRef}>
        <div className={Styles.gradient}></div>


        {/* //?................................................The three sections...................................... */}
        {/* //!######################################################################################################## */}
        {/* //?.........................................Medium to large,xl screens .................................... */}
        <div className='hidden md:block w-[100vw]'>
        <div className='flex flex-col md:flex-row justify-between pt-[3rem] lg:px-[15rem] xl:px-[19rem] md:px-[8rem] md:pb-12 lg:pb-6'>

            {/* Drop a message.. */}
            <div className='flex flex-col items-center py-8' id="scrollStarterLarge">
                <img className='mb-4 cpIcons' src={MessageIcon} alt="message" id={Styles.message}/>
                <h3 className='text-white text-xl font-bold'>Drop a message</h3>
                <p className='text-[#BEBEBE] text-sm'>info@thewavco</p>
            </div>
            {/* Say Hello.. */}
            <div className='flex flex-col items-center py-8'>
                <img className='mb-4 cpIcons' src={HelloIcon} alt="message" id={Styles.phone}/>
                <h3 className='text-white text-xl font-bold'>Say Hello</h3>
                <p className='text-[#BEBEBE] text-sm'>+919876500000</p>
            </div>
            {/* Visit Us.. */}
            <div className='flex flex-col items-center py-8'>
                <img className='mb-4 cpIcons' src={BuildingIcon} alt="message" id={Styles.building}/>
                <h3 className='text-white text-xl font-bold'>Visit Us</h3>
                <p className='text-[#BEBEBE] text-sm leading-tight'>TM5/55 Nishikanan,</p>
                <p className='text-[#BEBEBE] text-sm leading-tight'>Teghoria,Kolkata - 700157</p>
            </div>


        </div>
        </div>

        {/* //?########################################################################################## */}
        {/* //!.................................for small screens........................................ */}

        <div className='flex flex-col justify-between pt-[3rem] w-[100vw] md:hidden pb-12 pl-6'>

            {/* //*Drop a message.. */}
            <div className='flex flex-row items-start py-8 pl-[2rem]' id="scrollStarterSmall">
                <img className='cpIcons mb-4' src={MessageIcon} alt="message" />
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-2xl pb-2 font-bold'>Drop a message</h3>
                    <p className='text-[#BEBEBE] text-sm'>info@thewavco</p>
                </div>
            </div>

            {/* //*Say Hello.. */}
            <div className='flex flex-row items-center py-8 pl-[2rem]'>
                <img className='cpIcons mb-4' src={HelloIcon} alt="message"/>
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-2xl pb-2 font-bold'>Say Hello</h3>
                    <p className='text-[#BEBEBE] text-sm'>+919876500000</p>
                </div>
            </div>

            {/* //*Visit Us.. */}
            <div className='flex flex-row items-center py-8 pl-[2rem]'>
                <img className='cpIcons mb-4' src={BuildingIcon} alt="message" />
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-2xl pb-2 font-bold'>Visit Us</h3>
                    <p className='text-[#BEBEBE] text-sm leading-'>123 Street</p>
                    <p className='text-[#BEBEBE] text-sm leading-'>Banglore 123456</p>
                </div>
            </div>


        </div>


    </main>
    </>
  )
}

export default End