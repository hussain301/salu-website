import { Navigation,Pagination, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const PhdFaculty = () => {
    const slides = [
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
        { url: 'https://salu.edu.pk/wp-content/uploads/2021/03/DSC_0006-scaled-e1628439743922-150x150.jpg' },
    ]
    return (
        <div className='bg-gray-50 md:pb-10 md:pt-5'>
            <div className='lg:px-32 md:px-10 px-2'>
                <div className='rounded-t-md text-center p-2 mb-2'>
                    <h1 className='text-[#01366a] font-bold uppercase text-2xl'>Phd Faculty</h1>
                </div>
                <Swiper
                    // install Swiper module
                    modules={[Navigation,Pagination, Keyboard, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination
                    navigation={true}
                    keyboard={{ enabled: true, }}
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
                    {slides.map((slide, index) => {
                        return (<SwiperSlide className='select-none flex items-center' key={index}> <div className="flex flex-col justify-center  p-6  rounded-xl sm:px-12 bg-gray-100 tet-gray-100 text-blue-900">
                            <img src={slide.url} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                            <div className="space-y-4 text-center ">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl 2xl:hover:text-2xl font-semibold ">Leroy Jenkins</h2>
                                    <p className="px-5 text-xs sm:text-sm text-gray-400">Phd Prof. Dr</p>
                                </div>

                            </div>
                        </div></SwiperSlide>)
                    })
                    }
                </Swiper>
            </div>
        </div>

    )

}





export default PhdFaculty