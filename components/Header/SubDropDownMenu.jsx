import Link from 'next/link';
import React from 'react'

const SubDropDownMenu = (props) => {
    return (
        <div className="hs-dropdown  relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
            <button type="button" className=" flex justify-between w-full items-center text-sm text-gray-900 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ">
                {props.label}
                <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-[#b9bbcc] sm:shadow-md rounded-lg p-2  before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                {props.subMenuContent.map(item => <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                    {item.name}
                </Link>)}

            </div>
        </div>
    )
}

export default SubDropDownMenu