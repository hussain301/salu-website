
import React from "react";

const Heading = (props) => {
  const { className } = props;
  return (
     <h1 className={`${className} md:text-5xl py-3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent  text-3xl text-center font-bold capitalize `}>
        {props.title}
      </h1>
  );
};

export default Heading;
