import React from 'react'
import AccordionList from '../items/accordion/accordionList'
import { mockDataQuestions } from '../../constants/questions'

const Question = () => {
  return (
    <div className='relative'>
      <div className='my_gold_line' />
      <div className='myContainer'>
        <div className='text-4xl my-6 text-center'>-Q & A-</div>
        <div className=''>
          <AccordionList data={mockDataQuestions}/>
        </div>
      </div>
    </div>
  )
}

export default Question