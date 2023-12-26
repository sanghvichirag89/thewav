import React, { useState } from "react";
import { wrap } from "popmotion";

import testimonials from "./TestimonialData";

// //* Framer motion is here:::
import { motion, AnimatePresence } from "framer-motion";

const TestimonialParaSmall = () => {
  const [[current, direction], setcurrent] = useState([0, 0]);

  const index = wrap(0, testimonials.length, current);

  const paginate = (newDirection) => {
    setcurrent([current + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const desktopVariants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        transition: {
          duration: 1,
        },
      };
    },
    animate: {
      x: 0,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
      };
    },
  };

  return (
    <>
      {/* //? #############################################################################################################  */}
      {/* //!                           This is the Testimonials section of the Landing page..                               */}
      {/* //? #############################################################################################################  */}

      <main className="box-border overflow-hidden realtive lg:hidden">
        {/* //! This div wraps all the content of the testimonial and inside it is the two sections, one is the image section and the other is the paragraph... */}

        <AnimatePresence custom={direction} mode={"popLayout"}>
          <motion.div
            className="lg:flex-[90%] flex flex-col gap-10 lg:gap-0 lg:flex-row overflow-hidden"
            variants={desktopVariants}
            key={current}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 50 },
              opacity: { duration: 2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {/* //* ############################################################################################# */}
            {/* //! This section contains the Para and the customer image along with the about for the customer... */}
            <section className="">
              {/* //! Customer section.. */}
              <div className="flex flex-col justify-between h-[100%] w-[100%]">
                {/* //? Para is here... */}
                <div className="text-base lg:text-xl font-medium lg:pr-6 pb-[1.5rem] lg:pb-0">
                  <p>{testimonials[index].paragraph}</p>
                </div>
                {/* //? About is here... */}

                <div className="inline-flex items-center ">
                  <img
                    alt="customer_image"
                    src={testimonials[index].customerImage}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-semibold text-gray-900">
                      {testimonials[index].customerName}
                    </span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                      {testimonials[index].customerAbout}
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>

        {/* //* ########################################################################################## */}
        {/* //! This is the arrow section of large screen.... */}
        <section className="absolute right-[2rem] md:right-[5rem] z-50 flex gap-4 mt-[-2rem]">
          <button>
            <svg
              className="cursor-pointer fill-[#BEBEBE] hover:fill-[#080816] duration-300 ease-out"
              width="10"
              height="10"
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
              width="10"
              height="10"
              viewBox="0 0 29 29"
              fill="none"
              onClick={() => paginate(1)}
            >
              <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" />
            </svg>
          </button>
        </section>
      </main>
    </>
  );
};

export default TestimonialParaSmall;
