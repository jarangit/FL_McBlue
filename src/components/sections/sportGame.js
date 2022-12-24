import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'
import LabelTitle from '../label/labelTitle'

const SportGame = () => {
  return (
    <div>
      <LabelTitle
        image={IMAGE_STORE.sport}
        text="ค่ายเกมกีฬา"
      />
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
        <div className=' hover:scale-105 hover:z-10 transition-all w-full cursor-pointer'>
          <img src={IMAGE_STORE.sportCard} alt="" width={600} />
        </div>
        <div className=' hover:scale-105 hover:z-10 transition-all w-full cursor-pointer'>
          <img src={IMAGE_STORE.sportCard} alt="" width={600} />
        </div>
      </div>
    </div>
  )
}

export default SportGame