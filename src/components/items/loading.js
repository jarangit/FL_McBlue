import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const Loading = () => {
  return (
    <div className='w-full fixed z-50 h-screen flex justify-center items-center backdrop-sepia-0 bg-black/60'>
      <div className='flex justify-center items-center flex-col'>
        <img src={IMAGE_STORE.logo} alt="" width={300}/>
        <img src={IMAGE_STORE.ball} alt="" width={100} className ="animate-spin"/>
      </div>
    </div>
  )
}

export default Loading