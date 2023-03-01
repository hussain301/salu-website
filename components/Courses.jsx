import React from 'react'

const Courses = () => {

    const courses = ['Art & Design', 'Business', 'Computer Science', 'Language Learning', 'Social Sciences', 'Web Development','Media studies']

    return (
        <div className='bg-0 w-full h-1/4 z-10  '>
            <h3 className='uppercase mt-5 font-semibold text-white tracking-widest'>Find a Course of your choice</h3>
            <ul
                className='flex p-5 flex-wrap gap-1 h-full justify-center items-start'
            >{courses.map(course => <li className='border rounded-sm -hue-rotate-30 filter border-green-500  cursor-pointer md:p-2  text-white py-1 px-2 md:text-xl' >{course}</li>)}</ul>
        </div>
    )
}

export default Courses