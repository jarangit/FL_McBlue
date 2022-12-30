import React from 'react'
import LabelTitle from '../label/labelTitle'
import { IMAGE_STORE } from '../../constants/imageStores'

const CasinoGame = () => {
  return (
    <div>
      <LabelTitle
        image={IMAGE_STORE.casino}
        text="ค่ายเกมคาสิโน"
      />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 text-center justify-center items-center'>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>
        <div className='my_hover_expend'>
          <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
        </div>

      </div>
      <div>

        <div className='grid grid-cols-2 gap-3 mt-3 lg:grid-cols-3 justify-center'>
          <div className='my_hover_expend'>
            <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
          </div>
          <div className='my_hover_expend'>
            <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
          </div>
          <div className='my_hover_expend'>
            <img src={IMAGE_STORE.storeGame} alt="" width={"100%"} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default CasinoGame