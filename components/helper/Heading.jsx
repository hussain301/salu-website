import { ClassNames } from "@emotion/react";
import React from "react";

const Heading = (props) => {
  const { classNames } = props;
  return (
    <h1
      className={`${classNames} text-3xl font-bold  uppercase text-headingPrimary`}
    >
      {props.text}
    </h1>
  );
};

export default Heading;
