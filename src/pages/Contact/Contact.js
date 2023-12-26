import React from 'react';
import Logos from './Sections/Logos';
import { Hero } from './Sections/Hero';
import Content from './Sections/Content';
import End from './Sections/End';





const Contact = () => {

  const formRef = React.useRef(null)
  
  const getClick = () =>{
    formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  
  return (
    <>
      <Hero onClick={getClick}/>
      <Logos/>
      <div className='box-border' ref={formRef}>
        <Content/>
      </div>
      <End/>
    </>
  )
}

export default Contact