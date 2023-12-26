import React, { useRef, useLayoutEffect } from "react";
import Form from "./Form.js";
import CustomerImage from "../../Landing/images/customer.png";
import myCaptainCustomer from "../../Landing/images/customers/1653827231157.jpeg";

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const ContactPageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 480) {
        let cptl = gsap.timeline();

        cptl
          .fromTo(
            "#cpHeaderLarge",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "Power2.out" }
          )
          .fromTo(
            "#cpParaLong",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "Power2.out" },
            "-=.4"
          )
          .fromTo(
            "#cpContent",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "Power2.out" },
            "-=.4"
          )
          .fromTo(
            "#cpLogo",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "Power2.out" },
            "-=.4"
          )
          .pause();

        // Card one
        ScrollTrigger.create({
          trigger: "#cpHeaderLarge",
          start: "top center+=300",
          end: "bottom center",
          onEnter: () => cptl.play(),
        });
      } else {
        let cptl = gsap.timeline();

        cptl
          .fromTo(
            "#cpContent",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "Power2.out" }
          )
          .fromTo(
            "#cpLogo",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "Power2.out" },
            "-=.2"
          )
          .fromTo(
            "#cpHeaderSmScreen",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "Power2.out" },
            "-=.3"
          )
          .fromTo(
            "#cpParaSmall",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "Power2.out" },
            "-=.5"
          )
          .pause();

        // Card one
        ScrollTrigger.create({
          trigger: "#cpContent",
          start: "top center+=300",
          end: "bottom center",
          onEnter: () => cptl.play(),
        });
      }
    }, ContactPageRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <main
        className="w-[100vw] h-[100%] flex flex-col lg:flex-row pb-[4.5rem] lg:pb-6rem overflow-hidden"
        ref={ContactPageRef}
      >
        {/* //?++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* //!...........Text section "Lorem ipsum etc.....+ the Jane Doe/CEO/Unacademy"......... */}
        {/* //?++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="flex flex-col flex-1 justify-center xl:pl-[10rem] lg:pl-[8rem] md:pl-[5rem] pl-[2rem]">
          {/* //!........Heading for (Large screen) ....... */}
          <div className="w-[20rem] hidden lg:block">
            <h1
              className="text-[2.7rem] xl:text-6xl leading-tight font-extrabold mt-20"
              id="cpHeaderLarge"
            >
              Tell us about your project
            </h1>
          </div>

          <div className="pt-[.75rem] hidden lg:block">
            <p
              className="text-[.95rem] text-[#5D5D5D] font-medium"
              id="cpParaLong"
            >
              Fill up the form and we&apos;ll get back to you.
            </p>
          </div>

          {/* ////////////////////////////////////////// */}
          {/* //?.......Lorem ipsum + Jane Doe.... */}
          <div className="flex flex-col mt-[4.75rem] mr-[3rem] ml-[1rem] lg:ml-[0rem] md:mr-[10rem] lg:mr-[8rem] lg:px-0  md:ml-[3rem]">
            {/* Lorem ipsum.... */}
            <div className="mt-2">
              <p
                className="text-[0.95rem] leading-normal font-[500] lg:mt-[-1.5rem]"
                id="cpContent"
              >
                “We had a great experience working with Siddhant and his team at
                TheWav, they are quick to response, take ownership and bring
                some great ideas and growth hacks to the table. They were able
                to bring better results than most big agencies, we explored. I
                would highly recommend TheWav for Performance Marketing for
                early and growth stage start-ups.
              </p>
            </div>
            {/* //?Customer profile  */}
            <div className="mt-10 flex flex-row justify-between items-center mb-[4rem]">
              <div className="inline-flex items-center" id="cpLogo">
                <img
                  alt="blog"
                  src={myCaptainCustomer}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="font-bold text-gray-900 text-base mt-[1px]">
                    Ruhan Naqash
                  </span>
                  <span className="text-[#5E5E5E] text-base tracking-normal mt-[-1px] font-medium">
                    Co-founder at MyCaptain, Forbes India 30 Under 30
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* // !........Heading for (small screen) ....... */}
          <div className="w-[18rem] lg:hidden sm:ml-[2rem] md:ml-0 mt-4">
            <h1
              className="text-[1.7rem] leading-tight font-bold ml-[-.4rem]"
              id="cpHeaderSmScreen"
            >
              Tell us about your project
            </h1>
          </div>

          <div className="pt-[.2rem] lg:hidden mb-8 sm:ml-[2rem] md:ml-0 pb-[1.7rem]">
            <p className="text-sm text-[#5D5D5D] ml-[-.4rem]" id="cpParaSmall">
              Fill up the form and we&apos;ll get back to you.
            </p>
          </div>
        </div>
        {/* // !........End of the text section........ */}

        {/* //? ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* .//! ....................Form section................... */}
        {/* //? ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="flex flex-1 xl:pr-[10rem] lg:pr-[8rem] md:px-[5rem] px-[1.5rem] sm:px-[4rem] ">
          <Form></Form>
        </div>
        {/* //! ........... End of the form section ........... */}
      </main>
    </>
  );
};

export default Content;
