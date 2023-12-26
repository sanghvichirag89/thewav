import React, { useState } from "react";
import { useRef } from "react";
import LearnMoreButton from "./MicroComponents/LearnMoreButton.js";
import "./BlogsAndArticles.css";

import AwBlack from "../images/blogs/awblack.png";
import OlBlack from "../images/blogs/olblack.png";
import ZbBlack from "../images/blogs/zbblack.png";

import AwBlue from "../images/blogs/awblue.png";
import OlBlue from "../images/blogs/olblue.png";
import ZbBlue from "../images/blogs/zbblue.png";

import CardOne from "../images/blogs/cardone.jpg";
import CardTwo from "../images/blogs/cardtwo.jpg";
import CardThree from "../images/blogs/cardthree.jpg";

import { motion, AnimatePresence } from "framer-motion";

// Gsap animations ::
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BlogsAndArticles = () => {
  const cardData = [
    {
      id: 1,
      img: CardOne,
      miniHeader: "Performance",
      Header: "Coming Soon",
      para: "",
      buttonRedirect: "#",
    },
    {
      id: 2,
      img: CardTwo,
      miniHeader: "Web Design",
      Header: "Coming Soon",
      para: "",
      buttonRedirect: "#",
    },
    {
      id: 3,
      img: CardThree,
      miniHeader: "Web Design",
      Header: "Coming Soon",
      para: " ",
      buttonRedirect: "#",
    },
  ];

  const data = [
    {
      id: "0",
      val: "img1",
      header: "Our Website Design for Avalance got featured as Site of the Day",
      para: "Honorable Mention - Mar 4, 2021",
      link: "https://www.awwwards.com/avalanceinc/",
    },
    {
      id: "1",
      val: "img2",
      header: "TheWav Turned 2: Helping Startups To Turn Into Trusted Brands",
      para: "Outlook India, November 2022",
      link: "https://www.outlookindia.com/website/story/outlook-spotlight-thewav-turned-2-helping-startups-to-turn-into-trusted-brands/400289 ",
    },
    {
      id: "2",
      val: "img3",
      header:
        "Siddhant Keshari helps Startups in India grow to newer heights through his venture TheWav",
      para: "ZeeBusiness India, March 2022",
      link: "https://www.zeebiz.com/companies/news-siddhant-keshari-helps-startups-in-india-grow-to-newer-heights-through-his-venture-thewav-180407",
    },
  ];

  // *********************  Animation of the blog card..
  // To be done if the startup permits..

  // [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
  // Navigator/Slider ...
  // This is for large screen...

  const navigatorRef = useRef(null);

  const funcCycle = (number) => {
    for (let i = 0; i < 3; i++) {
      if (i === number) {
        navigatorRef.current.children[i].classList.add("active");
        // TextSliderRef.current.children[i].classList.add("active");
      } else {
        navigatorRef.current.children[i].classList.remove("active");
        // TextSliderRef.current.children[i].classList.remove("active");
      }
    }
  };

  const NewDirection = (current, id) => {
    let number = current.split("");
    if (number[3] > id) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  };

  const [currentItem, setCurrentItem] = useState("img1");
  const [direction, setDirection] = useState(null);

  const navigatorClick = (e) => {
    if (e.target.id) {
      if (e.target.id === "img1") {
        funcCycle(0);
        NewDirection(currentItem, 1);
        setCurrentItem("img1");
      } else if (e.target.id === "img2") {
        funcCycle(1);
        NewDirection(currentItem, 2);
        setCurrentItem("img2");
      } else if (e.target.id === "img3") {
        funcCycle(2);
        NewDirection(currentItem, 3);
        setCurrentItem("img3");
      }
    }
  };

  // [=====================================================================================================================================]
  // ******************** Animation of the sliding text..[Framer Motion is here..]
  const desktopVariants = {
    initial: (direction) => {
      return {
        x:
          window.innerWidth > 480
            ? direction > 0
              ? 2000
              : -2000
            : direction > 0
            ? -1000
            : 1000,
      };
    },
    animate: {
      x: 0,
    },
    exit: (direction) => {
      return {
        x:
          window.innerWidth > 480
            ? direction < 0
              ? 2000
              : -2000
            : direction < 0
            ? -1000
            : 1000,
      };
    },
  };

  // [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
  // Navigator/Slider ....
  // This is for Small screen...

  //! Swipe-event-listener
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 30;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      // console.log('swipe', isLeftSwipe ? 'left' : 'right')
      if (isLeftSwipe) {
        if (currentItem === "img1") {
          funcSsCycle(1);
          NewDirection(currentItem, 2);
          setCurrentItem("img2");
        } else if (currentItem === "img2") {
          funcSsCycle(2);
          NewDirection(currentItem, 3);
          setCurrentItem("img3");
        }
      } else if (isRightSwipe) {
        if (currentItem === "img3") {
          funcSsCycle(1);
          NewDirection(currentItem, 2);
          setCurrentItem("img2");
        } else if (currentItem === "img2") {
          funcSsCycle(0);
          NewDirection(currentItem, 1);
          setCurrentItem("img1");
        }
      }
      // add your conditional logic here
    }
  };

  const navigatorSsRef = useRef(null);
  const funcSsCycle = (number) => {
    for (let i = 0; i < 3; i++) {
      if (i === number) {
        navigatorSsRef.current.children[i].classList.add("active");
      } else {
        navigatorSsRef.current.children[i].classList.remove("active");
      }
    }
  };

  const navigatorSsClick = (e) => {
    if (e.target.id) {
      if (e.target.id === "img1") {
        funcSsCycle(0);
        NewDirection(currentItem, 1);
        setCurrentItem("img1");
      } else if (e.target.id === "img2") {
        funcSsCycle(1);
        NewDirection(currentItem, 2);
        setCurrentItem("img2");
      } else if (e.target.id === "img3") {
        funcSsCycle(2);
        NewDirection(currentItem, 3);
        setCurrentItem("img3");
      }
    }
  };

  return (
    <>
      <main
        style={{ overflowX: "hidden" }}
        className="w-[100vw] relative z-[40] bg-white pt-10 lg:pt-14"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* //? #################################################################################################################### */}
        {/* //? ########################################                  ######################################################### */}
        {/* //!......................................... Thewav Turned 2  ...........................................................*/}
        {/* //? ########################################                  ######################################################### */}
        {/* //? #################################################################################################################### */}

        <div className="text-center md:pt-4 pt-10 relative">
          <AnimatePresence custom={direction} mode={"popLayout"}>
            {data.map((item) => {
              if (item.val === currentItem) {
                return (
                  <motion.div
                    className="box-border"
                    key={item.id}
                    variants={desktopVariants}
                    custom={direction}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 50 },
                      opacity: { duration: 0.8 },
                    }}
                  >
                    <h2
                      className="text-[1.4rem] font-bold px-6 lg:text-2xl text-[#080816]"
                      id="headerEase"
                    >
                      {item.header}
                    </h2>
                    <p
                      className="text-[.9rem] lg:text-base text-[#5D5D5D] pt-2 paraEase"
                      id="paraEase"
                    >
                      {item.para}
                    </p>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>

        {/*  //////////////////////////////////////////////////////////////////////////////////////////////////////////  */}

        {/* //?######################################################################################################## */}
        {/* // !YOURSTORY logo for medium and large screens  */}
        {/* //?######################################################################################################## */}

        {/* //!   The slider is here */}
        <div className="LBAAnavigtion_area hidden md:block pt-14 pb-10 selection:bg-white selection:opacity-0">
          <div className="LBAAnavigator">
            <ul
              className="LBAAnavigation_list px-[1rem] lg:px-[10%] md:px-[8.5%]"
              ref={navigatorRef}
            >
              <li
                className="LBAAlist_item first"
                onMouseEnter={(e) => {
                  navigatorClick(e);
                }}
                onTouchStart={(e) => {
                  navigatorClick(e);
                }}
                id="0"
              >
                {currentItem === "img1" ? (
                  <a href={data[0].link} target="__blank">
                    <img
                      className="w-[90px] ml-2 md:ml-0 lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[9rem]"
                      src={AwBlue}
                      id="img1"
                      alt="navigator image"
                    />
                  </a>
                ) : (
                  <img
                    className="w-[90px] ml-2 md:ml-0  lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[9rem]"
                    src={AwBlack}
                    id="img1"
                    alt="navigator image"
                  />
                )}
              </li>
              <li
                className="LBAAlist_item"
                onMouseEnter={(e) => {
                  navigatorClick(e);
                }}
                onTouchStart={(e) => {
                  navigatorClick(e);
                }}
                id="1"
              >
                {currentItem === "img2" ? (
                  <a href={data[1].link} target="__blank">
                    <img
                      className="w-[90px] lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]"
                      src={OlBlue}
                      id="img2"
                      alt="navigator image"
                    />
                  </a>
                ) : (
                  <img
                    className="w-[90px] lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]"
                    src={OlBlack}
                    id="img2"
                    alt="navigator image"
                  />
                )}
              </li>
              <li
                className="LBAAlist_item"
                onMouseEnter={(e) => {
                  navigatorClick(e);
                }}
                onTouchStart={(e) => {
                  navigatorClick(e);
                }}
                id="2"
              >
                {currentItem === "img3" ? (
                  <a href={data[2].link} target="__blank">
                    <img
                      className="w-[90px] h-[36px]  lg:h-[3.4rem] md:h-[2.7rem] md:w-[6.8rem] md:mr-[3px] lg:w-[8.3rem] lg:pr-[1px]"
                      src={ZbBlue}
                      id="img3"
                      alt="navigator image"
                    />
                  </a>
                ) : (
                  <img
                    className="w-[90px] h-[36px] lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]"
                    src={ZbBlack}
                    id="img3"
                    alt="navigator image"
                  />
                )}
              </li>

              <div className="LBAAnavigator_slider"></div>

              {/* <div className="LBAAnavigator_slider"></div> */}
            </ul>
          </div>
        </div>

        {/* ####################################################################### */}
        {/* 
    // ! YOURSTORY logo for xs and small screens 
    */}
        {/* The slider is here */}
        <div className="LBAAnavigation_area_ss md:hidden">
          <div className="LBAAnavigator_ss md:hidden">
            <div className="LBAAnavigator_content_ss md:hidden">
              <ul className="LBAAnavigation_list_ss" ref={navigatorSsRef}>
                <li
                  className="LBAAlist_item_ss first pl-[24%]"
                  onClick={(e) => {
                    console.log(1);
                  }}
                  id="0"
                >
                  {currentItem === "img1" ? (
                    <a href={data[0].link} target="__blank">
                      <img
                        className="h-[2.5rem] w-[7rem]"
                        src={AwBlue}
                        id="img1"
                        alt="navigator image"
                      />
                    </a>
                  ) : (
                    <img
                      className="h-[2.5rem] w-[7rem]"
                      src={AwBlack}
                      id="img1"
                      alt="navigator image"
                    />
                  )}
                </li>

                <li
                  className="LBAAlist_item_ss second "
                  onClick={(e) => {
                    console.log(2);
                  }}
                  id="1"
                >
                  {currentItem === "img2" ? (
                    <a href={data[1].link} target="__blank">
                      <img
                        className="h-[2.5rem] w-[7rem]"
                        src={OlBlue}
                        id="img2"
                        alt="navigator image"
                      />
                    </a>
                  ) : (
                    <img
                      className="h-[2.5rem] w-[7rem]"
                      src={OlBlack}
                      id="img2"
                      alt="navigator image"
                    />
                  )}
                </li>

                <li
                  className="LBAAlist_item_ss third mr-[36%]"
                  onClick={(e) => {
                    console.log(3);
                  }}
                  id="2"
                >
                  {currentItem === "img3" ? (
                    <a href={data[2].link} target="__blank">
                      <img
                        className="h-[2.5rem] w-[7rem]"
                        src={ZbBlue}
                        id="img3"
                        alt="navigator image"
                      />
                    </a>
                  ) : (
                    <img
                      className="h-[2.5rem] w-[7rem]"
                      src={ZbBlack}
                      id="img3"
                      alt="navigator image"
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* //! ^^^^^^^^^^^   These logos were above the blogs and articles section   ^^^^^^^^^^^^ */}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* //?############################################################################################################################################################ */}
        {/* //?###################################################                                              ######################################################## */}
        {/* //!...................[+++++++++++++++++++++++++++++++]              Blogs and Articles              [+++++++++++++++++++++++++++++++++++]........................ */}
        {/* //?###################################################                                              ######################################################## */}
        {/* //?############################################################################################################################################################ */}

        <div className="flex flex-col w-[100vw] md:mt-6 pb-16 pt-16">
          {/* //* Heading */}
          <div className="text-left">
            <h1 className="px-[1.9rem] md:pl-[5rem] lg:pl-[10rem] md:text-[3.2rem] text-4xl font-[700]">
              Blogs and Articles
            </h1>
          </div>

          {/* //* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          {/* //! Cards */}
          <div className="flex flex-col md:flex-row py-10 md:px-[4rem] lg:px-[10rem] md:p-8 lg:pb-10 md:pb-8 pb-5 justify-between">
            {/* //* '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
            {/* <div>
              <h3>Coming Soon...</h3>
            </div> */}
            {cardData.map((item) => {
              return (
                <>
                  <div
                    className="flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200"
                    key={item.id}
                  >
                    {/* //? Image */}
                    <img src={item.img} alt="card one image" />
                    {/* //? Text */}
                    <div className="flex flex-col py-4 lg:px-8 md:px-4 px-5">
                      <p className="text-sm text-[#000037] font-[700] pt-2">
                        {item.miniHeader}
                      </p>
                      <h1 className="text-xl md:text-sm lg:text-lg pt-4 md:pr-4 lg:pr-16 font-[800]">
                        {item.Header}
                      </h1>
                      <p className="text-[#676666] text-sm leading-[155%] pt-4 font-medium">
                        {item.para}
                      </p>
                      {/* //?Read more */}
                      <div className="pt-6 pb-4">
                        {/* <LearnMoreButton name={"Read More"} /> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* //*  End of cards */}

          {/* //! ===================== All Blogs button ====================== */}
          <div className="w-[100vw] flex flex-row justify-center items-center">
            <div className="pb-4 lg:pb-10">
              <LearnMoreButton name={"All Blogs"} />
            </div>
          </div>
          {/* //! All blogs button ends here... */}
        </div>
      </main>
    </>
  );
};

export default BlogsAndArticles;
