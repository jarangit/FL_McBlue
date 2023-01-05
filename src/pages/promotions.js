import React from 'react'
import { IMAGE_STORE } from '../constants/imageStores'

const PromotionPage = () => {
  return (
    <div>
      <div className='mb-4 text-center text-xl lg:text-3xl font-bold text-yellow-dark'>โปรโมชั่นสุดพิเศษ</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div>
          <img src={IMAGE_STORE.promotion_item_of_page} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.promotion_item_of_page} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.promotion_item_of_page} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PromotionPage