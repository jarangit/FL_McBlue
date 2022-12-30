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
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  };
  return (
    <div className='my_bg_blue p-3'>
      <Slider {...settings}>
        <div className=''>
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
        <div>
          <img src={IMAGE_STORE.sponsor2} alt="" />
        </div>
        <div>
          <img src={IMAGE_STORE.sponsor2} alt="" />
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