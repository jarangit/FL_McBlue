import React from 'react'
import { IMAGE_STORE } from '../../constants/imageStores'

const PromotionsSection = () => {
  return (
    <div className='relative py-10 bg-[url(https://ideabet.org/theme/mcblue/wp-content/uploads/2022/08/Curve_blue_background-Design_HD_Wallpaper_1920x1200.jpg)] bg-cover'>
      <div className='my_gold_line' />
      <div className='myContainer'>
        <div className='text-3xl font-bold mb-6 text-center'>โปรโมชั่นสุดพิเศษ</div>

        {/* list */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
          <div className={`my_hover_expend`}>
            <img src={IMAGE_STORE.promotion_item} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionsSection