import React from 'react'
import LabelTitle from '../label/labelTitle'
import { IMAGE_STORE } from '../../constants/imageStores'
const SlotGame2 = () => {
  return (
    <div>
      <LabelTitle
        image={IMAGE_STORE.slot}
        text="ค่ายเกมสล็อต"
      />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.slot2GameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.slot2GameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.slot2GameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.slot2GameItem} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SlotGame2