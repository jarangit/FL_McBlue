import React from 'react'
import LabelTitle from '../label/labelTitle'
import { IMAGE_STORE } from '../../constants/imageStores'
const HotGame = () => {
  return (
    <div>
      <LabelTitle
        image={IMAGE_STORE.slot}
        text="ค่ายเกมคาสิโน"
      />
      <div className='grid grid-cols-4 gap-2 justify-center items-center text-center'>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HotGame