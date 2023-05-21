import Image from 'next/image'
import React from 'react'

import Button from './helper/Button'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { urlFor } from '../sanity'
import Link from 'next/link'

export const Vcmsg = ({ vcInfo }) => {
    return (
        <div className=' text-gray-600 p-5 lg:p-8 '>
            <div className='flex mx-auto container md:flex-row gap-5 flex-col items-center p-6 '>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold  text-[#01366a]'>Message from Vice Chancellor </h1>
                    <hr className='w-[30%]' />
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='md:text-base text-[#111644] xl:text-lg leading-relaxed'>
                        {vcInfo[0].vcmessage}
                    </motion.p>
                    <div>
                        <Button><Link href='/vc-message'>Read More</Link></Button>
                    </div>
                </div>
                <img src={urlFor(vcInfo[0].profileImage).url()} className='md:w-[500px] md:h-[300px] object-cover rounded-md  ' />
            </div>
        </div>





    )
}


