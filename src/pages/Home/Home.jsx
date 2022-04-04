import React, {useEffect,useState} from 'react';
import '../../assets/scss/main.scss';
import {mainVisualApi} from '../../services/main'
import { Container } from './Home.styles';
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module


const Home = () => {
  const [visual, setVisual] = useState({});
  const [mainBanner, setMainBanner] = useState({})

  useEffect(()=> {
    mainVisualList();
  },[]);

  useEffect(()=>{
  },[mainBanner]);

  const isEmptyObj = (obj) =>  {
    if(obj.constructor === Object
        && Object.keys(obj).length === 0)  {
      return true;
    }
    return false;
  }

  const mainVisualList = async () => {
    const mainData = await mainVisualApi()
    setVisual(mainData)
  }

  const checkNumber = (value) => {
    return value.toString().length < 2 ? '0' + value : value;
  }

  const mainBannerInit = (data) => {
    setMainBanner((prevState) => {
      return { ...prevState,
        activeIndex: data.activeIndex
      }
    });
  }

  const mainBannerSlide = (data) => {
    setMainBanner((prevState) => {
      return {
        ...prevState,
        activeIndex: data.activeIndex
      }
    })
  }

  const mainBannerList = () => {
    return(
      <Swiper
        pagination={{
          el: '.main-banner__pagination'
        }}
        modules={[Pagination]}
        onSlideChange={(swiper) => mainBannerSlide(swiper)}
        onSwiper={(swiper) => mainBannerInit(swiper)}
        className="main-banner__list"
      >
        {
          visual.modelList.map((list,idx) => {
            return(
              <SwiperSlide
                  key={idx}
                  className="main-banner__item"
              >
                <div className="main-banner__crop">
                  <img className="main-banner__img" src={`/upload/${list.modelImage[0].fileMask}`} alt=""/>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    )
  }
  if(visual.modelListTotalCnt === undefined) return  false;
  return (
    <main>
        {
          <article className="main-banner">
            <div className="main-banner__wrap js-main-slide">
              <h2 className="main-banner__tit">TSP MALE MODEL</h2>
              {mainBannerList()}
              <p className="main-banner__number type-current">
                <span className="main-banner__bar">
                  {isEmptyObj(mainBanner) ? 0 :checkNumber(mainBanner.activeIndex + 1)}
                </span>
              </p>
              <p className="main-banner__number type-total">
                <span className="main-banner__bar">{checkNumber(visual.modelListTotalCnt)}</span>
              </p>
              {
                isEmptyObj(mainBanner) ? null : (
                  <div className="main-banner__box">
                    <p className="main-banner__first">{visual.modelList[mainBanner.activeIndex].modelFirstName}</p>
                    <p className="main-banner__last">{visual.modelList[mainBanner.activeIndex].modelSecondName}</p>
                  </div>
                )
              }
            </div>
            <div className="main-banner__pagination"></div>
          </article>
        }
    </main>
  );
};

export default Home;
