import React, { useEffect, useLayoutEffect, useRef } from "react";
import LearnMoreButton from "./MicroComponents/LearnMoreButton";
import "./WhatWeDo.css";

import ImagePerformace from "../images/whatwedo/performance_marketing.gif";
import ImageUiUx from "../images/whatwedo/ui_ux_design.gif";
import ImageBranding from "../images/whatwedo/speaker.gif";

import EnPreTar from "../images/whatwedo/eptas.svg";
import CreComDem from "../images/whatwedo/ccd.svg";
import DatDriOpr from "../images/whatwedo/ddo.svg";

// Gsap animations ::
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlatformAndTools from "./PlatformAndTools";
gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  //Workaround for the hover issue
  useEffect(() => {
    setInterval(() => {
      if (document.querySelector("#wwdCardOne").matches(":hover")) {
        wwdCardOne.current.classList.add("active");
        wwdCardThree.current.classList.remove("active");
        wwdCardTwo.current.classList.remove("active");
      }
      if (document.querySelector("#wwdCardTwo").matches(":hover")) {
        wwdCardTwo.current.classList.add("active");
        wwdCardOne.current.classList.remove("active");
        wwdCardThree.current.classList.remove("active");
      }
      if (document.querySelector("#wwdCardThree").matches(":hover")) {
        wwdCardThree.current.classList.add("active");
        wwdCardOne.current.classList.remove("active");
        wwdCardTwo.current.classList.remove("active");
      }
    }, 100);
  }, []);

  // Card hover animation..
  const wwdCardOne = useRef(null);
  const wwdCardTwo = useRef(null);
  const wwdCardThree = useRef(null);

  // const cardArray = ['wwdCardOne','wwdCardTwo','wwdCardThree']
  // const [ cardW, setCardW ] = useState('cardOne')
  const cardSelected = (e) => {
    if (e.target.id) {
      if (e.target.id === "wwdCardThree") {
        wwdCardThree.current.classList.add("active");
        wwdCardOne.current.classList.remove("active");
        wwdCardTwo.current.classList.remove("active");
      } else if (e.target.id === "wwdCardTwo") {
        wwdCardTwo.current.classList.add("active");
        wwdCardOne.current.classList.remove("active");
        wwdCardThree.current.classList.remove("active");
      } else {
        wwdCardOne.current.classList.add("active");
        wwdCardThree.current.classList.remove("active");
        wwdCardTwo.current.classList.remove("active");
      }
    }
  };

  // Scroll animations using gsap...
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animateScrollDownOne = gsap
        .to(
          "#cardone",
          // { x: -1400, duration: 1 },
          { x: 0, duration: 0.8, ease: "Power2.out" }
        )
        .pause();
      const animateScrollDownTwo = gsap
        .to(
          "#cardtwo",
          // { x: 1400, duration: 1 },
          { x: 0, duration: 0.8, ease: "Power2.out" }
        )
        .pause();
      const animateScrollDownThree = gsap
        .to(
          "#cardthree",
          // { x: -1400, duration: 1 },
          { x: 0, duration: 0.8, ease: "Power2.out" }
        )
        .pause();

      // Card one
      ScrollTrigger.create({
        trigger: "#cardone",
        onEnter: () => animateScrollDownOne.restart(),
      });

      ScrollTrigger.create({
        trigger: "#cardone",
        markers: false,
        onEnterBack: () => animateScrollDownOne.restart(),
      });

      // Card Two
      ScrollTrigger.create({
        trigger: "#cardtwo",
        onEnter: () => animateScrollDownTwo.restart(),
      });

      ScrollTrigger.create({
        trigger: "#cardtwo",
        markers: false,
        onEnterBack: () => animateScrollDownTwo.restart(),
      });

      // Card three
      ScrollTrigger.create({
        trigger: "#cardthree",
        onEnter: () => animateScrollDownThree.restart(),
      });

      // Card three
      ScrollTrigger.create({
        trigger: "#cardthree",
        onEnter: () => animateScrollDownThree.restart(),
      });

      ScrollTrigger.create({
        trigger: "#cardthree",
        markers: false,
        onEnterBack: () => animateScrollDownThree.restart(),
      });
    }, cardRef);

    return () => ctx.revert(); // cleanup
  }, []);

  // Below is the scrub animation,elements are scrolled to view according to the scroll length..Looks more natural and beautiful..If you want it ,uncommnet the below line and comment the above line from 'const animateScrollDownOne'....
  //   const card = cardRef.current;

  //     gsap.fromTo(card.querySelector("#cardone"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power4.out', scrollTrigger:{
  //         trigger:card.querySelector("#cardone"),
  //         end: 'bottom+700 center',
  //         scrub:2,
  //         markers:false,
  //         toggleActions: "play none none reverse"
  //     }})
  //     gsap.fromTo(card.querySelector("#cardtwo"),{x:1400, duration: 1},{x:0,duration:1.5,ease:'Power4.out', scrollTrigger:{
  //         trigger:card.querySelector("#cardtwo"),
  //         end: 'bottom+700 center',
  //         scrub:2
  //     }})
  //     gsap.fromTo(card.querySelector("#cardthree"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power4.out', scrollTrigger:{
  //         trigger:card.querySelector("#cardthree"),
  //         end: 'bottom+700 center',
  //         scrub:2
  //     }})
  // }, [])

  // gsap.fromTo(card.querySelector("#cardone"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
  //     trigger:card.querySelector("#cardone"),
  //     end: 'bottom+500 center',
  //     scrub:2S,
  //     markers:true,
  //     toggleActions: "play none none reverse"
  // }})
  // gsap.fromTo(card.querySelector("#cardtwo"),{x:1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
  //     trigger:card.querySelector("#cardtwo"),
  //     end: 'bottom+500 center',
  //     scrub:2
  // }})
  // gsap.fromTo(card.querySelector("#cardthree"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
  //     trigger:card.querySelector("#cardthree"),
  //     end: 'bottom+500 center',
  //     scrub:2
  // }})
  // }, [])

  return (
    <>
      <main className="bg-[#F6F6FF] m-0 p-0 box-border w-[100vw] relative z-50">
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //!  ###########################..........................  Large screen (<LG,XL) ...................###########################################  */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="hidden lg:block box-border w-[100%] h-[100%]">
          <div className="flex flex-row lg:px-[8rem] xl:px-[10rem] py-20">
            {/* Heading */}
            <div className="min-w-[20vw] xl:pl-2 pt-3">
              <h1 className="text-[3.4rem] font-bold leading-tight">What</h1>
              <h1 className="text-[3.4rem] font-bold leading-tight">We Do</h1>
            </div>

            {/* //? ------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* //!......................................................................Cards ..................................................................... */}
            {/* //? ------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* //! wwd  === 'What we do' */}
            <div className="flex flex-row box-border wwd-cards">
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/* //! card 1 */}
              <div
                className={`card active flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem] active:border-l-[8px] border-[#0049FA]`}
                onMouseEnter={(e) => cardSelected(e)}
                id="wwdCardOne"
                ref={wwdCardOne}
              >
                <div className="box-border">
                  <img
                    className="card-image"
                    src={ImagePerformace}
                    alt="Performance Design image"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[100%] my-3 px-3">
                  <h3 className="font-bold text-2xl">Performance Marketing</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                  <div className="flex flex-row justify-start">
                    <p className="text-sm leading-tight text-[#5E5E5E] pr-6">
                      Delivering Solid Revenue Generating Solutions through
                      Performance Marketing Channels.
                    </p>
                  </div>
                  <div className="card-item-button flex flex-row  items-center">
                    <a href="/performance_marketing">
                      <LearnMoreButton name={"Learn More"}></LearnMoreButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* //! card 2 */}
              <div
                className="card flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem]"
                onMouseEnter={(e) => cardSelected(e)}
                id="wwdCardTwo"
                ref={wwdCardTwo}
              >
                <img
                  className="card-image"
                  src={ImageUiUx}
                  alt="Performance Design image"
                />
                <div className="flex flex-col items-start justify-start w-[100%] my-3 px-3">
                  <h3 className="font-bold text-2xl">UI/UX Design</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                  <div className="flex flex-row justify-start">
                    <p className="text-sm leading-tight text-[#5E5E5E] pr-6">
                      Our Creative Design Team brings in the required problem
                      solving techniques by thoroughly studying user behaviour
                      and capitalizing on the same to build seamless UX
                      solutions.
                    </p>
                  </div>
                  <div className="card-item-button flex flex-row mt-6 items-center">
                    <a href="/uxui">
                      <LearnMoreButton name={"Learn More"}></LearnMoreButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* //! card 3 */}
              <div
                className="card flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem]"
                onMouseEnter={(e) => cardSelected(e)}
                id="wwdCardThree"
                ref={wwdCardThree}
              >
                <img
                  className="card-image"
                  src={ImageBranding}
                  alt="Performance Design image"
                />
                <div className="flex flex-col items-start justify-start w-[100%] my-3 px-3">
                  <h3 className="font-bold text-2xl">Visual Branding</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                  <div className="flex flex-row justify-start">
                    <p className="text-sm leading-tight text-[#5E5E5E] pr-6">
                      Creating, nurturing and evolving your Brand Identity for
                      the respective target audience while designing promising
                      Creatives for Social Media as well as Performance Ads.
                    </p>
                  </div>
                  <div className="card-item-button flex flex-row mt-6 items-center">
                    <a href="/branding">
                      <LearnMoreButton name={"Learn More"}></LearnMoreButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* //* End of the card.... */}
            </div>
          </div>
        </div>
        {/* //? End of large screen.... */}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //!##################################.......................   Small and medium screen ...................................################################  */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* //! Heading */}

        <div className="flex flex-row items-start lg:hidden pt-20 ml-10 md:ml-18">
          <h1 className="text-3xl font-bold">What We Do</h1>
        </div>

        <div className="lg:hidden flex flex-col items-center mt-4 pb-24">
          {/* //! Cards */}
          <div className="flex flex-col box-border">
            {/* //! Performance Marketing */}
            <div className="flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]">
              <img
                src={ImagePerformace}
                alt="performance_marketing_image"
                className="h-52"
              />
              <h3 className="font-bold text-2xl pt-2">Performance Marketing</h3>
              <div className="flex flex-row items-center justify-center text-center pt-2">
                <p className="text-sm font-medium md:text-base px-2 md:px-16 text-[#5E5E5E]">
                  Delivering Solid Revenue Generating Solutions through
                  Performance Marketing Channels.
                </p>
              </div>
              <div className="flex flex-row my-6 items-center">
                <a href="/performance_marketing">
                  <LearnMoreButton name={"Read More"} />
                </a>
              </div>
            </div>
            {/* //! End of the card.... */}

            {/* //! UI/UX Design */}
            <div className="flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]">
              <img src={ImageUiUx} alt="UI/UX Design image" className="h-52" />
              <h3 className="font-bold text-2xl pt-2">UX/UI Design</h3>
              <div className="flex flex-row items-center justify-center text-center pt-2">
                <p className="text-sm font-medium md:text-base px-2 md:px-16 text-[#5E5E5E]">
                  Our Creative Design Team brings in the required problem
                  solving techniques by thoroughly studying user behaviour and
                  capitalizing on the same to build seamless UX solutions.
                </p>
              </div>
              <div className="flex flex-row my-6 items-center">
                <a href="/uxui">
                  <LearnMoreButton name={"Read More"} />
                </a>
              </div>
            </div>
            {/* //! End of the card.... */}

            {/* //! Visual Branding */}
            <div className="flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]">
              <img
                src={ImageBranding}
                alt="performance_marketing_image"
                className="h-52"
              />
              <h3 className="font-bold text-2xl pt-2">Visual Branding</h3>
              <div className="flex flex-row items-center justify-center text-center pt-2">
                <p className="text-sm font-medium md:text-base px-2 md:px-16 text-[#5E5E5E]">
                  Creating, nurturing and evolving your Brand Identity for the
                  respective target audience while designing promising Creatives
                  for Social Media as well as Performance Ads.
                </p>
              </div>
              <div className="flex flex-row my-6 items-center">
                <a href="/branding">
                  <LearnMoreButton name={"Read More"} />
                </a>
              </div>
            </div>
            {/* //! End of the card.... */}
          </div>
        </div>

        {/* //! ========================================  Below the Cards ===================================================== */}

        {/* //* #########################################################################################################################  */}
        {/* //! ###################################   Small and Medium Screen only - for the Dark part ################################## */}
        {/* //* #########################################################################################################################  */}
        <div className="lg:hidden box-border bg-[#080816] ">
          {/* //! .....Cards..... */}
          <div className="flex flex-col pt-20 pb-20 md:px-[4rem]">
            {/* //* /////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 1 :: Enhanced Precision Targeting At Scale. */}
            <div className="flex flex-col items-center justify-end text-[#BEBEBE] md:pb-[2.2rem] pb-6 mb-10">
              {/* Logo is Here. */}
              <img
                className="w-[10.75rem] h-[10.75rem]"
                src={EnPreTar}
                alt="Enhanced Precision Targeting At Scale"
              />

              {/* //?Text */}
              <div className="flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]">
                {/* Heading */}
                <div className="flex flex-col justify-start text-xl font-bold text-white">
                  <h1>Enhanced Precision Targeting.</h1>
                  <h1>At Scale.</h1>
                </div>

                {/* //?Paragraph ( Relating to Enhancement precision targeting.. ) */}
                <div className="pt-4 text-sm leading-relaxed  ">
                  <p>
                    We experiment on varied Target Audience Segments based on
                    Researched Insights - which in turn clears the picture on
                    top performing Audience Segments and Market Insights. This
                    helps you achieve a higher Conversion Rate!
                  </p>
                </div>
                {/* //?Percentages.. */}
                <div className="flex flex-row justify-between items-center mt-6 px-4">
                  {/* //? First % box */}
                  <div className=" flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">64%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">Growth</p>
                  </div>

                  {/* //?Second % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">37%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">CTR</p>
                  </div>

                  {/* //?Third % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">32%</h1>
                    <p className="text-sm">Reduction in</p>
                    <p className="text-sm">CAC</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //* End of card 1 */}

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 2 :: Creatives and Communication.On Demand. */}
            <div className="flex flex-col items-center justify-end text-[#BEBEBE] pb-4 my-10">
              {/* //?Logo is Here. */}
              <img
                className="w-[11.375rem] h-[9.2rem]"
                src={CreComDem}
                alt="Creatives and Communication.On Demand."
              />

              {/* //?Text */}
              <div className="flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]">
                {/* Heading */}
                <div className="flex flex-col justify-start text-xl font-bold text-white">
                  <h1>Creatives and Communication.</h1>
                  <h1>On Demand.</h1>
                </div>

                {/* //?Paragraph ( Relating to Enhancement precision targeting.. ) */}
                <div className="pt-4 text-sm leading-relaxed ">
                  <p>
                    The well researched Ad Creatives designed by our team
                    assures better CTR and makes the communication effective.
                    This helps capture the ideal consumers for the
                    product/service.
                  </p>
                </div>
                {/* //?Percentages.. */}
                <div className="flex flex-row justify-between items-center mt-6 px-4">
                  {/* First % box */}
                  <div className=" flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">64%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">Growth</p>
                  </div>

                  {/* //?Second % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">37%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">CTR</p>
                  </div>

                  {/* //?Third % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">32%</h1>
                    <p className="text-sm">Reduction in</p>
                    <p className="text-sm">CAC</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //* End of card 2 */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 3 :: Data Driven Optimization.At Ease. */}
            <div className="flex flex-col items-center justify-end text-[#BEBEBE] pb-4 mt-10">
              {/* //? Logo is Here. */}
              <img
                className="w-[10.75rem] h-[10.7rem]"
                src={DatDriOpr}
                alt="Data Driven Optimization.At Ease."
              />

              {/* //? Text */}
              <div className="flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]">
                {/* //? Heading */}
                <div className="flex flex-col justify-start text-xl font-bold text-white">
                  <h1>Data Driven Optimization.</h1>
                  <h1>At Ease.</h1>
                </div>

                {/* //? Paragraph ( Relating to Enhancement precision targeting.. ) */}
                <div className="pt-4 text-sm leading-relaxed ">
                  <p>
                    The team has eyes on each of the ad accounts very
                    consistently and accordingly required data-based
                    optimizations are done on a daily, fortnightly and weekly
                    basis. This fuels learning and ROAS skyrockets!
                  </p>
                </div>
                {/* //? Percentages.. */}
                <div className="flex flex-row justify-between items-center mt-6 px-4">
                  {/* //? First % box */}
                  <div className=" flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">64%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">Growth</p>
                  </div>

                  {/* //? Second % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">37%</h1>
                    <p className="text-sm">Increase in</p>
                    <p className="text-sm">CTR</p>
                  </div>

                  {/* //? Third % box */}
                  <div className="flex flex-col items-center justify-center font-normal">
                    <h1 className="text-2xl font-semibold text-white">32%</h1>
                    <p className="text-sm">Reduction in</p>
                    <p className="text-sm">CAC</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //? End of card 3 */}
          </div>

          {/* //! ........End of cards...... */}
        </div>
        {/* //! .......End of small screen dark part...... */}

        {/* //* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //! ###################################                  Large Screen only - for the Dark part                    ####################################### */}
        {/* //* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="hidden lg:block pb-6">
          <div className="flex flex-col" ref={cardRef}>
            {/* //! Cards Goes here... */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 1 :: Enhanced Precision Targeting At Scale. */}
            <div
              className="cards flex flex-row items-center justify-between text-[#BEBEBE] pb-4 mb-10 mr-[10rem] bg-[#080816] rounded-r-lg border-r-8 border-[#0049FA]  translate-x-[-1400px]"
              id="cardone"
            >
              {/* Logo is Here. */}
              <div className="flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]">
                <img
                  className="p-6 w-[15.625rem] h-[15.625]"
                  src={EnPreTar}
                  alt="Enhanced Precision Targeting At Scale"
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 pt-[2rem] pb-[2rem]">
                <div className="flex flex-col justify-start pl-2 py-16 pr-36">
                  {/* Heading */}
                  <div className="flex flex-col justify-start text-2xl font-semibold text-white">
                    <h1>Enhanced Precision Targeting.</h1>
                    <h1>At Scale.</h1>
                  </div>

                  {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                  <div className="pt-4 text-base leading-relaxed  ">
                    <p>
                      We experiment on varied Target Audience Segments based on
                      Researched Insights - which in turn clears the picture on
                      top performing Audience Segments and Market Insights. This
                      helps you achieve a higher Conversion Rate!
                    </p>
                  </div>
                  {/* Percentages.. */}
                  <div className="flex flex-row justify-between items-center mt-[2rem] px-4">
                    {/* First % box */}
                    <div className=" flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">64%</h1>
                      <p className="text-sm">Increase in</p>
                      <p className="text-sm">Growth</p>
                    </div>

                    {/* Second % box */}
                    <div className="flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">37%</h1>
                      <p className="text-sm">Increase in</p>
                      <p className="text-sm">CTR</p>
                    </div>

                    {/* Third % box */}
                    <div className="flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">32%</h1>
                      <p className="text-sm">Reduction in</p>
                      <p className="text-sm">CAC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //! End of card 1 */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 2 :: Creatives and Communication.On Demand. */}
            <div className="flex flex-row justify-end my-12">
              <div
                className="cards flex flex-row-reverse items-center justify-between text-[#BEBEBE] pb-4 mb-10 bg-[#080816] ml-[10rem] rounded-l-lg border-l-8 border-[#0049FA]  translate-x-[1400px]"
                id="cardtwo"
              >
                {/* Logo is Here. */}
                <div className="flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]">
                  <img
                    className="p-6 w-[19.3rem] h-[15.625rem]"
                    src={CreComDem}
                    alt="Creatives and Communication.On Demand."
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 pt-[2rem] pb-[2rem]">
                  <div className="flex flex-col justify-start pl-24 py-16 pr-16">
                    {/* Heading */}
                    <div className="flex flex-col justify-start text-2xl font-semibold text-white">
                      <h1>Creatives and Communication.</h1>
                      <h1>On Demand.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className="pt-4 text-base leading-relaxed  ">
                      <p>
                        The well researched Ad Creatives designed by our team
                        assures better CTR and makes the communication
                        effective. This helps capture the ideal consumers for
                        the product/service.
                      </p>
                    </div>
                    {/* Percentages.. */}
                    <div className="flex flex-row justify-between items-center mt-[2rem] px-4">
                      {/* First % box */}
                      <div className=" flex flex-col items-center justify-center font-normal">
                        <h1 className="text-2xl font-medium text-white">64%</h1>
                        <p className="text-sm">Increase in</p>
                        <p className="text-sm">Growth</p>
                      </div>

                      {/* Second % box */}
                      <div className="flex flex-col items-center justify-center font-normal">
                        <h1 className="text-2xl font-medium text-white">37%</h1>
                        <p className="text-sm">Increase in</p>
                        <p className="text-sm">CTR</p>
                      </div>

                      {/* Third % box */}
                      <div className="flex flex-col items-center justify-center font-normal">
                        <h1 className="text-2xl font-medium text-white">32%</h1>
                        <p className="text-sm">Reduction in</p>
                        <p className="text-sm">CAC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //! End of card 2 */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //! CARD 3 :: Data Driven Optimization.At Ease. */}
            <div
              className="flex flex-row items-center justify-between text-[#BEBEBE] pb-4 mb-10 bg-[#080816] mr-[10rem] rounded-r-lg border-r-8 border-[#0049FA]  translate-x-[-1400px]"
              id="cardthree"
            >
              {/* Logo is Here. */}
              <div className="flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]">
                <img
                  className="p-6 w-[15.625rem] h-[15.625]"
                  src={DatDriOpr}
                  alt="Data Driven Optimization.At Ease."
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 pt-[2rem] pb-[2rem]">
                <div className="flex flex-col justify-start pl-2 py-16 pr-36">
                  {/* Heading */}
                  <div className="flex flex-col justify-start text-2xl font-semibold text-white">
                    <h1>Data Driven Optimization.</h1>
                    <h1>At Ease.</h1>
                  </div>

                  {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                  <div className="pt-4 text-base leading-relaxed  ">
                    <p>
                      The team has eyes on each of the ad accounts very
                      consistently and accordingly required data-based
                      optimizations are done on a daily, fortnightly and weekly
                      basis. This fuels learning and ROAS skyrockets!
                    </p>
                  </div>
                  {/* Percentages.. */}
                  <div className="flex flex-row justify-between items-center mt-[2rem] px-4">
                    {/* First % box */}
                    <div className=" flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">64%</h1>
                      <p className="text-sm">Increase in</p>
                      <p className="text-sm">Growth</p>
                    </div>

                    {/* Second % box */}
                    <div className="flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">37%</h1>
                      <p className="text-sm">Increase in</p>
                      <p className="text-sm">CTR</p>
                    </div>

                    {/* Third % box */}
                    <div className="flex flex-col items-center justify-center font-normal">
                      <h1 className="text-2xl font-medium text-white">32%</h1>
                      <p className="text-sm">Reduction in</p>
                      <p className="text-sm">CAC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //! End of card 3 */}
          </div>
        </div>

        {/* //* =========================================  Below the Dark Cards  ==================================   */}

        <PlatformAndTools></PlatformAndTools>
      </main>
    </>
  );
};

export default WhatWeDo;
