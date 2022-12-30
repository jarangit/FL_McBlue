import React from 'react'
import AccordionItem from './accordionItem'

const AccordionList = ({ data }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      {data.map((item, key) => (
        <AccordionItem title={item.title} content={item.content}  />
      ))}
    </div>
  )
}

export default AccordionList