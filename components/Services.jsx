import Link from 'next/link'
import React from 'react'

const Services = () => {
    const services = [
        { title: 'DLSEI', buttonLink: 'https://salu.edu.pk/dlsei/', url: 'https://salu.edu.pk/wp-content/uploads/2022/01/dlsei-logo.png', description: 'DLSEI intends to provide an opportunity to students and faculty members', },
        { title: 'HEC DIGITAL LIBRARY', buttonLink: 'http://www.digitallibrary.edu.pk/shahlatifuni.html', url: 'https://salu.edu.pk/wp-content/uploads/2021/04/HEC-Digital-Library-A-16-07-1024x640-1.jpg', description: 'E-books that will allow researchers and students to use books electronically in a variety of areas.', },
        { title: 'SALU WEBMAIL', buttonLink: 'http://mail.salu.edu.pk/', url: 'https://salu.edu.pk/wp-content/uploads/2021/04/webmail.jpg', description: 'A complete and professional Cloud Suite to manage, work and collaborate with your Emails.', },
        { title: 'TURNITIN', buttonLink: 'http://www.turnitin.com/', url: 'https://salu.edu.pk/wp-content/uploads/2021/04/turnitin.jpg', description: 'Academic integrity, streamline grading, deter plagiarism, and improve student outcomes.', },
    ]
    return (
        <div className='mt-20 container mx-auto'>
            <div className='bg-gray-50 text-center p-2'>
                <h1 className='text-[#01366a] font-bold uppercase text-2xl'>IT services</h1>
            </div>
            <div className='grid grid-cols-1   justify-items-center lg:px-20 w-full lg:grid-cols-4 -5 sm:p-10 bg-gray-100 md:grid-cols-2 gap-4 py-10 px-5'>
            {services.map((service, i) => {
                return (
                    <div key={i} class="flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white md:w-full border w-[95%] sm:w-[80%] shadow-sm rounded-xl">
                        <img class="w-full aspect-video duration-500 group-hover:scale-110 group-hover:h[40%] transition-all h-[50%] rounded-t-xl" src={service.url} alt="Image Description" />
                        <div class="p-4 border-t  md:p-5">
                            <h3 class="text-lg font-bold text-gray-800 ">
                                {service.title}
                            </h3>
                            <p class="mt-1 text-gray-800 ">
                                {service.description}
                            </p>
                            <Link target='_blank' class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm " href={service.buttonLink}>
                                Access Now
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Services