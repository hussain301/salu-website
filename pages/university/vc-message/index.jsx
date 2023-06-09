import React from "react";
import { fetchVcMsg } from "../../../utils";
import { urlFor } from "../../../sanity";

const index = ({ fetchVC }) => {
  return (
    <section className="mdp-10 bg-green-400">
      <div
        className="flex flex-col lg:flex-row py-10 lg:pr-14  bg-gray-100  lg:items-center items-center
              justify-center "
      >
        <div className="lg:w-3/4 leading-relaxed w-full p-5 md:p-10 gap-10 bg-gray-100">
          <h1 className="text-2xl md:text-3xl text-[#111644] mb-5 font-bold">
            Vice Chancellors message
          </h1>
          <p>{fetchVC[0].vcfullmessage}</p>
        </div>
        <div className="flex flex-col justify-start gap-3 p-5 md:p-0">
          <img
            className="object-contain  max-w-full rounded-lg w-auto"
            src={urlFor(fetchVC[0].profileImage).url()}
            alt="vc profile picture"
          />
          <h2 className="text-[#111644] font-bold text-xl">
            {fetchVC[0].vctitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default index;

export const getStaticProps = async () => {
  const fetchVC = await fetchVcMsg();
  return {
    props: {
      fetchVC: fetchVC,
    },
    revalidate: 60, //that is 24 hours
  };
};
