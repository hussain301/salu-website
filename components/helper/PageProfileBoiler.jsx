import React from "react";
import Heading from "./Heading";

const PageProfileBoiler = (props) => {
  return (
    <>
      <Heading title={props.title} />

      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 my-10 p-10 flex flex-col justify-center items-center space-y-8">
        <img
          width={236}
          height={264}
          className="rounded-md"
          src={props.image}
          alt={props.name}
        />
        <p className="text-center leading-loose">
          <span className="block text-white text-xl font-bold">
            {props.name}
          </span>
          <span className="block text-white text-xl font-medium">
            {props.designation}
          </span>
          <span className="block text-white text-xl ">{props.email}</span>
        </p>
      </div>
    </>
  );
};

export default PageProfileBoiler;
