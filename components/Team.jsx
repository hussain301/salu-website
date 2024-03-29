import React from "react";

const Team = ({ cols = 5, title = "some title", teamData = null }) => {
  return (
    <>
      {/* Team */}
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 ">Creative people</p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div
          className={`grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${cols} gap-8 md:gap-12`}
        >
          {teamData?.map((item, index) => (
            <div key={index} className="text-center">
              <img
                className="rounded-full w-24 h-24 mx-auto"
                src={item.image}
                alt={item.name}
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 ">{item.name}</h3>
                <p className="text-sm text-gray-600 ">{item.designation}</p>
                {item?.email && (
                  <p className="text-xs break-words md:break-normal text-gray-600 ">
                    {item.email}{" "}
                  </p>
                )}
              </div>
            </div>
          ))}
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </>
  );
};

export default Team;
