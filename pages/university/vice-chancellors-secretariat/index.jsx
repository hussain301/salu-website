import React from "react";
import { Heading } from "../../../components";

const index = () => {
  return (
    <>
      <div className=" space-y-2 px-14 py-5 bg-gray-100 sm:ml-10 mb-10">
        <Heading classNames="my-5" text="vice chancellor's secretariat" />
        <h2 className="font-bold text-lg">Vice Chancellor</h2>
        <p className="font-semibold text-headingPrimary">
          Prof. Dr. Khalil Ahmed Ibupoto
          <br />
          vc@salu.edu.pk
        </p>
        <h2 className="font-bold text-lg">Secretary to Vice Chancellor</h2>
        <p className="font-semibold text-headingPrimary">
          Mr. Zohaib Shafqat Memon
          <br />
          secretary.vc@salu.edu.pk
        </p>
        <h2 className="font-bold text-lg">PA to Vice Chancellor</h2>
        <p className="font-semibold text-headingPrimary">
          0243-9280061-62
          <br />
          Fax: 9280060
          <br />
          Ms. Shazia Solangi
        </p>
      </div>
    </>
  );
};

export default index;
