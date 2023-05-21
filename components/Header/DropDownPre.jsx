import React from 'react'
import SubDropDownMenu from './SubDropDownMenu'
import Link from 'next/link'

const DropDownPre = props => {

    return (
        <div  className="hs-dropdown-menu transition-[opacity,margin] duration-[0.5ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-[#a1a4bb] sm:shadow-md rounded-lg p-2  before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5 hidden" >
            {props.menu.map(item => !item.isMultiLinks
                && <Link key={item.name} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href={item.link}>
                    {item.name}
                </Link>)}

            {props.menu.map(item => {
                return (item.isMultiLinks && <SubDropDownMenu subMenuContent={item.link} label={item.name} />)
            })}
        </div >)
}

export default DropDownPre