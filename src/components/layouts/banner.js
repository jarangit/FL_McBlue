import React from 'react'
import Slider from "react-slick";
import { IMAGE_STORE } from '../../constants/imageStores'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const Banner = () => {

  const styled = {
    imageItem: `
      mx-auto flex justify-center  rounded-md lg:rounded-2xl overflow-hidden  h-[120px] md:h-[180px] lg:h-[230px] max-w-[650px] w-full
    `,
    boxImage: `
      px-3
    `
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow absolute top-10 md:top-20  right-5 drop-shadow-lg cursor-pointer"
        onClick={onClick}
      >
        <IoIosArrowForward size={40} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow absolute top-10 md:top-20 left-5 drop-shadow-lg z-10 cursor-pointer"
        onClick={onClick}
      >
        <IoIosArrowBack size={40} />
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
    lazyLoad: true,
    dots: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    customPaging: function(i) {
      return (
        <div className='w-2 h-2 bg-[#9cb1eb] rounded-full mt-1 opacity-25 transition-all'/>
      );
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          dots: true,
          centerPadding: "20%",
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: "20%",
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: "20%",

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: "7%",

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "30%",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        }
      }
    ]
  };
  const {
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
  } = IMAGE_STORE
  return (
    <div className=''>
      <Slider {...settings}>
        <div className={`${styled.boxImage}`}>
          <div className={`${styled.imageItem}`}>
            <img src={banner1} alt="" />
          </div>
        </div>
        <div className={`${styled.boxImage}`}>
          <div className={`${styled.imageItem}`}>
            <img src={banner2} alt="" />
          </div>
        </div>
        <div className={`${styled.boxImage}`}>
          <div className={`${styled.imageItem}`}>
            <img src={banner3} alt="" />
          </div>
        </div>
        <div className={`${styled.boxImage}`}>
          <div className={`${styled.imageItem}`}>
            <img src={banner4} alt="" />
          </div>
        </div>
        <div className={`${styled.boxImage}`}>
          <div className={`${styled.imageItem}`}>
            <img src={banner5} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Banner