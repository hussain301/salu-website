import React from 'react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    { url: '/car1.jpg' },
    { url: '/car2.png' },
    { url: '/hero.png' },
    {
        url:
            'https://salu.edu.pk/wp-content/uploads/2023/01/eec4f612-4055-4b57-848b-3b38596a9698-1024x379.jpg',
    },
    {
        url:
            'https://salu.edu.pk/wp-content/uploads/2022/10/IMG-20221026-WA0255-1024x768.jpg',
    },
    {
        url:
            'https://salu.edu.pk/wp-content/uploads/2022/12/IMG-20221229-WA0099-1024x682.jpg',
    },

    {
        url:
            'https://salu.edu.pk/wp-content/uploads/2022/02/IMG-20220223-WA0081-1024x398.jpg',
    },
    {
        url:
            'https://salu.edu.pk/wp-content/uploads/2022/10/caa2029d-5a34-42e3-ae96-def54c259067-1024x768.jpg',
    },
]
const Crousel = ({ direction = 'horizontal' }) => {
    return (
        <div className='md:bg-[#01366a]  bg-gray-50 md:py-10'>
            <div className='lg:px-20 md:px-10 px-2'>
                <div className='rounded-t-md text-center p-2'>
                    <h1 className='md:text-white text-[#01366a] font-bold uppercase text-2xl'>OUR EVENTS</h1>
                </div>
                <Swiper
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
                    {slides.map((slide, index) => {
                        return (<SwiperSlide className='select-none ' key={index}> <img className=' aspect-video w-full h-full' src={slide.url} /></SwiperSlide>)
                    })
                    }
                </Swiper>
            </div>
        </div>

    )
}

export default Crousel