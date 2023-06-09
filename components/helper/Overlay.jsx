import React from "react";

const Overlay = (props) => {
  return (
    <div
      style={{ backgroundImage: `${props.url ? `url(${props.url})` : ""}` }}
      className={` ${
        props.gradient && props.gradient
      } relative leading-10 flex justify-center items-center bg-no-repeat bg-fixed object-contain bg-cover bg-center h-[300px]`}
    >
      <div className="absolute w-full z-0 rounded-md bg-[#01366a]/30 group-hover:bg-[#01366a]/50 transition-all ease-in-out duration-300 left-0 top-0 h-full" />
      <h1 className="md:text-5xl text-3xl text-center  text-white z-10 font-bold uppercase">
        {props.text}
      </h1>
    </div>
  );
};

export default Overlay;
