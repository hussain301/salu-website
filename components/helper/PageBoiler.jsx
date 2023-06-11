import React from "react";
import Heading from "./Heading";

const PageBoiler = ({pageContent}) => {
  return (
   <div className="md:mx-28 mx-5">
        {pageContent.map((item, index) => (
          <div key={index}>
            <h2 className="text-lg text-headingPrimary mb-1">
              <strong>{item.title}</strong>
            </h2>
            <p dir="ltr" className={`${item?.title==='PROGRAMS OFFERD' ? 'mx-5':''} mb-4`}>
            {item.text.map((text, index) => (
           <> <span key={index}>  {text} </span><br /></>
            ))}</p>
          </div>
        ))}
      </div>
    )
     
        
};

export default PageBoiler;
