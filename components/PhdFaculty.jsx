import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor } from "../sanity";
import { useState } from "react";

const PhdFaculty = ({ teachers }) => {
  return (
    <div className="bg-gray-50 md:pb-10 md:pt-5">
      <div className="lg:px-32 md:px-10 px-2">
        <div className="rounded-t-md text-center p-2 mb-2">
          <h1 className="text-[#01366a] font-bold uppercase text-2xl">
            Phd Faculty
          </h1>
        </div>
        <Swiper
          // install Swiper module
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination
          navigation={true}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {teachers.map((teacher, index) => {
            return (
              <SwiperSlide
                className="select-none cursor-pointer flex items-center"
                key={index}
              >
                {" "}
                <div className="flex flex-col justify-center  p-6  rounded-xl sm:px-12 bg-gray-100 tet-gray-100 text-blue-900">
                  <img
                    src={urlFor(teacher.image).url()}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full bg-gray-900 aspect-square"
                  />
                  <div className="space-y-4 text-center ">
                    <div className="my-2 space-y-1">
                      <h2 className="text-sm 2xl:hover:text-2xl font-semibold ">
                        {teacher.name}
                      </h2>
                      <p className="px-5 text-xs sm:text-sm text-gray-400">
                        {teacher.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PhdFaculty;
