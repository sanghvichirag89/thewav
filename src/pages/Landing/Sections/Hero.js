import React, { useRef, useLayoutEffect } from "react";
import "./Hero.css";

import Navbar from "../../../reusable/Navbar/Navbar.js";
import HeroButton from "../../../reusable/Buttons/HeroButton.js";
import TestimonialSection from "./MicroComponents/TestimonialSection";
import TestimonialSectionSmall from "./MicroComponents/TestimonialSectionSmall";

// Hero image...
import ArrowGroup from "../images/Hero/ArrowGroup.svg";

// Logos are imported from the Logos.js inside the MicroComponents section...
import { lightLogos, darkLogos } from "./MicroComponents/Logos.js";

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = (props) => {
  // //?[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
  // ! ..........................................................................................................Gsap (main) animation >>>>>
  // //?[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]

  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const mainReference = mainRef.current;

    // Initial loading animation.....
    let LoadingTimLine = gsap.timeline();
    LoadingTimLine.fromTo(
      mainReference.querySelector("#theBigArrow"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "Power4.out" }
    ).play();

    if (window.innerWidth >= 640) {
      // ! Animaiton for large screens is here..::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      let tl = gsap.timeline();
      tl.to(mainReference.querySelector("#AnimationArrow"), {
        y: -10,
        opacity: 0.989,
        duration: 0.2,
      })
        .to(mainReference.querySelector("#AnimationArrow"), {
          scaleX: 10,
          scaleY: 11,
          zIndex: 10,
          duration: 2,
          ease: "linear",
        })
        .to(
          mainReference.querySelector("#AnimationArrow"),
          {
            zIndex: 10,
            css: { opacity: 0, transform: "scaleX(15.5)" },
            duration: 2,
            ease: "linear",
          },
          "-=1"
        )
        .to(
          mainReference.querySelector("BigWave"),
          { y: -500, opacity: 0 },
          "-=1"
        )
        .to("#Myself", { backgroundColor: "white", duration: 1.5 }, "-=3")
        .to(
          mainReference.querySelector("#LogosBefore"),
          { css: { opacity: 0 }, duration: 0, ease: "Power2.out" },
          "-=3"
        )
        .to(mainReference.querySelector("#FinalLogos"), { zIndex: 70 }, "-=3")
        .to(
          mainReference.querySelector("#LightSection"),
          { css: { zIndex: 60, opacity: 1 } },
          "-=3"
        )
        .to(
          mainReference.querySelector(".viewPort"),
          { y: -700, opacity: 0, duration: 2 },
          "-=2.5"
        );
      // .fromTo(mainReference.querySelector("#UncademyLogo"),{opacity:0},{opacity:1, duration:1},'-=1.9').pause()

      let tl2 = gsap.timeline();
      tl2
        .to(mainReference.querySelector("#AnimationArrow"), {
          duration: 3,
          delay: 1,
          ease: "Power4.out",
        })
        .pause();

      let tl3 = gsap.timeline();
      tl3
        .to(
          mainReference.querySelector("#AnimationArrow"),
          { duration: 0.5, delay: 0.2, ease: "Power4.out" },
          "-=2"
        )
        .pause();

      ScrollTrigger.create({
        trigger: mainReference.querySelector("#AnimationArrow"),
        animation: tl.play(),
        start: "center+=30 center+=120",
        end: "center+=300 center+=-60",
        pin: false,
        scrub: true,
        markers: false,
        snap: false,
        onEnter: () => tl2.play(),
        onEnterBack: () => tl3.play(),
        onComplete: () => console.log("Animaiton Complete.."),
      });
    }

    // ! Animation for the small screen devices is here::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    else if (window.innerWidth < 640) {
      let tl = gsap.timeline();
      tl.fromTo(
        mainReference.querySelector("#AnimationArrow"),
        { y: 14 },
        { y: -20, opacity: 0.989, duration: 0.2 }
      )
        .to(mainReference.querySelector("#AnimationArrow"), {
          scaleX: 10,
          scaleY: 11,
          zIndex: 10,
          duration: 2,
          ease: "linear",
        })
        .to(
          mainReference.querySelector("#AnimationArrow"),
          {
            zIndex: 10,
            css: { opacity: 0, transform: "scaleX(15.5)" },
            duration: 2,
            ease: "linear",
          },
          "-=1"
        )
        .to(
          mainReference.querySelector("BigWave"),
          { y: -500, opacity: 0 },
          "-=1"
        )
        .to("#Myself", { backgroundColor: "white", duration: 1.5 }, "-=3")
        .to(
          mainReference.querySelector("#LogosBefore"),
          { css: { opacity: 0 }, duration: 0, ease: "Power2.out" },
          "-=3"
        )
        .to(mainReference.querySelector("#FinalLogos"), { zIndex: 70 }, "-=3")
        .to(
          mainReference.querySelector("#LightSection"),
          { css: { zIndex: 60, opacity: 1 } },
          "-=3"
        )
        .to(
          mainReference.querySelector(".viewPort"),
          { y: -700, opacity: 0, duration: 2 },
          "-=2.5"
        );
      // .fromTo(mainReference.querySelector("#UncademyLogo"),{opacity:0},{opacity:1, duration:1},'+s=1').pause()

      let tl2 = gsap.timeline();
      tl2
        .to(mainReference.querySelector("#AnimationArrow"), {
          duration: 3,
          delay: 1,
          ease: "Power4.out",
        })
        .pause();

      let tl3 = gsap.timeline();
      tl3
        .to(
          mainReference.querySelector("#AnimationArrow"),
          { duration: 0.5, delay: 0.2, ease: "Power4.out" },
          "-=2"
        )
        .pause();

      ScrollTrigger.create({
        trigger: mainReference.querySelector("#AnimationArrow"),
        animation: tl.play(),
        start: "center+=30 center+=120",
        end: "center+=300 center+=-60",
        pin: false,
        scrub: true,
        markers: false,
        snap: true,
        onEnter: () => tl2.play(),
        onEnterBack: () => tl3.play(),
        onComplete: () => console.log("Animaiton Complete.."),
      });
    } else {
      console.log("This is not supposed to be fired..");
    }
  }, []);

  const handleButton = () => {
    props.onClick(true);
  };

  return (
    <>
      {/* //? ############################################################################################################################################## */}
      {/* //? #############################################                                                  ############################################### */}
      {/* //?##############################################  This is the hero section of the Landing Page ...###############################################  */}
      {/* //? #############################################                                                  ############################################### */}
      {/* //? ############################################################################################################################################## */}

      {/* //! ////////////////////////////////////////////////      This is the dark section        ///////////////////////////////////////////////////// */}
      <main
        className="realtive box-border bg-[#080816] overflow-hidden font-rota"
        ref={mainRef}
        id="Myself"
      >
        <div
          className="bg-[#080816] w-[100vw] h-[100vh] z-10 relative viewPort"
          id="ViewPort"
        >
          <div className="LandingHeroGradient"></div>

          {/* Navbar */}
          {/* //!############################################################  The Navbar component may sometimes show some problems with ScrollTrigger.... */}
          <Navbar />
          {/* Navbar ends */}

          {/* //!......................................................................................................................Main Hero content.. */}
          <div className="pt-20 flex flex-col justify-center items-center">
            <div className="px-12 mt-5">
              <h1 className="text-4xl md:text-[3.25rem] font-bold lg:font-extrabold text-white mb-4 text-center pb-1">
                We help startups become brands
              </h1>
            </div>

            <div className="px-6 md:px-48">
              <p className="text-sm md:text-sm text-gray-100 leading-tight md:leading-normal text-center lg:px-44 xl:px-72 font-400 md:font-light lg:text-[1rem]">
                The Growth Squad behind some of the Most Successful Startups. If
                you want the best growth, you’re at the right place.
              </p>
            </div>

            {/* //!.............................................................................................................Button for small screen only */}
            <div className="lg:hidden mt-10">
              <a
                className="flex items-center justify-center box-border IamTheButton"
                onClick={handleButton}
              >
                <HeroButton name={"Get Free Audit"} />
              </a>
            </div>

            {/* //?######################################################################################################################################################### */}
            {/*  //!____________________________________________________                                     _______________________________________________________________ */}
            {/*  //!____________________________________________________                 Arrows              _______________________________________________________________ */}
            {/*  //!____________________________________________________                                     _______________________________________________________________ */}
            {/* //?######################################################################################################################################################### */}
            {/* ...........................................................................................................................................................  */}
            <div className="relative box-border">
              {/* // //* ######################################################################################### */}
              {/* //! Background arrows are here.... */}
              <img
                src={ArrowGroup}
                alt="The group of arrows is here...."
                className="mt-4 pointer-events-none hidden md:block"
                height="234"
                width="240"
                id="theBigArrow"
              />
              <img
                src={ArrowGroup}
                alt="The group of arrows is here...."
                className="mt-4 pointer-events-none md:hidden"
                height="200"
                width="200"
                id="theBigArrow"
              />

              {/* //*[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ] */}
              {/* //! Learn more button...Shows only on large screen... */}
              {/* //*[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ] */}

              <div className="hidden lg:block absolute top-[32.3vh] z-[30] left-[50%] translate-x-[-50%] cursor-pointer">
                <a
                  className="flex items-center justify-center box-border IamTheButton"
                  onClick={handleButton}
                >
                  <HeroButton name={"Get Free Audit"} />
                </a>
              </div>
            </div>

            {/* //*[+++++++++++++++++++++++++++++++++++++++  This is the white arrow that comes along with the animation  ++++++++++++++++++++++++++++++++++++ ] */}
            {/* //! Presently using this arrow for animation.. */}
            <svg
              id="AnimationArrow"
              className="z-[10] absolute bottom-[1rem] lg:bottom-[2rem] opacity-0 overflow-auto"
              width="270"
              height="440"
              viewBox="0 0 299 622"
              fill="none"
            >
              <path
                d="M152.32 1.82141C150.597 -0.187804 147.488 -0.187799 145.764 1.82141L1.11715 170.441C-1.28584 173.242 0.704514 177.572 4.39522 177.572L73.6712 177.572C76.0565 177.572 77.9902 179.505 77.9902 181.89L77.9902 617.048C77.9902 619.433 79.9238 621.367 82.3091 621.367L215.775 621.367C218.16 621.367 220.094 619.433 220.094 617.048L220.094 181.89C220.094 179.505 222.028 177.571 224.413 177.571L293.689 177.571C297.38 177.571 299.37 173.242 296.967 170.441L152.32 1.82141Z"
                fill="white"
              />
            </svg>
            {/* //*[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ] */}
          </div>

          {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
          {/* //!########################################################################  Wave  #################################################################  */}
          {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

          <div className="w-[100vw] absolute bottom-0 z-5" id="LogosBefore">
            {/* //? ....................................................................................................The wave passing from the bottom is here.. */}
            <div className="w-[105vw] relative">
              {/* //! ...........................................................................................................................Large screen Wave */}
              <svg
                id="BigWave"
                className="-mb-32 lg:-mb-28 hidden md:block"
                width="1920"
                height="340"
                viewBox="0 0 1920 283"
                fill="none"
              >
                <path
                  d="M1882.5 53.5C1949.7 53.5 1961 37 1961 37V291H-41V39.5C93.5 39.5 127.5 3.5 194.5 3.5C261.5 3.5 322 39.5 432.5 39.5C543 39.5 575.5 1 663.5 1C731 1 788.5 39.5 900.5 39.5C1044 39.5 1052 4.5 1152.5 4.5C1229 4.5 1329 53.5 1435.5 53.5C1542 53.5 1582.5 11.5 1655 11.5C1727.5 11.5 1798.5 53.5 1882.5 53.5Z"
                  fill="#080816"
                />
                <path
                  d="M1961 37H1961.89V34.1225L1960.27 36.4966L1961 37ZM-41 39.5V38.6091H-41.8909V39.5H-41ZM-41 291H-41.8909V291.891H-41V291ZM1961 291V291.891H1961.89V291H1961ZM1961 37C1960.27 36.4966 1960.27 36.4957 1960.27 36.4948C1960.27 36.4946 1960.27 36.4938 1960.27 36.4934C1960.27 36.4926 1960.27 36.492 1960.27 36.4917C1960.27 36.4911 1960.27 36.4914 1960.27 36.4928C1960.27 36.4955 1960.26 36.5021 1960.25 36.5126C1960.24 36.5335 1960.21 36.5697 1960.17 36.6202C1960.09 36.7211 1959.95 36.8794 1959.75 37.0868C1959.34 37.5016 1958.67 38.1142 1957.66 38.8597C1955.62 40.3508 1952.19 42.3761 1946.64 44.4138C1935.55 48.4912 1916.03 52.6091 1882.5 52.6091V54.3909C1916.17 54.3909 1935.9 50.2588 1947.26 46.0862C1952.94 43.9989 1956.53 41.8992 1958.71 40.2965C1959.8 39.4952 1960.55 38.8187 1961.02 38.3312C1961.26 38.0874 1961.43 37.8912 1961.55 37.7504C1961.6 37.6801 1961.65 37.6236 1961.68 37.5821C1961.69 37.5613 1961.71 37.5443 1961.72 37.5312C1961.72 37.5246 1961.72 37.519 1961.73 37.5143C1961.73 37.512 1961.73 37.5099 1961.73 37.5081C1961.73 37.5072 1961.73 37.506 1961.73 37.5056C1961.73 37.5044 1961.73 37.5034 1961 37ZM1882.5 52.6091C1840.64 52.6091 1802 42.1446 1764.68 31.6424C1727.4 21.1519 1691.4 10.6091 1655 10.6091V12.3909C1691.1 12.3909 1726.85 22.8481 1764.2 33.3576C1801.5 43.8554 1840.36 54.3909 1882.5 54.3909V52.6091ZM1655 10.6091C1618.58 10.6091 1590.18 21.1665 1557.73 31.6523C1525.26 42.1399 1488.62 52.6091 1435.5 52.6091V54.3909C1488.88 54.3909 1525.74 43.8601 1558.27 33.3477C1590.82 22.8335 1618.92 12.3909 1655 12.3909V10.6091ZM1435.5 52.6091C1382.37 52.6091 1330.85 40.3874 1282.97 28.1369C1235.15 15.9009 1190.89 3.60912 1152.5 3.60912V5.39088C1190.61 5.39088 1234.6 17.5991 1282.53 29.8631C1330.4 42.1126 1382.13 54.3909 1435.5 54.3909V52.6091ZM1152.5 3.60912C1102.12 3.60912 1074.89 12.3914 1042.39 21.1398C1009.95 29.8738 972.157 38.6091 900.5 38.6091V40.3909C972.343 40.3909 1010.3 31.6262 1042.86 22.8602C1075.36 14.1086 1102.38 5.39088 1152.5 5.39088V3.60912ZM900.5 38.6091C844.611 38.6091 802.32 29.0053 765.538 19.3881C728.784 9.7785 697.394 0.109124 663.5 0.109124V1.89088C697.106 1.89088 728.216 11.4715 765.087 21.1119C801.93 30.7447 844.389 40.3909 900.5 40.3909V38.6091ZM663.5 0.109124C619.355 0.109124 589.114 9.77314 556.188 19.3949C523.284 29.0101 487.627 38.6091 432.5 38.6091V40.3909C487.873 40.3909 523.716 30.7399 556.687 21.1051C589.636 11.4769 619.645 1.89088 663.5 1.89088V0.109124ZM432.5 38.6091C377.354 38.6091 334.683 29.6277 297.396 20.634C260.139 11.6473 228.134 2.60912 194.5 2.60912V4.39088C227.866 4.39088 259.611 13.3527 296.979 22.366C334.317 31.3723 377.146 40.3909 432.5 40.3909V38.6091ZM194.5 2.60912C160.85 2.60912 135.446 11.6592 101.833 20.6393C68.2027 29.6239 26.1562 38.6091 -41 38.6091V40.3909C26.3438 40.3909 68.5473 31.3761 102.292 22.3607C136.054 13.3408 161.15 4.39088 194.5 4.39088V2.60912ZM-41.8909 39.5V291H-40.1091V39.5H-41.8909ZM-41 291.891H1961V290.109H-41V291.891ZM1961.89 291V37H1960.11V291H1961.89Z"
                  fill="#000037"
                />
              </svg>
              {/* //! ............................................................................................................................Small Screen Wave */}
              <svg
                id="SmallWave"
                className="md:hidden -mb-[6rem] w-[100vw]"
                width="1000"
                height="390"
                viewBox="0 0 428 215"
                fill="none"
              >
                <path
                  d="M289 1C241.651 1 204.5 52.9999 127.5 16.5C50.5 -19.9999 44.5 37.4996 -15 11.4997V226.5H443V21.5C391.168 46.7622 340 1 289 1Z"
                  fill="#080816"
                  stroke="#000037"
                />
              </svg>

              {/* //! ...............................................................................................Logos goes here for large screen and medium.... */}
              <div className="hidden lg:block absolute top-[5rem] w-[100vw]">
                {/* //?Two lines of logos for large screen is divided into two rows............................................. */}
                <div className="flex flex-col my-2 md:mx-[6rem] md:pr-4 xl:mx-[11rem] lg:mx-[8rem] lg:pr-4">
                  {/* //?Six logos will come in here for large screen........................................................... */}

                  {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
                  {/* //!-----------------------                 Large screen Logos                         -------------------- */}
                  {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

                  <div className="flex flex-row justify-between my-[1rem] initialLogos">
                    <img
                      src={lightLogos[0]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                    <img
                      src={lightLogos[1]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                    <img
                      src={lightLogos[2]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                    <img
                      src={lightLogos[3]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                    <img
                      src={lightLogos[4]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                    <img
                      src={lightLogos[5]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                    />
                  </div>

                  <div className="flex flex-row justify-between my-[0.75rem] initialLogos">
                    <img
                      src={lightLogos[6]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                    <img
                      src={lightLogos[7]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                    <img
                      src={lightLogos[12]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                    <img
                      src={lightLogos[9]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                    <img
                      src={lightLogos[10]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                    <img
                      src={lightLogos[11]}
                      alt="image"
                      className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem] "
                    />
                  </div>
                </div>
              </div>

              {/* //* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
              {/* //!Logos goes here for small screen.. */}
              <div className="lg:hidden absolute top-28 w-[100vw] z-10">
                {/* //?  Three lines of logos for small screen is divided into three rows....................................... */}
                <div className="flex flex-col my-1 mx-10 mb-1 md:mx-16">
                  {/* //?  Four logos will come in here for small screen........................................................ */}

                  {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
                  {/* //!-----------------------  Small screen Logos -------------------- */}
                  {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
                  <div className="flex flex-row justify-between mb-4 mt-6">
                    <img
                      src={lightLogos[0]}
                      alt="image16.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[1]}
                      alt="image17.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[2]}
                      alt="image18.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[3]}
                      alt="image19.png"
                      className="h-[1.6rem]"
                    />
                  </div>

                  <div className="flex flex-row justify-between my-3">
                    <img
                      src={lightLogos[4]}
                      alt="image17.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[5]}
                      alt="image16.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[6]}
                      alt="image19.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[7]}
                      alt="image18.png"
                      className="h-[1.6rem]"
                    />
                  </div>

                  <div className="flex flex-row justify-between my-3">
                    <img
                      src={lightLogos[8]}
                      alt="image18.png"
                      className="h-[1.6rem] -mt-0.5"
                    />
                    <img
                      src={lightLogos[12]}
                      alt="image19.png"
                      className="h-[1.6rem]"
                    />
                    <img
                      src={lightLogos[10]}
                      alt="image17.png"
                      className="h-[1.6rem] mt-0.5"
                    />
                    <img
                      src={lightLogos[11]}
                      alt="image16.png"
                      className="h-[1.6rem] mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
        {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
        {/* //!###################################              This will be the light hero section                 ################################## */}
        {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
        {/* //?[+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

        <div className="z-40">
          {/* //* ####################################################################################################################################  */}
          {/* //* #################################################                         ##########################################################  */}
          {/* //* #################################################                         ###########################################################  */}
          {/* //! ..................................................   For Large screen    ........................................................... */}
          {/* //* #################################################                         ###########################################################  */}
          {/* //* #################################################                         ##########################################################  */}
          {/* //* ####################################################################################################################################  */}

          <div className="hidden lg:block flex-col" id="LightSection">
            {/* //*............................................................................................................The logos section.. */}
            <div
              className="flex flex-col -mt-[35vh] lg:mx-[8rem] md:mx-[6rem] xl:mx-[11rem]"
              id="FinalLogos"
            >
              <div className="flex flex-row justify-between my-4">
                {" "}
                {/* //? ............................................................First row */}
                <img
                  src={darkLogos[0]}
                  alt="image16.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[1]}
                  alt="image17.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[2]}
                  alt="image18.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[3]}
                  alt="image19.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[4]}
                  alt="image16.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[5]}
                  alt="image17.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
              </div>

              <div className="flex flex-row justify-between my-4">
                {" "}
                {/*//? .......................................................... Second row */}
                <img
                  src={darkLogos[6]}
                  alt="image17.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[7]}
                  alt="image16.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[13]}
                  alt="image19.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[9]}
                  alt="image18.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[10]}
                  alt="image17.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[11]}
                  alt="image16.png"
                  className="lg:h-[2rem] xl:h-[2.3rem] md:h-[1.85rem]"
                />
              </div>
            </div>

            {/* //! ================================================================================================================================================= */}
            {/* //! =============================================                                      =============================================================== */}
            {/* //* .............................................     Testimonial Section is here     ............................................................. */}
            {/* //! =============================================                                      =============================================================== */}
            {/* //! ================================================================================================================================================= */}

            <div className="flex flex-row mt-20 lg:pb-28 lg:ml-[6rem] lg:mr-[7rem] xl:ml-[9rem] xl:mr-[10rem]">
              {/* //?........................................................................................................... */}

              <TestimonialSection />

              {/* //! ....................................................Testimonials data comes here......................................................... */}
            </div>
          </div>

          {/* // * ########################################################################################################################################## */}
          {/* // * ########################################################################################################################################### */}
          {/* // * ########################################################################################################################################## */}
          {/* // !-----------------------------------------------   For small screen  -----------------------------------------------------  */}
          {/* // * ###########################################################################################################3############################### */}
          {/* // * ########################################################################################################################################### */}
          {/* // * ########################################################################################################################################### */}

          <div className="lg:hidden flex-col mt-[-20rem]">
            {/* //! ...................................................................................................................................Navbar */}
            {/* <Navbar/>  *? // TODO:Have to create a light backgroud navbar for this part */}
            {/* Navbar ends */}

            {/* //?.........................................................................................................................The logos section.. */}
            <div className="flex flex-col gap-12 mt-14 mx-10 md:mx-20 pt-10 md:hidden">
              <div className="flex flex-row justify-between">
                {" "}
                {/* //!..........................................................................First row */}
                <img
                  src={darkLogos[0]}
                  alt="image16.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[1]}
                  alt="image17.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[2]}
                  alt="image18.png"
                  className="h-[1.9rem] "
                />
              </div>

              <div className="flex flex-row justify-between">
                {" "}
                {/* //!.......................................................................Second row */}
                <img
                  src={darkLogos[3]}
                  alt="image17.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[4]}
                  alt="image16.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[5]}
                  alt="image19.png"
                  className="h-[1.9rem] "
                />
              </div>

              <div className="flex flex-row justify-between">
                {" "}
                {/* //!.......................................................................Third row */}
                <img
                  src={darkLogos[6]}
                  alt="image16.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[7]}
                  alt="image19.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[13]}
                  alt="image17.png"
                  className="h-[1.9rem] "
                />
              </div>

              <div className="flex flex-row justify-between">
                {" "}
                {/* //!.......................................................................Fourth row */}
                <img
                  src={darkLogos[9]}
                  alt="image18.png"
                  className="h-[1.9rem] "
                />
                <img
                  src={darkLogos[10]}
                  alt="image17.png"
                  className="h-[1.9rem] mt-1"
                />
                <img
                  src={darkLogos[11]}
                  alt="image16.png"
                  className="h-[1.9rem] mt-1"
                />
              </div>
            </div>

            {/* //?[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
            {/* //!__________________________________________________ For medium screen only(logos).. _____________________________________________________ */}
            {/* //?[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

            <div className="hidden md:block lg:hidden flex-col mt-[-2rem] lg:mx-44 md:mx-[6rem]">
              <div className="flex flex-row justify-between my-4">
                {" "}
                {/* //!First row */}
                <img
                  src={darkLogos[0]}
                  alt="image16.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[1]}
                  alt="image17.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[2]}
                  alt="image18.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[3]}
                  alt="image19.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[4]}
                  alt="image16.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[5]}
                  alt="image17.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
              </div>

              <div className="flex flex-row justify-between my-4">
                {" "}
                {/* //!Second row */}
                <img
                  src={darkLogos[6]}
                  alt="image17.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[7]}
                  alt="image16.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[8]}
                  alt="image19.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[9]}
                  alt="image18.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[10]}
                  alt="image17.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
                <img
                  src={darkLogos[11]}
                  alt="image16.png"
                  className="lg:h-[2.3rem] md:h-[1.85rem]"
                />
              </div>
            </div>

            {/* //*=========================================================================================================================================== */}
            {/* //! ....................................................................................................................................... */}
            {/* //!...................................Unacademy + Product Testimonials section..(Small Screen)............................................. */}
            {/* //! ....................................................................................................................................... */}
            <div className="flex flex-col mt-28 lg:mt-20 mb-14 ml-[2.6rem] mr-[2rem] md:ml-[5rem] md:mr-[5rem]">
              {/* //? _____________________________________________________________________________________________________Unacademy Area.(Small Screen). */}
              <h3 className="font-bold text-3xl pb-[3rem]">
                Our Success Stories
              </h3>

              {/* //* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
              {/* //!  ..........................................................                                ...................................................*/}
              {/* //!  ..........................................................  Customer Review(Small Screen) ...................................................*/}
              {/* //!  ..........................................................                                 ...................................................*/}
              {/* //* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

              <TestimonialSectionSmall />

              {/* //?...............................................End of customer review(Small Screen).................................................................. */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
