//* Imports >>>>>>
import React from "react";
import BlogsAndArticles from "./Sections/BlogsAndArticles";
import GetFreeAudit from "./Sections/GetFreeAudit";
import Hero from "./Sections/Hero";
import WhatWeDo from "./Sections/WhatWeDo";

//* Landing page Wrapper/Exporter.....

const Landing = () => {
  const formRef = React.useRef(null);

  const getClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <Hero onClick={getClick} />
      <WhatWeDo />
      <BlogsAndArticles />
      <div className="box-border" ref={formRef}>
        <GetFreeAudit></GetFreeAudit>
      </div>
    </>
  );
};

export default Landing;
