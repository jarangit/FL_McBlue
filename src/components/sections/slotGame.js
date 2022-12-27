import React from 'react'
import LabelTitle from '../label/labelTitle'
import { IMAGE_STORE } from '../../constants/imageStores'
const SlotGame = () => {
  return (
    <div>
      <LabelTitle
        image={IMAGE_STORE.slot}
        text="ค่ายเกมสล็อต"
      />
      <div className='grid grid-cols-4 gap-2 justify-center items-center text-center'>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
        <div className={`my_hover_expend`}>
          <img src={IMAGE_STORE.hotGameItem} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SlotGame