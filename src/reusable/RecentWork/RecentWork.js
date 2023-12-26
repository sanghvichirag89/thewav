import React from 'react'

const RecentWork = (props) => {
    const {item} = props;
  return (
    <>
        {/* //! Card */}
        <div className='flex flex-col items-start lg:w-[33%] md:px-[8rem] lg:px-[0rem] lg:hover:-translate-y-[4px] transition-all duration-700 ease-out recentWorksAnimation'>
            {/* //*........Image */}
            <img src={item.image} alt="Recent Work images..." className='object-cover rounded-lg lg:rounded-t-lg lg:rounded-b-none md:w-[100%] pointer-events-none'/>
            {/* //*.......Text */}
            <div className='flex flex-col justify-start items-start'>

                <h3 className='text-sm md:text-xs font-semibold mt-[1rem]'>{item.miniHeader}</h3>

                <h1 className='text-xl md:text-lg font-bold mt-[.8rem]'>{item.header}</h1>

                <p className='text-sm text-[#5E5E5E] mt-[.8rem] pr-[1rem] lg:pr-[3rem]'>{item.para}</p>
                
                <div className='pt-6 pb-4'>
                    <a href={item.LinkTo}>
                    <button className='group flex flex-row items-center ml-[-2rem] text-[#0049FA] text-sm font-[500] w-[10rem] overflow-hidden'>
                        <svg className='ml-2 transition-all translate-x-1 group-hover:translate-x-7 opacity-0 group-hover:opacity-100 duration-200 ease-in-out' width="14" height="14" viewBox="0 0 18 19" fill="none">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                            <span className=' group-hover:translate-x-6 transition-all inline-block w-[8.5rem] ml-3 duration-300 ease-in-out font-semibold'>View Case Study</span>  
                        <svg className='ml-1 mr-2 group-hover:translate-x-8 transition-all group-hover:opacity-0 duration-200 ease-in-out' width="14" height="14" viewBox="0 0 18 19" fill="none">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                    </button>
                    </a>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default RecentWork