import React from 'react'
import Button from './Button'


const Pagination = (props) => {

  return (
    <nav className="flex justify-center items-center space-x-2">
 <div class="inline-flex">
  <Button disabled={props.isPreviousButtonDisabled} onClick={props.handlePageChangePre} className={`${props.isPreviousButtonDisabled?'cursor-not-allowed opacity-50 ':' '} rounded-l border-r font-semibold `}>
    Prev
  </Button>
  <Button disabled={props.isNextButtonDisabled} onClick={props.handlePageChange} className={`${props.isNextButtonDisabled?'cursor-not-allowed opacity-50 ':' '} rounded-r  font-semibold`}>
    Next
  </Button>
</div>
</nav>

  )
}

export default Pagination