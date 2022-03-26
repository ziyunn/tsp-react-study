import React, {useEffect,useState} from 'react';
import '../../assets/scss/common.scss';
import './Home.scss';
import {mainVisualApi} from '../../services/api'
import { Container } from './Home.styles';

const Home = () => {
  const [visual, setVisual] = useState('0');

  const mainVisualList = async () => {
    const test = await mainVisualApi(1,3)
    setVisual(test.data)
  }
  const checkNumber = (value) => {
    return value.toString().length < 2 ? '0' + value : value;
  }
  const mainBannerList = () => {
    console.log(visual.modelImage);
    if(visual.modelImage === undefined) return false;
    return(
      <ul className="main-banner__list swiper-wrapper">
        {
          visual.modelImage.map((list,idx) => {
            return(
              <li className="main-banner__item swiper-slide" key={idx}>
                <p className="main-banner__number type-current">
                  <span className="main-banner__bar">{checkNumber(idx+1)}</span>
                </p>
                <p className="main-banner__number type-total">
                  <span className="main-banner__bar">{checkNumber(visual.modelImage.length)}</span>
                </p>
                <div className="main-banner__crop">
                  <img className="main-banner__img" src={`/upload/${list.fileMask}`}alt=""/>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  useEffect(()=>{
    mainVisualList();
  },[])

  return (
      <main>
        <article className="main-banner">
          <div className="main-banner__wrap js-main-slide">
            <h2 className="main-banner__tit">TSP MALE MODEL</h2>
            {mainBannerList()}
            <div className="main-banner__box">
              <p className="main-banner__first">kim</p>
              <p className="main-banner__last">ye yeong</p>
            </div>
          </div>
        <div className="main-banner__pagination">
        </div>
      </article>
    </main>
  );
};

export default Home;
