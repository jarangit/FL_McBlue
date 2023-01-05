import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const Loading = () => {
  return (
    <div className='fixed  z-[99] h-screen w-screen flex justify-center items-center backdrop-sepia-0 bg-black/60 top-0 left-0'>
      <div className='flex justify-center items-center flex-col'>
        <img src={IMAGE_STORE.logo} alt="" width={300} />
        <img src={IMAGE_STORE.ball} alt="" width={100} className="animate-spin" />
      </div>
    </div>
  )
}

export default Loading