import React from 'react'
import DropDownPre from './DropDownPre'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { menu } from './menu'


const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Apply Online', link: '/apply-online' },
]
const HeaderFlowbite = () => {
    return (
        <header className="relative text-[#a1a4bb] flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#151C55] text-sm py-4 ">
            <div className='flex gap-2 px-3 justify-between items-center text-lg font-medium uppercase'>
                <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 0.2 }} className='flex  items-center space-x-3 '>
                    <img className='w-10 h-10 rounded-full' src="./salulogo.png" alt="logo" />
                    <span className='md:hidden'>SALU</span>
                    <span className='hidden md:inline-block'>Shah Abdul Latif University</span>
                </motion.div>
                <ul className='text-sm capitalize justify-end flex gap-2 sm:gap-5 px-3 items-center  '>
                    {links.map((link, index) => (<li key={index} className=' hover:text-blue-600 cursor-pointer px-3 sm:p-0 sm:mt-0 transition-all duration-300 text-[#a1a4bb]'>{link.name}</li>))}
                </ul>
            </div>
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-end">
                    {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a> */}
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-[#5b6088] shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm " data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-with-mega-menu" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex  flex-col  sm:gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:pl-5">
                        {menu.map(item => {
                            return (<motion.div key={item.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: .2, delay: .1 }} className="hs-dropdown [--strategy:static]  sm:[--strategy:fixed] [--adaptive:none] ">
                                <button id="hs-mega-menu-basic-dr" type="button" className="flex justify-between items-center w-full text-[#a1a4bb] border-t border-blue-900 sm:border-none hover:text-blue-600 p-2 px-5 sm:p-0 sm:hover:bg-transparent hover:bg-gray-100 group transition-all duration-300 font-medium  ">
                                    {item.name} 
                                    <svg className="ml-2 group-hover:text-blue-600 transition-all duration-300 w-2.5 h-2.5 text-[#a1a4bb]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </button>
                                {/* drop down Menu  */}
                                <DropDownPre menu={item.link} />
                            </motion.div>)
                        })}
                        <Link className="font-medium hover:text-blue-600 mt-1 sm:mt-0 sm:p-0 px-5 transition-all duration-300  text-[#a1a4bb] " href="#">Central Library</Link>
                        <Link className="font-medium hover:text-blue-600 mt-2 px-5 sm:p-0 sm:mt-0 transition-all duration-300 text-[#a1a4bb]  " href="#">Gallery</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderFlowbite