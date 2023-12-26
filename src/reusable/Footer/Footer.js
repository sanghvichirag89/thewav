import React from "react";

import Instagram from "./images/instagram.svg";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Linkedin from "./images/linkedin.svg";
import Behance from "./images/behance.svg";

const Footer = (props) => {
  return (
    <>
      {/*! According to the size from the figma file..Looks huge so not using this by default..Switching to tailwind provided classes.. */}
      <footer className="bg-[#080816] w-[100vw] text-white flex-col hidden mt-[-2px]">
        {/* Two div's in flex box */}
        <div className="flex flex-col lg:flex-row">
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {/* First Div....... */}
          <div className="flex flex-col lg:pl-[10rem] lg:pt-[8.18rem] w-[50%]">
            {/* Logo */}
            <div className="">
              <h1 className="text-[2.5rem] font-[600] leading-tight">thewav</h1>
            </div>
            {/* Address */}
            <div className="flex flex-col justify-start text-white lg:pt-[3.15rem]">
              <p className="text-left text-[1.5rem]">
                6th floor, Schindler House,
              </p>
              <p className="text-left text-[1.5rem]">
                Main Street, Hiranandani Gardens,
              </p>
              <p className="text-left text-[1.5rem]">
                Near Colgate Research Centre, Powai,
              </p>
              <p className="text-left text-[1.5rem]">Mumbai - 400076</p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Second Div...... */}
          <div className="flex flex-col lg:flex-row lg:pr-[10rem] lg:pt-[8.22rem] lg:justify-between w-[50%]">
            {/* ======================================== */}
            {/* Home,Services,Projects,AboutUs,ContactUs */}
            {/* ======================================== */}
            <div className="flex flex-col">
              <a className="pb-[1rem] text-[1.5rem]" href="/">
                Home
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="#">
                Services
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="#">
                Projects
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="#">
                About Us
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="contact">
                Contact Us
              </a>
            </div>
            {/* ======================================== */}
            {/* Performance Marketing,Web Design,Branding */}
            {/* ======================================== */}
            <div className="flex flex-col">
              <a
                className="pb-[1rem] text-[1.5rem]"
                href="/performance_marketing"
              >
                Performance Marketing
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="/uxui">
                Web Design
              </a>
              <a className="pb-[1rem] text-[1.5rem]" href="/branding">
                Branding
              </a>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Logos (social media icons) */}
        <div className="flex flex-row justify-center pt-[7.8rem]">
          <img
            className="w-[25px] h-[36px] mr-[5.64rem]"
            src={Instagram}
            alt="social media icons"
          />
          <img
            className="w-[25px] h-[36px] mr-[5.64rem]"
            src={Facebook}
            alt="social media icons"
          />
          <img
            className="w-[25px] h-[36px] mr-[5.64rem]"
            src={Twitter}
            alt="social media icons"
          />
          <img
            className="w-[25px] h-[36px]"
            src={Linkedin}
            alt="social media icons"
          />
        </div>

        {/* Horizontal line passing along the bottom */}
        <div className="flex flex-row justify-center mt-[4rem] border-[#0049FA] border-[1px] mb-[3.875rem] mx-[15rem]"></div>

        {/* Copy Right */}
        <div className="text-center pb-[3.875rem]">
          <h1 className="text-[#BEBEBE] text-[1.5rem] font-[400]">
            {props.copyright}
          </h1>
        </div>
      </footer>

      {/*! ==============================================>> [[[[[[[[[[[[+++++++++]]]]]]]]]]]] <<================================================== */}
      {/*! custom size ,that fits nicely.. */}

      {/* ============================================================================================ */}
      {/* Large Screen */}
      {/* ============================================================================================ */}
      <footer className="bg-[#080816] w-[100vw] text-white flex-col hidden lg:block relative">
        {/* Two div's in flex box */}
        <div className="flex flex-col lg:flex-row">
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {/* First Div....... */}
          <div className="flex flex-col lg:pl-[10rem] lg:pt-[5rem] w-[50%]">
            {/* Logo */}
            <div className="hover:cursor-pointer">
              {/* <h1 className='text-3xl font-[600] leading-tight'>thewav</h1> */}
              <svg
                className="group hover:scale-90 transition-all duration-150"
                width="120"
                height="40"
                viewBox="0 0 157 47"
                fill="none"
              >
                <path
                  className="fill-white group-hover:fill-[#0049FA] group-hover:scale-90 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
                  d="M45.7361 23.5018C45.7361 36.1329 35.4952 46.3698 22.8681 46.3698C10.2356 46.3698 0 36.1329 0 23.5018C0 20.5513 0.558959 17.7285 1.57706 15.1374C2.21986 14.7221 3.03036 14.3907 4.01253 14.3748C13.1196 14.3748 13.2553 42.7885 19.0844 42.9708C23.6479 43.1186 19.4558 22.9055 23.9075 22.9055C26.4427 22.9055 30.0999 35.7802 32.4515 35.2732C34.348 34.8659 34.2642 24.0341 37.5128 23.0373C39.1018 22.5542 40.3994 23.9716 40.9863 24.7701C41.3656 25.2851 39.3134 14.1139 36.1034 14.3854C33.3685 14.617 33.4004 22.9415 30.9104 22.9295C29.0459 22.9215 27.3331 18.7653 26.1273 14.9364C24.5463 8.42985 23.2806 7.10032 22.4103 7.10831C20.3102 7.12428 18.4776 14.9457 17.8201 19.9164C16.9897 26.2167 18.1103 30.4169 16.9138 30.5393C13.9394 30.8068 16.4986 7.41307 11.3562 3.74391C14.7379 1.76759 18.6706 0.637695 22.8694 0.637695C35.4965 0.637695 45.7361 10.8733 45.7361 23.5018Z"
                  fill="none"
                />
                <path
                  d="M67.616 19.5638V22.5462C67.616 23.0546 67.3299 23.3394 66.8228 23.3394H65.0781V33.8425C65.0781 34.3509 64.7919 34.6357 64.2849 34.6357H61.1121C60.6037 34.6357 60.3189 34.3495 60.3189 33.8425V23.3394H58.5715C58.0631 23.3394 57.7783 23.0533 57.7783 22.5462V19.5638C57.7783 19.0554 58.0644 18.7706 58.5715 18.7706H60.3163V14.4865C60.3163 13.9782 60.6024 13.6934 61.1094 13.6934H64.2822C64.7906 13.6934 65.0754 13.9795 65.0754 14.4865V18.7706H66.8201C67.3299 18.7706 67.616 19.0567 67.616 19.5638Z"
                  fill="white"
                />
                <path
                  d="M83.8001 24.5767V33.8421C83.8001 34.3505 83.514 34.6353 83.0069 34.6353H79.8342C79.3258 34.6353 79.041 34.3492 79.041 33.8421V24.9893C79.041 23.4029 78.1214 22.7042 76.9143 22.7042C75.4863 22.7042 74.5973 23.4974 74.5973 25.3699V33.8421C74.5973 34.3505 74.3111 34.6353 73.8041 34.6353H70.6313C70.1229 34.6353 69.8381 34.3492 69.8381 33.8421V13.2165C69.8381 12.7081 70.1243 12.4233 70.6313 12.4233H73.8041C74.3125 12.4233 74.5973 12.7095 74.5973 13.2165V20.2195C75.3425 19.1162 76.6934 18.3257 78.7229 18.3257C81.6734 18.3257 83.8001 20.6108 83.8001 24.5767Z"
                  fill="white"
                />
                <path
                  d="M102.584 26.7028C102.584 27.1154 102.552 27.496 102.52 27.8766C102.456 28.385 102.14 28.6059 101.663 28.6059H97.7929H91.0668C91.6431 30.4917 93.1243 31.2397 94.7772 31.2397C95.6662 31.2397 96.5539 30.9229 97.1249 30.4465C97.4416 30.1923 97.6958 30.0339 98.1084 30.0339L101.155 30.002C101.726 30.002 102.044 30.3826 101.79 30.891C100.552 33.6512 97.95 35.0792 94.7134 35.0792C89.4458 35.0792 86.0828 31.43 86.0828 26.7015C86.0828 21.9729 89.5736 18.3237 94.5869 18.3237C99.221 18.3251 102.584 21.9117 102.584 26.7028ZM97.8462 24.99C97.3551 23.184 95.9564 22.5465 94.5563 22.5465C92.773 22.5465 91.5379 23.4076 91.0482 24.99H97.8462Z"
                  fill="white"
                />
                <path
                  d="M125.08 18.7699C125.651 18.7699 125.905 19.1186 125.747 19.6589L121.178 33.9696C121.052 34.4141 120.702 34.6363 120.259 34.6363H117.593H117.212C116.768 34.6363 116.419 34.4141 116.291 33.9696L114.606 28.6914L112.928 33.9696C112.802 34.4141 112.452 34.6363 112.009 34.6363H110.01H108.962C108.518 34.6363 108.169 34.4141 108.041 33.9696L103.473 19.6589C103.314 19.1199 103.568 18.7699 104.139 18.7699H107.566C108.011 18.7699 108.328 18.9602 108.455 19.4366L110.924 28.6368L112.723 22.801L111.72 19.6576C111.562 19.1186 111.814 18.7686 112.387 18.7686H114.862C115.307 18.7686 115.623 18.9908 115.751 19.4353L118.441 28.0992L120.766 19.4353C120.892 18.9589 121.178 18.7686 121.655 18.7686H125.08V18.7699Z"
                  fill="white"
                />
                <path
                  d="M140.182 24.6403V33.8432C140.182 34.3516 139.896 34.6364 139.389 34.6364H136.343C135.834 34.6364 135.549 34.3502 135.549 33.8432V33.3907C134.699 34.3862 133.449 35.0809 131.456 35.0809C128.664 35.0809 126.22 33.4306 126.22 30.1301C126.22 26.8296 128.664 25.1793 131.456 25.1793C133.449 25.1793 134.699 25.7423 135.549 26.3891V24.9571C135.549 23.4026 134.915 22.7039 133.582 22.7039C132.599 22.7039 131.996 23.0846 131.742 23.6235C131.552 24.0681 131.393 24.3209 130.917 24.3209H127.807C127.298 24.3209 126.981 24.0348 127.013 23.4958C127.426 20.0688 130.346 18.3228 133.582 18.3228C137.073 18.3254 140.182 20.3563 140.182 24.6403ZM135.549 30.1301C135.549 29.1466 134.692 28.5437 133.138 28.5437C131.678 28.5437 130.981 29.2105 130.981 30.1301C130.981 31.0497 131.679 31.7165 133.138 31.7165C134.692 31.7165 135.549 31.051 135.549 30.1301Z"
                  fill="white"
                />
                <path
                  d="M156.938 19.6916L151.766 34.0036C151.608 34.4162 151.321 34.6384 150.877 34.6384H148.211H147.45C147.006 34.6384 146.721 34.4162 146.561 34.0036L141.388 19.6916C141.198 19.1207 141.484 18.772 142.055 18.772H145.45C145.894 18.772 146.211 18.9942 146.339 19.4387L149.163 28.5365L151.987 19.4387C152.113 18.9942 152.431 18.772 152.876 18.772H156.303C156.874 18.7706 157.128 19.1193 156.938 19.6916Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Address */}
            <div className="flex flex-col justify-start text-white lg:pt-[2.2rem]">
              <a
                className="text-left text-lg cursor-pointer"
                href="tel:919876500000"
              >
                +919876500000
              </a>
              {/* <p className='text-left text-lg mt-[1.5rem]'>info@thewav.co</p> */}
              <a
                className="text-left text-lg mt-[1.25rem]"
                href="mailto: info@thewav.co"
              >
                info@thewav.co
              </a>
              <p className="text-left text-lg mt-[1.5rem]">
                TM 5/55 Nishikanan,
              </p>
              <p className="text-left text-lg ">Teghoria,Kolkata- 700157</p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Second Div...... */}
          <div className="flex flex-col lg:flex-row lg:pr-[12rem] xl:pr-[18rem] lg:pt-[10rem] lg:justify-between w-[50%]">
            {/* ======================================== */}
            {/* Home,Services,Projects,AboutUs,ContactUs */}
            {/* ======================================== */}
            <div className="flex flex-col">
              <a className="pb-[0.6rem] text-lg" href="/">
                Home
              </a>
              <a className="pb-[0.6rem] text-lg" href="#">
                Services
              </a>
              <a className="pb-[0.6rem] text-lg" href="#">
                About Us
              </a>
              <a className="pb-[0.6rem] text-lg" href="contact">
                Contact Us
              </a>
            </div>
            {/* ======================================== */}
            {/* Performance Marketing,Web Design,Branding */}
            {/* ======================================== */}
            <div className="flex flex-col">
              <a className="pb-[0.6rem] text-lg" href="/performance_marketing">
                Performance Marketing
              </a>
              <a className="pb-[0.6rem] text-lg" href="/branding">
                Digital Branding
              </a>
              <a className="pb-[0.6rem] text-lg" href="#">
                Social Media Marketing
              </a>
              <a className="pb-[0.6rem] text-lg" href="/uxui">
                UX/UI Design
              </a>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Logos (social media icons) */}
        <div className="flex flex-row justify-center pt-[3.5rem]">
          <a href="https://www.instagram.com/thewavco/" target="__blank">
            <img
              className="w-[22px] h-[30px] mr-[5.5rem] cursor-pointer hover:scale-105 transition-all duration-150"
              src={Instagram}
              alt="Social Media Icon"
            />
          </a>
          <a href="https://www.facebook.com/thewavco/" target="__blank">
            <img
              className="w-[22px] h-[30px] mr-[5.5rem] cursor-pointer hover:scale-105 transition-all duration-150"
              src={Facebook}
              alt="Social Media Icon"
            />
          </a>
          <a
            href="https://www.behance.net/thewavdigitalagency"
            target="__blank"
          >
            <img
              className="w-[25px] h-[35px] mr-[5.5rem] cursor-pointer hover:scale-105 transition-all duration-150"
              src={Behance}
              alt="Social Media Icon"
            />
          </a>
          <a href="https://in.linkedin.com/company/thewav" target="__blank">
            <img
              className="w-[22px] h-[30px] cursor-pointer hover:scale-105 transition-all duration-150"
              src={Linkedin}
              alt="Social Media Icon"
            />
          </a>
        </div>

        {/* Horizontal line passing along the bottom */}
        <div className="flex flex-row justify-center mt-[3.5rem] border-[#0049FA] border-b-[1px] mb-[3rem] mx-[14rem]"></div>

        {/* Copy Right */}
        <div className="text-center pb-[3rem]">
          <h1 className="text-[#BEBEBE] text-lg font-[400]">
            {props.copyright}
          </h1>
        </div>
      </footer>

      {/* ========================================================================================================================================================== */}
      {/* ============================================================================================ */}
      {/* Small and Medium Screen */}
      {/* ============================================================================================ */}
      <footer className="bg-[#080816] w-[100vw] text-white flex-col flex relative items-center lg:hidden">
        {/* Two div's in flex box */}
        <div className="flex flex-col">
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {/* First Div....... */}
          <div className="flex flex-col w-[100%]">
            {/* Logo */}
            <div className="pt-[3.25rem] flex items-center justify-center">
              {/* <h1 className='text-3xl font-[600] text-center'>thewav</h1> */}
              <svg
                width="120"
                height="40"
                viewBox="0 0 157 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.7361 23.5018C45.7361 36.1329 35.4952 46.3698 22.8681 46.3698C10.2356 46.3698 0 36.1329 0 23.5018C0 20.5513 0.558959 17.7285 1.57706 15.1374C2.21986 14.7221 3.03036 14.3907 4.01253 14.3748C13.1196 14.3748 13.2553 42.7885 19.0844 42.9708C23.6479 43.1186 19.4558 22.9055 23.9075 22.9055C26.4427 22.9055 30.0999 35.7802 32.4515 35.2732C34.348 34.8659 34.2642 24.0341 37.5128 23.0373C39.1018 22.5542 40.3994 23.9716 40.9863 24.7701C41.3656 25.2851 39.3134 14.1139 36.1034 14.3854C33.3685 14.617 33.4004 22.9415 30.9104 22.9295C29.0459 22.9215 27.3331 18.7653 26.1273 14.9364C24.5463 8.42985 23.2806 7.10032 22.4103 7.10831C20.3102 7.12428 18.4776 14.9457 17.8201 19.9164C16.9897 26.2167 18.1103 30.4169 16.9138 30.5393C13.9394 30.8068 16.4986 7.41307 11.3562 3.74391C14.7379 1.76759 18.6706 0.637695 22.8694 0.637695C35.4965 0.637695 45.7361 10.8733 45.7361 23.5018Z"
                  fill="white"
                />
                <path
                  d="M67.616 19.5638V22.5462C67.616 23.0546 67.3299 23.3394 66.8228 23.3394H65.0781V33.8425C65.0781 34.3509 64.7919 34.6357 64.2849 34.6357H61.1121C60.6037 34.6357 60.3189 34.3495 60.3189 33.8425V23.3394H58.5715C58.0631 23.3394 57.7783 23.0533 57.7783 22.5462V19.5638C57.7783 19.0554 58.0644 18.7706 58.5715 18.7706H60.3163V14.4865C60.3163 13.9782 60.6024 13.6934 61.1094 13.6934H64.2822C64.7906 13.6934 65.0754 13.9795 65.0754 14.4865V18.7706H66.8201C67.3299 18.7706 67.616 19.0567 67.616 19.5638Z"
                  fill="white"
                />
                <path
                  d="M83.8001 24.5767V33.8421C83.8001 34.3505 83.514 34.6353 83.0069 34.6353H79.8342C79.3258 34.6353 79.041 34.3492 79.041 33.8421V24.9893C79.041 23.4029 78.1214 22.7042 76.9143 22.7042C75.4863 22.7042 74.5973 23.4974 74.5973 25.3699V33.8421C74.5973 34.3505 74.3111 34.6353 73.8041 34.6353H70.6313C70.1229 34.6353 69.8381 34.3492 69.8381 33.8421V13.2165C69.8381 12.7081 70.1243 12.4233 70.6313 12.4233H73.8041C74.3125 12.4233 74.5973 12.7095 74.5973 13.2165V20.2195C75.3425 19.1162 76.6934 18.3257 78.7229 18.3257C81.6734 18.3257 83.8001 20.6108 83.8001 24.5767Z"
                  fill="white"
                />
                <path
                  d="M102.584 26.7028C102.584 27.1154 102.552 27.496 102.52 27.8766C102.456 28.385 102.14 28.6059 101.663 28.6059H97.7929H91.0668C91.6431 30.4917 93.1243 31.2397 94.7772 31.2397C95.6662 31.2397 96.5539 30.9229 97.1249 30.4465C97.4416 30.1923 97.6958 30.0339 98.1084 30.0339L101.155 30.002C101.726 30.002 102.044 30.3826 101.79 30.891C100.552 33.6512 97.95 35.0792 94.7134 35.0792C89.4458 35.0792 86.0828 31.43 86.0828 26.7015C86.0828 21.9729 89.5736 18.3237 94.5869 18.3237C99.221 18.3251 102.584 21.9117 102.584 26.7028ZM97.8462 24.99C97.3551 23.184 95.9564 22.5465 94.5563 22.5465C92.773 22.5465 91.5379 23.4076 91.0482 24.99H97.8462Z"
                  fill="white"
                />
                <path
                  d="M125.08 18.7699C125.651 18.7699 125.905 19.1186 125.747 19.6589L121.178 33.9696C121.052 34.4141 120.702 34.6363 120.259 34.6363H117.593H117.212C116.768 34.6363 116.419 34.4141 116.291 33.9696L114.606 28.6914L112.928 33.9696C112.802 34.4141 112.452 34.6363 112.009 34.6363H110.01H108.962C108.518 34.6363 108.169 34.4141 108.041 33.9696L103.473 19.6589C103.314 19.1199 103.568 18.7699 104.139 18.7699H107.566C108.011 18.7699 108.328 18.9602 108.455 19.4366L110.924 28.6368L112.723 22.801L111.72 19.6576C111.562 19.1186 111.814 18.7686 112.387 18.7686H114.862C115.307 18.7686 115.623 18.9908 115.751 19.4353L118.441 28.0992L120.766 19.4353C120.892 18.9589 121.178 18.7686 121.655 18.7686H125.08V18.7699Z"
                  fill="white"
                />
                <path
                  d="M140.182 24.6403V33.8432C140.182 34.3516 139.896 34.6364 139.389 34.6364H136.343C135.834 34.6364 135.549 34.3502 135.549 33.8432V33.3907C134.699 34.3862 133.449 35.0809 131.456 35.0809C128.664 35.0809 126.22 33.4306 126.22 30.1301C126.22 26.8296 128.664 25.1793 131.456 25.1793C133.449 25.1793 134.699 25.7423 135.549 26.3891V24.9571C135.549 23.4026 134.915 22.7039 133.582 22.7039C132.599 22.7039 131.996 23.0846 131.742 23.6235C131.552 24.0681 131.393 24.3209 130.917 24.3209H127.807C127.298 24.3209 126.981 24.0348 127.013 23.4958C127.426 20.0688 130.346 18.3228 133.582 18.3228C137.073 18.3254 140.182 20.3563 140.182 24.6403ZM135.549 30.1301C135.549 29.1466 134.692 28.5437 133.138 28.5437C131.678 28.5437 130.981 29.2105 130.981 30.1301C130.981 31.0497 131.679 31.7165 133.138 31.7165C134.692 31.7165 135.549 31.051 135.549 30.1301Z"
                  fill="white"
                />
                <path
                  d="M156.938 19.6916L151.766 34.0036C151.608 34.4162 151.321 34.6384 150.877 34.6384H148.211H147.45C147.006 34.6384 146.721 34.4162 146.561 34.0036L141.388 19.6916C141.198 19.1207 141.484 18.772 142.055 18.772H145.45C145.894 18.772 146.211 18.9942 146.339 19.4387L149.163 28.5365L151.987 19.4387C152.113 18.9942 152.431 18.772 152.876 18.772H156.303C156.874 18.7706 157.128 19.1193 156.938 19.6916Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Address */}
            <div className="flex flex-col items-center text-white lg:pt-[2.2rem] pt-14">
              <a className="text-left text-lg" href="tel:919876500000">
                +919876500000
              </a>
              <a
                className="text-left text-lg mt-[1.25rem]"
                href="mailto: info@thewav.co"
              >
                info@thewav.co
              </a>
              {/* <p className='text-left text-lg mt-[1.25rem]'>info@thewav.co</p> */}
              <p className="text-left text-lg mt-[1.25rem]">
                TM 5/55 Nishikanan,
              </p>
              <p className="text-left text-lg">Teghoria,Kolkata-700157</p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Second Div...... */}
          <div className="flex flex-col w-[100%]">
            {/* ======================================== */}
            {/* //?Home,Services,Projects,AboutUs,ContactUs */}
            {/* ======================================== */}
            <div className="flex flex-col pt-[4.25rem]">
              <a className="pb-[1.25rem] text-lg text-center" href="/">
                Home
              </a>
              <a className="pb-[1.25rem] text-lg text-center" href="#">
                Services
              </a>
              <a className="pb-[1.25rem] text-lg text-center" href="#">
                About Us
              </a>
              <a className="pb-[1.25rem] text-lg text-center" href="contact">
                Contact Us
              </a>
            </div>
            {/* ======================================== */}
            {/* //?Performance Marketing,Web Design,Branding */}
            {/* ======================================== */}
            <div className="flex flex-col items-center">
              <a className="pb-[1.25rem] text-lg" href="performance_marketing">
                Performance Marketing
              </a>
              <a className="pb-[1.25rem] text-lg" href="branding">
                Digital Branding
              </a>
              <a className="pb-[1.25rem] text-lg" href="#">
                Social Media Marketing
              </a>
              <a className="pb-[1.25rem] text-lg" href="uxui">
                UX/UI Design
              </a>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Logos (social media icons) */}
        <div className="flex flex-row justify-between pt-[5rem] w-[100vw] px-[3.84rem]">
          <a href="https://www.instagram.com/thewavco/" target="__blank">
            <img
              className="w-[24px] h-[32px] cursor-pointer"
              src={Instagram}
              alt="social Media Icons"
            />
          </a>
          <a href="https://www.facebook.com/thewavco/" target="__blank">
            <img
              className="w-[24px] h-[32px] cursor-pointer"
              src={Facebook}
              alt="social Media Icons"
            />
          </a>
          <a
            href="https://www.behance.net/thewavdigitalagency"
            target="__blank"
          >
            <img
              className="w-[24px] h-[32px] cursor-pointer"
              src={Behance}
              alt="social Media Icons"
            />
          </a>
          <a href="https://in.linkedin.com/company/thewav" target="__blank">
            <img
              className="w-[24px] h-[32px] cursor-pointer"
              src={Linkedin}
              alt="social Media Icons"
            />
          </a>
        </div>

        {/* Horizontal line passing along the bottom */}
        <div className="mt-[2.5rem] mb-[2.2rem] border-[#0049FA] border-b-[1px] mx-auto w-[85%]"></div>

        {/* Copy Right */}
        <div className="text-center pb-[2.3rem]">
          <h1 className="text-[#BEBEBE] text-base font-[300]">
            {props.copyright}
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
