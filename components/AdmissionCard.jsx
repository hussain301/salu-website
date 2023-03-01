import React from 'react'
import { FaCheckDouble, FaHamburger } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import Link from 'next/link'

const AdmissionCard = () => {
    const data = [
        { title: 'Procedure & Eligibility Criteria', url: 'https://salu.edu.pk/wp-content/uploads/2021/03/first.png', icon: <FaHamburger /> },
        { title: 'Scholarships & Financial Support', url: 'https://salu.edu.pk/wp-content/uploads/2021/03/WhatsApp-Image-2021-02-15-at-8.46.21-PM.jpeg', icon: <IoSchool /> },
        { title: 'Semester Rules & Regulations', url: 'https://salu.edu.pk/wp-content/uploads/2021/03/salupic.jpeg', icon: <FaCheckDouble /> },
    ]
    return (
        <section className={`w-full relative  text-center my-5`}>
            <div className='bg-gray-50 p-2'>
                <h1 className='text-[#01366a] font-bold uppercase text-2xl'>Admissions</h1>
            </div>
            <div className="bg-[#F3F4F6] flex md:p-10 pb-10 pt-5  lg:px-20 justify-center">

                <div className='flex flex-col md:flex-row justify-center w-full  md:w-auto mx-auto gap-5'>
                    {data.map((item, i) => {
                        return (<div style={{ backgroundImage: `url(${item.url})` }} className='lg:w-[300px] lg:h-[470px] group xl:w-[370px] xl:h-[450px] relative flex items-center justify-center rounded-md md:w-[280px] mx-auto h-[350px] w-[90%] bg-cover bg-center '>
                            <div className='absolute w-full z-0 rounded-md bg-[#01366a]/30 group-hover:bg-[#01366a]/50 transition-all ease-in-out duration-300 left-0 top-0 h-full' />

                            <div className='z-10 p-5  relative'>
                                <div className='flex flex-col items-center gap-5 justify-center text-3xl font-bold text-white'>
                                    <span className='text-5xl'>{item.icon}</span>
                                    <Link href='/home'>{item.title}</Link>
                                </div>
                            </div>
                        </div>)
                    })
                    }
                </div>
            </div>
        </section>


    )
}

export default AdmissionCard