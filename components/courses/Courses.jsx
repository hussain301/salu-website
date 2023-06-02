import Link from 'next/link'
import React from 'react'

const Courses = () => {

    const courses = ['Art & Language', 'Education', 'Management Science', 'Social Sciences', 'Natrual Sciences', 'Law','Physical Sciences','IT']

    return ( <div className='bg-[#151C55] py- md:p-10 '>
       <h1 className='text-white text-2xl text-center '>Offered Cources</h1>
       <div className="max-w-[85rem]  px-4 sm:px-6 lg:px-8 pt-5 mx-auto">
  {/* <!-- Grid --> */}

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
    {courses.map((course) =>  ( <Link key={course} href='/'> <div className="h-28 sm:h-32 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4  ">
      {/* <!-- Icon --> */}
      <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
        </svg>
      </div>
      <div className="mt-3">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white ">
          {course}
        </h3>
      </div>
    </div></Link>
     ))}
  </div>
  {/* <!-- End Grid --> */}
</div></div>
// <!-- End Icon Blocks -->
    )
}

export default Courses