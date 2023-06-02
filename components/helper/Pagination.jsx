import Link from 'next/link'
import React from 'react'

const Pagination = (props) => {
const itemsPerPage = 7; // Number of items per page
const totalPages = Math.ceil(props.items.length / itemsPerPage);

  return (
    <nav className="flex justify-center items-center space-x-2">
  <Link
    className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
    href="#"
  >
    <span aria-hidden="true">«</span>
    <span>Previous</span>
  </Link>


      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          key={index}
          className={`w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full 
            `}
          href="#"
        //   aria-current={currentPage === index + 1 ? 'page' : undefined}
        //   onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Link>
      ))}


  <Link
    className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
    href="#"
  >
    <span>Next</span>
    <span aria-hidden="true">»</span>
  </Link>
</nav>

  )
}

export default Pagination