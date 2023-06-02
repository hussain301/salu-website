import Link from 'next/link'
import React from 'react'
import {icons,footerLinks } from './FooterSvgs'


const year = new Date().getFullYear()



const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-2 pb-6 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <div className='w-52'>
                <img src="/salulogo.png" alt="salu logo" />
              </div>
            </div>
            <p
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:mx-0 sm:max-w-xs sm:text-left"
            >
              Shah Abdul Latif University,
              Old National Highway, Khairpur Mirs, 66020 Sindh, Pakistan.
            </p>
{/********************** social icons List start ******************************/}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {icons.map((icon, i) =>  (<li key={i}>
                <Link
                  href={icon.link}
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">{icon.name}</span>
                  {icon.icon}
                </Link>
              </li> ))}
            </ul>
{/********************** social icons List end ******************************/}
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
          >
            
           {footerLinks.map((items, i) =>{ 
            const {links} = items
            return (
              <div key={i} className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">{items.name}</p>
              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                 
                  {links.map((link, i) => (
                  <li key={i} >
                    <Link
                    className ={`${items?.hasIcon && 'flex items-center justify-center gap-1.5 sm:justify-start'} `} 
                      href={link.href}
                    >
                    {items?.hasIcon && link.icon}
                    <span className="text-blue-700 transition hover:text-green-700/75">{link.name}</span>   
                    </Link>
                  </li>))}
                  </ul>
              </nav>
            </div>
            )
           })}

          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {year} SALU, Khairpur Mirs, all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


