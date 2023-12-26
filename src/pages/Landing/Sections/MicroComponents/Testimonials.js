import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import testimonials from "./TestimonialData.js";

const Testimonials = () => {
  const [[current, direction], setcurrent] = useState([0, 0]);

  const testimonialIndex = wrap(0, testimonials.length, current);

  const desktopVariants = {
    enter: (direction) => {
      return {
        z: 0,
        x: direction > 0 ? 800 : -800,
      };
    },
    center: {
      z: 1,
      x: 0,
    },
    exit: (direction) => {
      return {
        z: 0,
        x: direction < 0 ? 800 : -800,
      };
    },
  };

  const mobileVariants = {
    enter: (direction) => {
      return {
        z: 0,
        x: direction > 0 ? 500 : -500,
      };
    },
    center: {
      z: 1,
      x: 0,
    },
  };

  const paginate = (newDirection) => {
    setcurrent([current + newDirection, newDirection]);
  };

  return (
    <>
      {/* //! Large screens... */}

      <div className="hidden flex-col w-[55vw] ml-20 overflow-hidden lg:flex">
        <div className="box-border pointer-events-none selection:opacity-0 overflow-hidden h-[40vh]">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode={"popLayout"}
          >
            <motion.div
              className="ml-20 mt-2 bg-cyan-400"
              custom={direction}
              key={current}
            >
              <motion.p
                className="text-xl leading-normal"
                variants={desktopVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 275, damping: 50 },
                  opacity: { duration: 0.01 },
                }}
              >
                {testimonials[testimonialIndex].data}
              </motion.p>
            </motion.div>

            <motion.div
              className="mx-20 mt-10 bg-green-400"
              custom={direction}
              mode={"popLayout"}
            >
              <motion.a
                className="inline-flex items-center"
                key={current}
                variants={desktopVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 275,
                    damping: 50,
                    duration: 1,
                  },
                  opacity: { duration: 0.01 },
                }}
              >
                <motion.img
                  alt="customer_image"
                  src={testimonials[testimonialIndex].img}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <motion.span className="flex-grow flex flex-col pl-4">
                  <motion.span className="title-font text-gray-900">
                    {testimonials[testimonialIndex].name}
                  </motion.span>
                  <motion.span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    {testimonials[testimonialIndex].about}
                  </motion.span>
                </motion.span>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* //? ............................................................................................................................ */}
      {/* //! [previous<<-- + next--->>] button for Changing the testimonials.....(large Screen)................ */}
      <div className="hidden lg:flex min-w-[6vw] mr-[11rem] items-end justify-between lg:pb-[2rem] xl:pb-[1rem] h-[100%]">
        <button>
          <svg
            className="cursor-pointer fill-[#BEBEBE] hover:fill-[#080816] duration-300 ease-out"
            width="20"
            height="20"
            viewBox="0 0 29 29"
            fill="none"
            onClick={() => paginate(-1)}
          >
            <path d="M15.4375 27.75L15.875 27.3125C16.1875 27 16.1875 26.5625 15.875 26.25L4.75 15.0625H28.25C28.625 15.0625 29 14.75 29 14.3125V13.6875C29 13.3125 28.625 12.9375 28.25 12.9375H4.75L15.875 1.8125C16.1875 1.5 16.1875 1.0625 15.875 0.75L15.4375 0.3125C15.125 0 14.6875 0 14.375 0.3125L1.1875 13.5C0.875 13.8125 0.875 14.25 1.1875 14.5625L14.375 27.75C14.6875 28.0625 15.125 28.0625 15.4375 27.75Z" />
          </svg>
        </button>

        <button>
          <svg
            className="cursor-pointer fill-[#BEBEBE] hover:fill-[#080816] duration-300 ease-out"
            width="20"
            height="20"
            viewBox="0 0 29 29"
            fill="none"
            onClick={() => paginate(1)}
          >
            <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" />
          </svg>
        </button>
      </div>

      {/* //! ___________________End of customer review(large Screen).._______________________ */}

      {/* //* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
      {/* //!  ..........................................................  Customer Review(Small Screens) ...................................................*/}
      {/* //* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

      <motion.div className="flex flex-col md:mx-10 lg:hidden" key={current}>
        {/* //? Testimonials data comes here..::..for small screen..:: */}

        <motion.div className="mt-2">
          <motion.div className="mx-16 md:mx-20 mt-2" custom={direction}>
            <motion.p
              key={current}
              className="text-base leading-normal"
              custom={direction}
              variants={mobileVariants}
              initial="enter"
              animate="center"
              // exit="exit"
              transition={{
                x: { type: "spring", stiffness: 205, damping: 18 },
                opacity: { duration: 0.2 },
              }}
            >
              {testimonials[testimonialIndex].data}
            </motion.p>
          </motion.div>

          <motion.div className="mx-14 md:mx-[5rem] mt-10 flex flex-row justify-between items-center mb-24">
            <motion.div
              className="inline-flex items-center"
              custom={direction}
              variants={mobileVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 205, damping: 18 },
                opacity: { duration: 0.2 },
              }}
            >
              <motion.img
                alt="blog"
                src={testimonials[testimonialIndex].img}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <motion.span className="flex-grow flex flex-col pl-4">
                <motion.span className="font-medium text-gray-900 text-sm">
                  {testimonials[testimonialIndex].name}
                </motion.span>
                <motion.span className="text-[#5E5E5E] text-xs tracking-tight mt-0.5">
                  {testimonials[testimonialIndex].about}
                </motion.span>
              </motion.span>
            </motion.div>

            {/* //*[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
            {/* //!_____________________(previous <<-- + -->> next) button for reviews(Small Screen) */}
            <div className="flex items-end justify-between -mr-3">
              <button>
                <svg
                  id="LeftClick"
                  className="mx-2 p-1 fill-[#BEBEBE] hover:fill-[#080816] duration-300 ease-out"
                  width="25"
                  height="25"
                  viewBox="0 0 29 29"
                  fill="none"
                  onClick={() => paginate(-1)}
                >
                  <path d="M15.4375 27.75L15.875 27.3125C16.1875 27 16.1875 26.5625 15.875 26.25L4.75 15.0625H28.25C28.625 15.0625 29 14.75 29 14.3125V13.6875C29 13.3125 28.625 12.9375 28.25 12.9375H4.75L15.875 1.8125C16.1875 1.5 16.1875 1.0625 15.875 0.75L15.4375 0.3125C15.125 0 14.6875 0 14.375 0.3125L1.1875 13.5C0.875 13.8125 0.875 14.25 1.1875 14.5625L14.375 27.75C14.6875 28.0625 15.125 28.0625 15.4375 27.75Z" />
                </svg>
              </button>
              <button>
                <svg
                  id="RightClick"
                  className="mx-2 p-1 fill-[#BEBEBE] hover:fill-[#080816] duration-300 ease-out"
                  width="25"
                  height="25"
                  viewBox="0 0 29 29"
                  fill="none"
                  onClick={() => paginate(+1)}
                >
                  <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" />
                </svg>
              </button>
            </div>
            {/* //!  ____________________End of arrow buttons..(Small Screen) */}
          </motion.div>
        </motion.div>
      </motion.div>
      {/* //?...............................................End of customer review(Small Screen).................................................................. */}
    </>
  );
};

export default Testimonials;
