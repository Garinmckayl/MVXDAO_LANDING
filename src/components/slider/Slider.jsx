import React , { useState , Fragment } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import shape1 from "../../assets/images/backgroup-secsion/bg-gradient1.png";
import shape2 from "../../assets/images/backgroup-secsion/bg-gradient2.png";
import shape3 from "../../assets/images/backgroup-secsion/bg-gradient3.png";
import imgbg from "../../assets/images/backgroup-secsion/img_bg_page_title.jpg";
import CardModal from '../layouts/CardModal';

 
const Slider = (props) => {
  

  const data = props.data;
  return (
    <div className="mainslider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {6000}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={item.class}>
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
const SliderItem = (props) => {
  const [modalShow, setModalShow] = useState(false);
  
  return(
  <div className="flat-title-page" style={{ backgroundImage: `url(${props.item.imgbg})` }}>
  <div className="flat-title-page">
    {/* <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
    <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
    <img className="bgr-gradient gradient3" src={shape3} alt="Axies" /> */}
    {/* <div className="shape item-w-16"></div>
    <div className="shape item-w-22"></div>
    <div className="shape item-w-32"></div>
    <div className="shape item-w-48"></div> */}
    {/* <div className="shape style2 item-w-51"></div>
    <div className="shape style2 item-w-51 position2"></div> */}
    {/* <div className="shape item-w-68"></div> */}
    <div className="overlay"></div>
    <div className="swiper-container mainslider home">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-item">
            <div className="themesflat-container ">
              <div className="wrap-heading flat-slider flex">
                <div className="content">
                  <h2 className="heading">{props.item.title_1}</h2>
                  <h1 className="heading mb-style">
                    <span className="tf-text s1">{props.item.title_2} </span>
                  </h1>
                  <h1 className="heading">{props.item.title_3}</h1>
                  <p className="sub-heading">{props.item.description}</p>
                  <div
                    className="flat-bt-slider flex style2"
                    style={{ marginTop: "-33px" }}
                  >
                    {/* <Link
                      to="#"
                      className="sc-button header-slider style style-1 rocket fl-button pri-1"
                    >
                      <span>Early Sign-up</span>
                    </Link> */}
                    <button onClick={() => setModalShow(true)} className='buy__token'>
                        <a>Early Sign-up</a>
                </button>
                    <a
                      href="/howtobuy"
                      className="sc-button header-slider style style-1 note fl-button pri-1"
                    >
                      <span>Buy token</span>
                    </a>
                    {/* <a
                      href="https://app.sushi.com/miso/0xFbDFFc73e2a80d33fC6C63C345899bC38e2bf136?chainId=137"
                      className="sc-button header-slider style style-1 note fl-button pri-1"
                    >
                      <span>Buy token</span>
                    </a> */}
                  </div>
                </div>
                {/* <div className="image">
                  <img className="img-bg" src={props.item.imgbg} alt="axies" />
                  <img src={props.item.img} alt="axies" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
  </div>
  );
};
export default Slider;
