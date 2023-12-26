import React from "react";
import "./GetFreeAudit.css";
import myCaptainCustomer from "../images/customers/1653827231157.jpeg";
import Form from "./Form";

const GetFreeAudit = () => {
  return (
    <>
      {/* //? ####################################################################################################################################### */}
      {/* //? ##############################                                                                ######################################### */}
      {/*  //! [+++++++++++++++++++++++++++]   Starting of the "Get a free marketing audit today!" section  [+++++++++++++++++++++++++++++++++++++++]  */}
      {/* //? ##############################                                                                ######################################### */}
      {/* //? ####################################################################################################################################### */}

      <main className="overflow-hidden bg-[#080816] h-[110vh] w-[100vw] lg:block hidden get_free_audit_gradient">
        {/* //?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
        {/* //?================================================================================================================================================================= */}
        {/* //!.......................This are all for Large screens [for small screens there is another part at the bottom.............................................. */}
        {/* //?================================================================================================================================================================= */}
        {/* //?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

        {/* //*Taking care of those arrows with absolute positioning keeping the main area relative... */}
        {/* //?  <<<<<<<<<<<<<<<<<<<<   Arrow   >>>>>>>>>>>>>>>>>>>>  */}
        <div className="relative box-border ">
          {/* //*  Arrow at the left top :: Arrow_no_06_from_figma_file */}
          <svg
            className="absolute top-[2vh] left-[12vw]"
            width="50"
            height="66"
            viewBox="0 0 59 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M28.8889 1.79599C29.192 1.45292 29.7271 1.45292 30.0303 1.79599L57.112 32.4481C57.5463 32.9397 57.1973 33.7138 56.5413 33.7138L45.0321 33.7138C43.7704 33.7138 42.7476 34.7366 42.7476 35.9983L42.7476 73.103C42.7476 73.5236 42.4067 73.8645 41.9861 73.8645L16.9331 73.8645C16.5125 73.8645 16.1716 73.5236 16.1716 73.103L16.1716 35.9983C16.1716 34.7366 15.1488 33.7138 13.8871 33.7138L2.37783 33.7138C1.72186 33.7138 1.37284 32.9397 1.80717 32.4481L28.8889 1.79599Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //*  Arrow at the right top :: Arrow_no_02_from_figma_file */}
          <svg
            className="absolute top-[8vh] right-[8vw]"
            width="28"
            height="36"
            viewBox="0 0 34 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M16.7001 1.82828C17.0037 1.47756 17.5478 1.47757 17.8514 1.82828L32.794 19.086C33.221 19.5792 32.8707 20.3459 32.2183 20.3459L27.2284 20.3459C25.9667 20.3459 24.944 21.3687 24.944 22.6304L24.944 44.1665C24.944 44.587 24.603 44.928 24.1825 44.928L10.369 44.928C9.94848 44.928 9.60755 44.587 9.60755 44.1665L9.60755 22.6304C9.60755 21.3687 8.58476 20.3459 7.32308 20.3459L2.33321 20.3459C1.68083 20.3459 1.3305 19.5792 1.75752 19.086L16.7001 1.82828Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //* Arrow at the left center :: Arrow_no_03_from_figma_file */}
          <svg
            className="absolute top-[50vh] left-[24vw]"
            width="43"
            height="56"
            viewBox="0 0 52 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M25.8435 1.79256C26.1466 1.45035 26.6807 1.45035 26.9837 1.79256L51.0144 28.9297C51.4496 29.4211 51.1007 30.1961 50.4443 30.1961L40.5811 30.1961C39.3195 30.1961 38.2967 31.2189 38.2967 32.4805L38.2967 65.4882C38.2967 65.9088 37.9558 66.2497 37.5352 66.2497L15.2921 66.2497C14.8715 66.2497 14.5306 65.9088 14.5306 65.4883L14.5306 32.4805C14.5306 31.2188 13.5078 30.1961 12.2461 30.1961L2.38292 30.1961C1.72654 30.1961 1.37768 29.4211 1.81282 28.9297L25.8435 1.79256Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //*  Arrow at the right center :: Arrow_no_03_from_figma_file */}
          <svg
            className="absolute top-[50vh] right-[22vw]"
            width="48"
            height="60"
            viewBox="0 0 52 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M25.8435 1.79256C26.1466 1.45035 26.6807 1.45035 26.9837 1.79256L51.0144 28.9297C51.4496 29.4211 51.1007 30.1961 50.4443 30.1961L40.5811 30.1961C39.3195 30.1961 38.2967 31.2189 38.2967 32.4805L38.2967 65.4882C38.2967 65.9088 37.9558 66.2497 37.5352 66.2497L15.2921 66.2497C14.8715 66.2497 14.5306 65.9088 14.5306 65.4883L14.5306 32.4805C14.5306 31.2188 13.5078 30.1961 12.2461 30.1961L2.38292 30.1961C1.72654 30.1961 1.37768 29.4211 1.81282 28.9297L25.8435 1.79256Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //*  Arrow at the left bottom :: Arrow_no_04_from_figma_file */}
          <svg
            className="absolute top-[91vh] left-[7vw]"
            width="74"
            height="100"
            viewBox="0 0 92 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M45.6483 1.75565C45.9505 1.42236 46.4742 1.42237 46.7765 1.75565L90.5519 50.0302C90.9956 50.5196 90.6484 51.3032 89.9878 51.3032L69.512 51.3032C68.2504 51.3032 67.2276 52.326 67.2276 53.5877L67.2276 111.177C67.2276 111.598 66.8867 111.939 66.4661 111.939L25.9586 111.939C25.5381 111.939 25.1971 111.598 25.1971 111.177L25.1971 53.5877C25.1971 52.326 24.1743 51.3032 22.9127 51.3032L2.43694 51.3032C1.77631 51.3032 1.42907 50.5196 1.87284 50.0302L1.30874 49.5187L1.87284 50.0302L45.6483 1.75565Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //*  Arrow at the right bottom :: Arrow_no_05_from_figma_file */}
          <svg
            className="absolute top-[89vh] right-[12vw]"
            width="58"
            height="72"
            viewBox="0 0 68 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M33.4594 1.78624C33.7623 1.44552 34.2947 1.44552 34.5976 1.78624L66.2343 37.3714C66.6709 37.8625 66.3223 38.6389 65.6652 38.6389L51.7084 38.6389C50.4467 38.6389 49.4239 39.6617 49.4239 40.9233L49.424 83.7639C49.424 84.1844 49.083 84.5254 48.6625 84.5254L19.3946 84.5254C18.974 84.5254 18.6331 84.1844 18.6331 83.7639L18.6331 40.9233C18.6331 39.6617 17.6103 38.6389 16.3486 38.6389L2.39182 38.6389C1.73474 38.6389 1.38614 37.8625 1.82272 37.3714L33.4594 1.78624Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
        </div>

        {/* //*..............................................End of arrows............................................... */}
        {/* //? <<<<<<<<<<<<<<<<<<<<   Arrow(company dimensions..)   >>>>>>>>>>>>>>>>>>>>  */}
        <div className="relative box-border hidden">
          {/* //? ..........Arrow at the left top :: Arrow_no_06_from_figma_file */}
          <svg
            className="absolute top-[1.47rem] left-[15.5rem]"
            width="59"
            height="75"
            viewBox="0 0 59 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M28.8889 1.79599C29.192 1.45292 29.7271 1.45292 30.0303 1.79599L57.112 32.4481C57.5463 32.9397 57.1973 33.7138 56.5413 33.7138L45.0321 33.7138C43.7704 33.7138 42.7476 34.7366 42.7476 35.9983L42.7476 73.103C42.7476 73.5236 42.4067 73.8645 41.9861 73.8645L16.9331 73.8645C16.5125 73.8645 16.1716 73.5236 16.1716 73.103L16.1716 35.9983C16.1716 34.7366 15.1488 33.7138 13.8871 33.7138L2.37783 33.7138C1.72186 33.7138 1.37284 32.9397 1.80717 32.4481L28.8889 1.79599Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //? .........Arrow at the right top :: Arrow_no_02_from_figma_file */}
          <svg
            className="absolute top-[6.1rem] right-[8.3rem]"
            width="34"
            height="46"
            viewBox="0 0 34 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M16.7001 1.82828C17.0037 1.47756 17.5478 1.47757 17.8514 1.82828L32.794 19.086C33.221 19.5792 32.8707 20.3459 32.2183 20.3459L27.2284 20.3459C25.9667 20.3459 24.944 21.3687 24.944 22.6304L24.944 44.1665C24.944 44.587 24.603 44.928 24.1825 44.928L10.369 44.928C9.94848 44.928 9.60755 44.587 9.60755 44.1665L9.60755 22.6304C9.60755 21.3687 8.58476 20.3459 7.32308 20.3459L2.33321 20.3459C1.68083 20.3459 1.3305 19.5792 1.75752 19.086L16.7001 1.82828Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //?...........Arrow at the left center :: Arrow_no_03_from_figma_file */}
          <svg
            className="absolute top-[30.53rem] left-[30rem]"
            width="52"
            height="68"
            viewBox="0 0 52 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M25.8435 1.79256C26.1466 1.45035 26.6807 1.45035 26.9837 1.79256L51.0144 28.9297C51.4496 29.4211 51.1007 30.1961 50.4443 30.1961L40.5811 30.1961C39.3195 30.1961 38.2967 31.2189 38.2967 32.4805L38.2967 65.4882C38.2967 65.9088 37.9558 66.2497 37.5352 66.2497L15.2921 66.2497C14.8715 66.2497 14.5306 65.9088 14.5306 65.4883L14.5306 32.4805C14.5306 31.2188 13.5078 30.1961 12.2461 30.1961L2.38292 30.1961C1.72654 30.1961 1.37768 29.4211 1.81282 28.9297L25.8435 1.79256Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //?...........Arrow at the right center :: Arrow_no_03_from_figma_file */}
          <svg
            className="absolute top-[27.84rem] right-[22.51rem]"
            width="52"
            height="68"
            viewBox="0 0 52 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M25.8435 1.79256C26.1466 1.45035 26.6807 1.45035 26.9837 1.79256L51.0144 28.9297C51.4496 29.4211 51.1007 30.1961 50.4443 30.1961L40.5811 30.1961C39.3195 30.1961 38.2967 31.2189 38.2967 32.4805L38.2967 65.4882C38.2967 65.9088 37.9558 66.2497 37.5352 66.2497L15.2921 66.2497C14.8715 66.2497 14.5306 65.9088 14.5306 65.4883L14.5306 32.4805C14.5306 31.2188 13.5078 30.1961 12.2461 30.1961L2.38292 30.1961C1.72654 30.1961 1.37768 29.4211 1.81282 28.9297L25.8435 1.79256Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //?..........Arrow at the left bottom :: Arrow_no_04_from_figma_file */}
          <svg
            className="absolute top-[52.6rem] left-[7.37rem]"
            width="92"
            height="113"
            viewBox="0 0 92 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M45.6483 1.75565C45.9505 1.42236 46.4742 1.42237 46.7765 1.75565L90.5519 50.0302C90.9956 50.5196 90.6484 51.3032 89.9878 51.3032L69.512 51.3032C68.2504 51.3032 67.2276 52.326 67.2276 53.5877L67.2276 111.177C67.2276 111.598 66.8867 111.939 66.4661 111.939L25.9586 111.939C25.5381 111.939 25.1971 111.598 25.1971 111.177L25.1971 53.5877C25.1971 52.326 24.1743 51.3032 22.9127 51.3032L2.43694 51.3032C1.77631 51.3032 1.42907 50.5196 1.87284 50.0302L1.30874 49.5187L1.87284 50.0302L45.6483 1.75565Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
          {/* //? ........Arrow at the right bottom :: Arrow_no_05_from_figma_file */}
          <svg
            className="absolute top-[50.97rem] right-[14rem]"
            width="68"
            height="86"
            viewBox="0 0 68 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M33.4594 1.78624C33.7623 1.44552 34.2947 1.44552 34.5976 1.78624L66.2343 37.3714C66.6709 37.8625 66.3223 38.6389 65.6652 38.6389L51.7084 38.6389C50.4467 38.6389 49.4239 39.6617 49.4239 40.9233L49.424 83.7639C49.424 84.1844 49.083 84.5254 48.6625 84.5254L19.3946 84.5254C18.974 84.5254 18.6331 84.1844 18.6331 83.7639L18.6331 40.9233C18.6331 39.6617 17.6103 38.6389 16.3486 38.6389L2.39182 38.6389C1.73474 38.6389 1.38614 37.8625 1.82272 37.3714L33.4594 1.78624Z"
              stroke="#0049FA"
              strokeWidth="1.52298"
            />
          </svg>
        </div>
        {/* //?  ................................................................End of arrows............................................................. */}

        {/* //!..................................................Cotents of the area... */}
        <div className="flex flex-row justify-between lg:mx-[10rem] xl:mx-[14rem] relative">
          {/* //?  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* First Text box */}
          <div className="flex-1 flex flex-col text-white mt-[10.5rem] h-[100%] relative">
            <h1 className="lg:text-[3.2rem] leading-none font-extrabold pb-[1.4rem] lg:pr-10 xl:pr-20">
              Get a free marketing audit today!
            </h1>
            <p className="text-sm pb-[1.5rem] text-[#BEBEBE] font-semibold">
              We are an ROI driven Performance Marketing Agency located in
              India. Time and again We have proved our place in the market by
              providing exceptional results to our brands and startups across
              the Globe.
            </p>
            <p className="text-sm text-[#BEBEBE] font-semibold italic">
              “We had a great experience working with Siddhant and his team at
              TheWav, they are quick to response, take ownership and bring some
              great ideas and growth hacks to the table. They were able to bring
              better results than most big agencies, we explored. I would highly
              recommend TheWav for Performance Marketing for early and growth
              stage start-ups.”
            </p>
            {/* //!...................................Profile.................................... */}
            <div className="mt-[1.5rem]">
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src={myCaptainCustomer}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Ruhan Naqash
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    Co-founder at MyCaptain, Forbes India 30 Under 30
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* //! .................................Form Fields Goes here............................... */}
          <div className="flex-1 md:pl-[2rem] lg:pl-[3rem] xl:pl-[6rem] pt-[4rem] w-auto relative">
            <Form></Form>
          </div>
        </div>
      </main>

      <main className="overflow-hidden bg-[#080816] w-[100vw] -z-20 lg:hidden get_free_audit_gradient_mobile">
        {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        {/* //?========================================================================================================================================= */}
        {/* //!........................................................For small screens................................................................ */}
        {/* //?========================================================================================================================================= */}
        {/* //?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

        {/* //!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Arrow section..    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="relative h-[100%] lg:hidden z-0">
          {/* //?Arrow at the left top :: Arrow_no_06_from_figma_file */}
          <svg
            className="absolute top-[0.4rem] left-[2.5rem]"
            width="27"
            height="36"
            viewBox="0 0 27 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M13.1231 1.19311C13.3224 0.964549 13.6776 0.964549 13.8769 1.19311L26.1783 15.3025C26.4603 15.626 26.2306 16.1311 25.8014 16.1311L21.1881 16.1311C20.3597 16.1311 19.6881 16.8027 19.6881 17.6311L19.6881 35C19.6881 35.2761 19.4643 35.5 19.1881 35.5L7.81187 35.5C7.53573 35.5 7.31187 35.2761 7.31187 35L7.31187 17.6311C7.31187 16.8027 6.6403 16.1311 5.81187 16.1311L1.19856 16.1311C0.769405 16.1311 0.539663 15.626 0.821691 15.3025L13.1231 1.19311Z"
              stroke="#0049FA"
            />
          </svg>
          {/* //?Arrow at the right top :: Arrow_no_02_from_figma_file */}
          <svg
            className="absolute top-[1.8rem] right-[2rem]"
            width="15"
            height="22"
            viewBox="0 0 15 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M7.11646 1.23798C7.31632 0.999004 7.68368 0.999006 7.88354 1.23798L14.2436 8.84267C14.5158 9.16817 14.2844 9.66344 13.86 9.66344L12.4206 9.66344C11.5922 9.66344 10.9206 10.335 10.9206 11.1634L10.9206 21C10.9206 21.2761 10.6968 21.5 10.4206 21.5L4.57937 21.5C4.30323 21.5 4.07937 21.2761 4.07937 21L4.07937 11.1634C4.07937 10.335 3.4078 9.66344 2.57937 9.66344L1.13996 9.66344C0.715629 9.66344 0.484189 9.16817 0.756416 8.84267L7.11646 1.23798Z"
              stroke="#0049FA"
            />
          </svg>

          {/* //?The remaining arrows are places in the bottom div.. */}
        </div>

        {/*   //?End of arrow ...  */}

        {/* //!................................Cotents of the area.................................. */}
        <div className="flex flex-col justify-between mx-[1.9rem] z-10">
          {/* //? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* //*......................................................First Text box ...............................................................  */}
          <div className="flex-1 flex flex-col text-white mt-[4rem] h-[100%] md:px-[4rem]">
            <h1 className="text-4xl font-[800] pb-[1.2rem]">
              Get a free marketing audit today!
            </h1>
            <p className="text-sm pb-[1.2rem] text-[#BEBEBE] font-semibold">
              We are an ROI driven Performance Marketing Agency located in
              India. Time and again We have proved our place in the market by
              providing exceptional results to our brands and startups across
              the Globe.
            </p>
            <p className="text-sm text-[#BEBEBE] font-semibold italic">
              “We had a great experience working with Siddhant and his team at
              TheWav, they are quick to response, take ownership and bring some
              great ideas and growth hacks to the table. They were able to bring
              better results than most big agencies, we explored. I would highly
              recommend TheWav for Performance Marketing for early and growth
              stage start-ups.”
            </p>
            {/* Profile */}
            <div className="mt-[1.5rem]">
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src={myCaptainCustomer}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Ruhan Naqash
                  </span>
                  <span className="text-gray-400 text-sm tracking-widest mt-0.5 font-[600]">
                    Co-founder at MyCaptain, Forbes India 30 Under 30
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* //? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* //* .....................................................Middle two arrows.............................................................. */}
          <div className="bg-transparent h-[2rem] relative -ml-[1.9rem] w-[100vw]">
            {/* //? Arrow at the left center :: Arrow_no_03_from_figma_file */}
            <svg
              className="absolute top-[10.5rem] left-[5rem] md:left-[9rem]"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M11.6245 1.18413C11.8236 0.95771 12.1764 0.95771 12.3755 1.18413L23.1644 13.453C23.4485 13.776 23.2191 14.2832 22.789 14.2832L18.9963 14.2832C18.1678 14.2832 17.4963 14.9548 17.4963 15.7832L17.4963 31C17.4963 31.2761 17.2724 31.5 16.9963 31.5L7.00375 31.5C6.72761 31.5 6.50375 31.2761 6.50375 31L6.50375 15.7832C6.50375 14.9548 5.83218 14.2832 5.00375 14.2832L1.21103 14.2832C0.780869 14.2832 0.551495 13.776 0.83556 13.453L11.6245 1.18413Z"
                stroke="#0049FA"
              />
            </svg>

            {/* //?  Arrow at the right center :: Arrow_no_03_from_figma_file */}
            <svg
              className="absolute top-[8rem] right-[16vw]"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M11.6245 1.18413C11.8236 0.95771 12.1764 0.95771 12.3755 1.18413L23.1644 13.453C23.4485 13.776 23.2191 14.2832 22.789 14.2832L18.9963 14.2832C18.1678 14.2832 17.4963 14.9548 17.4963 15.7832L17.4963 31C17.4963 31.2761 17.2724 31.5 16.9963 31.5L7.00375 31.5C6.72761 31.5 6.50375 31.2761 6.50375 31L6.50375 15.7832C6.50375 14.9548 5.83218 14.2832 5.00375 14.2832L1.21103 14.2832C0.780869 14.2832 0.551495 13.776 0.83556 13.453L11.6245 1.18413Z"
                stroke="#0049FA"
              />
            </svg>
          </div>

          {/* //!.................................................Form Fields Goes here............................................... */}
          <div className="flex-1 md:px-[4rem] w-auto z-50">
            <Form></Form>
          </div>

          {/* //* ...................................................................................................................................................... */}
          {/* //* ..................................................Bottom two arrows.................................................................................. */}
          <div className="h-[4.5rem] bg-transparent relative w-[100vw] -ml-[1.9rem]">
            {/* //?Arrow at the left bottom :: Arrow_no_04_from_figma_file */}
            <svg
              className="absolute top-[0.5rem] left-[1rem] md:left-[5rem]"
              width="43"
              height="54"
              viewBox="0 0 43 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M21.1287 1.15821C21.3273 0.938045 21.6727 0.938045 21.8713 1.15821L42.1227 23.6117C42.4128 23.9334 42.1846 24.4466 41.7514 24.4466L32.8781 24.4466C32.0497 24.4466 31.3781 25.1182 31.3781 25.9466L31.3781 53C31.3781 53.2761 31.1543 53.5 30.8781 53.5L12.1219 53.5C11.8457 53.5 11.6219 53.2761 11.6219 53L11.6219 25.9466C11.6219 25.1182 10.9503 24.4466 10.1219 24.4466L1.24858 24.4466C0.81544 24.4466 0.587189 23.9334 0.877286 23.6117L21.1287 1.15821Z"
                stroke="#0049FA"
              />
            </svg>

            {/* //?Arrow at the right bottom :: Arrow_no_05_from_figma_file */}
            <svg
              className="absolute -top-[12.5rem] right-[2rem] md:right-[5rem]"
              width="40"
              height="40"
              viewBox="0 0 68 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M33.4594 1.78624C33.7623 1.44552 34.2947 1.44552 34.5976 1.78624L66.2343 37.3714C66.6709 37.8625 66.3223 38.6389 65.6652 38.6389L51.7084 38.6389C50.4467 38.6389 49.4239 39.6617 49.4239 40.9233L49.424 83.7639C49.424 84.1844 49.083 84.5254 48.6625 84.5254L19.3946 84.5254C18.974 84.5254 18.6331 84.1844 18.6331 83.7639L18.6331 40.9233C18.6331 39.6617 17.6103 38.6389 16.3486 38.6389L2.39182 38.6389C1.73474 38.6389 1.38614 37.8625 1.82272 37.3714L33.4594 1.78624Z"
                stroke="#0049FA"
                strokeWidth="1.52298"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default GetFreeAudit;
