import React, { useState } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'

const AccordionItem = ({ title, content }) => {
  const [show, setShow] = useState(false)
  return (
    <div className=''>
      <div className='p-3 bg-[#495BFF] cursor-pointer flex gap-1' onClick={() => setShow(!show)}>
        <div className='my-1'>
          <RiArrowRightSFill size={20} />
        </div>
        <div>{title}</div>
        </div>

      <div className={`p-3 bg-blue ${show ? "max-h-[1000px]" : "max-h-0 p-0"} overflow-hidden transition-all duration-700`}>
        {content}
      </div>

    </div>
  )
}

export default AccordionItem