import React from 'react'
import Slider from "react-slick";
import { IMAGE_STORE } from '../../constants/imageStores';
const Sponsor = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  };
  return (
    <div className='my_bg_blue p-3'>
      <Slider {...settings}>
        <div>
          <img src={IMAGE_STORE.sponsor1} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor2} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor3} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor1} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor2} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor3} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor1} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor2} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor1} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor1} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Sponsor