import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [adSpends, setAddSpends] = useState("");
  const [state, handleSubmit] = useForm("xbjeaebv");

  return (
    <form className="lg:px-[2rem]" onSubmit={handleSubmit}>
      {/* Your name Field... */}
      <div className="pt-[0rem]">
        <label
          htmlFor="large-input"
          className="block mb-2 text-base font-semibold text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202]"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
      </div>

      {/* Email Field... */}
      <div className="pt-[2.2rem]">
        <label
          htmlFor="large-input"
          className="block mb-2 text-base font-semibold text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          id=""
          className="peer bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202]"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <p className="z-10 mt-1 invisible peer-invalid:visible text-[#CE0202] text-sm">
          Please enter a valid email address.
        </p>
      </div>

      {/* Phone Number Field... */}
      <div className="pt-[0.8rem]">
        <label
          htmlFor="large-input"
          className="block mb-2 text-base font-semibold text-white"
        >
          Phone Number
        </label>
        <input
          type="text"
          pattern="^\+?\d{0,13}"
          id=""
          className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202]"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phoneNumber"
        />
      </div>

      {/* Company Website Field... */}
      <div className="pt-[2.2rem]">
        <label
          htmlFor="large-input"
          className="block mb-2 text-base font-semibold text-white"
        >
          Company Website
        </label>
        <input
          type="text"
          id=""
          className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text "
          placeholder="Enter your Company&#8217;s website"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
          name="companyWebsite"
        />
      </div>

      {/* Monthly ad spends Field... */}
      <div className="pt-[2.2rem]">
        <label
          htmlFor="large-input"
          className="block mb-2 text-base font-semibold text-white"
        >
          Monthly Ad Spends(INR)
        </label>
        <input
          type="text"
          id=""
          className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text"
          placeholder="Enter your Monthly Ad Spends(INR)"
          value={adSpends}
          onChange={(e) => setAddSpends(e.target.value)}
          name="monthlySpends"
        />
      </div>

      {/* large Screen */}
      <div className="hidden lg:block text-white pt-[3rem]">
        <button
          className="w-[14rem] group text-base flex flex-row items-center transition-all hover:bg-white hover:text-[#0049FA] bg-[#0049FA] py-3 px-5 rounded-sm overflow-hidden"
          onClick={handleSubmit}
        >
          <svg
            className="mr-2 transition-all -translate-x-6 group-hover:translate-x-4 duration-200 ease-in-out"
            width="16"
            height="16"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z"
              fill="#0049FA"
            />
          </svg>
          <span className="transform transition-all group-hover:translate-x-4 duration-200 ease-in-out pt-1 font-medium group-hover:font-bold">
            Get Free Audit
          </span>
          <svg
            className="ml-2 transition-all group-hover:translate-x-7 duration-200 ease-in-out group-hover:opacity-0"
            width="16"
            height="16"
            viewBox="0 0 21 22"
            fill="none"
          >
            <path
              d="M10.2305 0.804688L9.29297 1.69531C9.05859 1.92969 9.05859 2.30469 9.29297 2.49219L16.5586 9.75781H0.574219C0.246094 9.75781 0.0117188 10.0391 0.0117188 10.3203V11.6328C0.0117188 11.9609 0.246094 12.1953 0.574219 12.1953H16.5586L9.29297 19.5078C9.05859 19.6953 9.05859 20.0703 9.29297 20.3047L10.2305 21.1953C10.418 21.4297 10.793 21.4297 11.0273 21.1953L20.8242 11.3984C21.0586 11.1641 21.0586 10.8359 20.8242 10.6016L11.0273 0.804688C10.793 0.570312 10.418 0.570312 10.2305 0.804688Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      {/* Small Screen */}
      <div className="lg:hidden text-white pt-[3rem]">
        <button
          className="text-base flex flex-row items-center justify-center bg-[#0049FA] w-full rounded-sm py-4"
          m
          type="submit"
        >
          Get Free Audit
        </button>
      </div>
    </form>
  );
};

export default Form;
