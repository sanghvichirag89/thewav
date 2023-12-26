import React from "react";

const HeroButton = (props) => {
  return (
    <>
      {props.name.split(" ").includes("free") ? (
        <>
          {/* //! 'Get free audit' button... */}
          <button className="w-[12rem] group text-base flex flex-row items-center transition-all hover:bg-white hover:text-[#0049FA] bg-[#0049FA] py-3 px-5 rounded-sm overflow-hidden">
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

            <span className="-ml-2 group-hover:ml-0 transform transition-all group-hover:translate-x-4 font-[500] lg:font-[600] group-hover:font-bold duration-200 ease-in-out text-white group-hover:text-[#0049FA] pt-1">
              {props.name}
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
        </>
      ) : (
        <>
          {/* //! 'Get in Touch' button... */}
          <button className="w-[12rem] group text-base flex flex-row items-center transition-all hover:bg-white hover:text-[#0049FA] bg-[#0049FA] py-3 px-5 rounded-sm overflow-hidden">
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

            <span className="ml-0 group-hover:ml-0 transform transition-all group-hover:translate-x-4 font-[500] lg:font-[600] group-hover:font-bold duration-200 ease-in-out text-white group-hover:text-[#0049FA] pt-1">
              {props.name}
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
        </>
      )}
    </>
  );
};

export default HeroButton;
