import React from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../../sanity";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ direction = "horizontal", events }) => {
  return (
    <div className="md:bg-[#01366a]  bg-gray-50 md:py-5 md:pb-7 ">
      <div className="lg:px-20 md:px-10 px-2">
        <div className="rounded-t-md text-center p-2">
          <h1 className="md:text-white text-[#01366a] font-bold uppercase text-2xl">
            OUR EVENTS
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          direction={direction}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Keyboard, Pagination, Navigation]}
          className="mySwiper  rounded-md"
        >
          {events.map((event, index) => {
            return (
              <SwiperSlide className="select-none " key={index}>
                {" "}
                <img
                  className=" aspect-video w-full h-full"
                  src={urlFor(event.image).url()}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
