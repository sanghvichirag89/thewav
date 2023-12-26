import React, { useState } from "react";
import HeroButton from "../../../reusable/Buttons/HeroButton";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  //? Checkbox inputs....

  var [array, setArray] = useState([]);

  const checkValue = (e) => {
    var value = e.target.value;
    if (!array.includes(value)) {
      setArray((array) => [...array, value]);
    }
    if (array.includes(value)) {
      setArray(removeValue(array, value));
    }
  };

  const removeValue = (array, value) => {
    return array.filter((ele) => {
      console.log("I am inside Filter method");
      return ele !== value;
    });
  };

  console.log(array);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let optionString = "";
    array.map((el) => (optionString += `&entry.1491438721=${el}`));

    console.log(name, email, phone, companyWebsite, optionString);
    try {
      const r = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8JFTcXmM8fVUWqs8M5kmjsNa-ZVVZZVb6H4JzJyefUfhZaA/formResponse" +
          new URLSearchParams({
            "entry.373959285": name,
            "entry.1725679872": email,
            "entry.372876292": phone,
            "entry.1783214788": companyWebsite,
          }) +
          optionString,
        {
          method: "POST",
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form className="w-[100%]" action="#">
        {/* //* Your name Field... */}
        <div className="pt-[0rem]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-base font-bold text-[#080816]"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-[#FFFFFF] tracking-wide font-semibold border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* //* Email Field... */}
        <div className="pt-6 lg:pt-[2.2rem]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-base font-bold text-[#080816]"
          >
            Email Address
          </label>
          <input
            type="email"
            id=""
            className="peer tracking-wide bg-[#FFFFFF] font-semibold border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="z-10 mt-1 invisible peer-invalid:visible text-[#CE0202] text-sm">
            Please enter a valid email address.
          </p>
        </div>

        {/* //* Phone Number Field... */}
        <div className="lg:pt-[.8rem]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-base font-bold text-[#080816]"
          >
            Phone Number
          </label>
          <input
            type="text"
            pattern="^\+?\d{0,13}"
            id=""
            className="bg-[#FFFFFF] tracking-wide font-semibold border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* //* Company Website Field... */}
        <div className="pt-6 lg:pt-[2.2rem]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-base font-bold text-[#080816]"
          >
            Company Website
          </label>
          <input
            type="text"
            id=""
            className="bg-[#FFFFFF] tracking-wide font-semibold border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black"
            placeholder="Enter your Company&#8217;s website"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </div>

        {/* //* Check Box.... */}
        <div className="pt-6 lg:pt-[2.2rem]">
          <div className="flex justify-center flex-col">
            <h2 className="mb-3 text-base font-bold">
              What service(s) are you interested in?
            </h2>

            {/* //?Checkbox 01 */}
            <label
              className={`pl-4 border py-4 tracking-wide lg:py-[.89rem] inline-block text-gray-800 text-base font-[700] lg:text-sm lg:font-semibold active:text-[#0049FA] rounded mb-[.375rem] lg:hover:text-[#0049FA] lg:hover:border-[#0049FA] duration-500 transition-all ease-in-out ${
                array.includes("checkbox1") ? "text-blue-700" : "text-gray-800"
              }`}
              htmlFor="checkbox1"
            >
              Performance Marketing
              <input
                className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition-colors duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
                type="checkbox"
                value="Performance Marketing"
                id="checkbox1"
                onChange={checkValue}
                onSelect={(e) => console.log(e.target.value)}
              />
            </label>

            {/* //?Checkbox 02 */}
            <label
              className={`pl-4 border py-4 tracking-wide lg:py-[.89rem] inline-block text-gray-800 text-base font-[700] lg:text-sm lg:font-semibold active:text-[#0049FA] rounded mb-[.375rem] lg:hover:text-[#0049FA] lg:hover:border-[#0049FA] duration-500 ease-in-out ${
                array.includes("checkbox2") ? "text-blue-700" : "text-gray-800"
              }`}
              htmlFor="checkbox2"
            >
              Social Media Marketing
              <input
                className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
                type="checkbox"
                value="Social Media Marketing"
                id="checkbox2"
                onChange={checkValue}
              />
            </label>

            {/* //?Checkbox 03 */}
            <label
              className={`pl-4 border py-4 tracking-wide lg:py-[.89rem] inline-block text-gray-800 text-base font-[700] lg:text-sm lg:font-semibold active:text-[#0049FA] rounded mb-[.375rem] lg:hover:text-[#0049FA] lg:hover:border-[#0049FA] duration-500 ease-in-out  ${
                array.includes("checkbox3") ? "text-blue-700" : "text-gray-800"
              }`}
              htmlFor="checkbox3"
            >
              SEO
              <input
                className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
                type="checkbox"
                value="SEO"
                id="checkbox3"
                onChange={checkValue}
              />
            </label>

            {/* //?Checkbox 04 */}
            <label
              className={`pl-4 border py-4 tracking-wide lg:py-[.89rem] inline-block text-gray-800 text-base font-[700] lg:text-sm lg:font-semibold active:text-[#0049FA] rounded mb-[.375rem] lg:hover:text-[#0049FA] lg:hover:border-[#0049FA] duration-500 ease-in-out  ${
                array.includes("checkbox4") ? "text-blue-700" : "text-gray-800"
              }`}
              htmlFor="checkbox4"
            >
              Web Design
              <input
                className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
                type="checkbox"
                value="checkbox4"
                id="checkbox4"
                onChange={checkValue}
              />
            </label>

            {/* //?Checkbox 05 */}
            <label
              className={`pl-4 border py-4 tracking-wide lg:py-[.89rem] inline-block text-gray-800 text-base font-[700] lg:text-sm lg:font-semibold active:text-[#0049FA] rounded mb-[.375rem] lg:hover:text-[#0049FA] lg:hover:border-[#0049FA] duration-500 ease-in-out  ${
                array.includes("checkbox5") ? "text-blue-700" : "text-gray-800"
              }`}
              htmlFor="checkbox5"
            >
              Branding
              <input
                className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer"
                type="checkbox"
                value="Branding"
                id="checkbox5"
                onChange={checkValue}
              />
            </label>
          </div>
        </div>

        {/* //!large Screen */}
        <div className="hidden lg:block text-white pt-[2rem]">
          <button
            className="w-[12rem] group text-base flex flex-row items-center transition-all hover:bg-white hover:text-[#0049FA] bg-[#0049FA] py-[.8rem] px-2 rounded-sm overflow-hidden"
            onClick={handleSubmit}
          >
            <svg
              className="mr-3 mb-1 transition-all -translate-x-6 group-hover:translate-x-8 duration-200 ease-in-out"
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
            <span className="transform font-medium text-[1.1rem] transition-all group-hover:translate-x-4 duration-200 group-hover:font-bold ease-in-out pl-2">
              Get in Touch
            </span>
            <svg
              className="ml-2 mb-1 transition-all group-hover:translate-x-7 duration-200 ease-in-out group-hover:opacity-0"
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

        {/* //!Small Screen */}
        <div className="lg:hidden text-white pt-[3rem]">
          <button
            className="text-[.99rem] flex flex-row items-center justify-center bg-[#0049FA] w-full rounded-sm py-4"
            onClick={handleSubmit}
          >
            Get in Touch
            <svg
              className="ml-2 mb-1"
              width="18"
              height="18"
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
      </form>
    </>
  );
};

export default Form;
