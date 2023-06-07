import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-gradient-to-r space-y-1 md:space-y-5  from-sky-400 flex justify-center items-center flex-col pb-5 to-blue-500 my-20 pt-2  md:my-5 w-full md:h-[90vh] h-[50vh] ">
      <div className="text-center space-y-1 md:space-y-5">
        <h1 className="text-white font-bold uppercase text-2xl md:text-4xl">
          Reach Us
        </h1>
        <h3 className="font-medium text-white">
          Send Us Query or Get Connected With US!
        </h3>
      </div>
      <div className=" w-full flex justify-center items-center">
        <iframe
          src="https://maps.google.com/maps?q=Administration%20Block%20Shah%20Abdul%20Latif%20Uni&t=m&z=16&output=embed&iwloc=near"
          className="w-full h-60 md:h-96"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
          aria-label="Administration Block Shah Abdul Latif University"
          title="Administration Block Shah Abdul Latif University"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
