import React from "react";

const Button = (props) => {
  const classes = props.className;
  return (
    <button
      {...props}
      className={`${classes} bg-[#1a4a79] text-white px-5  py-2 transition-all duration-300 hover:bg-[#01366a]`}
    >
      {props.children}
    </button>
  );
};







export default Button;

