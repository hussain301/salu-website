import Image from 'next/image'
import React from 'react'
import { fetchVcMsg } from '../utils/fetchVcMsg'
import Button from './helper/Button'

export const Vcmsg = ({ fetchVCMsg }) => {
    return (
        <div className=' text-gray-600 container mx-auto'>
            <div className='flex md:flex-row gap-5 flex-col items-center p-5 px-14 '>
                <div className='sm:px-5 flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold  text-[#01366a]'>Message from Vice Chancellor </h1>
                    <hr className='w-[30%]' />
                    <p className='md:text-lg text-[16px] leading-relaxed  md:mt-5'>
                        {fetchVCMsg}
                    </p>
                    <div>
                        <Button>Read More</Button>
                    </div>
                </div>
                <Image src='/Vice-Chancellor.jpg' width={200} height={100} className='md:w-[500px] md:h-[300px] object-cover rounded-md  ' />
            </div>
        </div>





    )
}


