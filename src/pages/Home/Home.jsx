import React from 'react';
import '../../assets/scss/common.scss';
import './Home.scss';

const Home = () => {
  return (
    <main>
      <article className="main-banner">
        <div className="main-banner__wrap js-main-slide">
          <h2 className="main-banner__tit">TSP MALE MODEL</h2>
          <ul className="main-banner__list swiper-wrapper">
            <li className="main-banner__item swiper-slide">
              <p className="main-banner__number type-current">
                <span className="main-banner__bar">01</span>
              </p>
              <p className="main-banner__number type-total">
                <span className="main-banner__bar">06</span>
              </p>
              <div className="main-banner__crop">
                <img className="main-banner__img" src="@/images/main/main_visual_1.jpg" alt=""/>
              </div>
            </li>
            <li className="main-banner__item swiper-slide">
              <p className="main-banner__number type-current">
                <span className="main-banner__bar">01</span>
              </p>
              <p className="main-banner__number type-total">
                <span className="main-banner__bar">06</span>
              </p>
              <div className="main-banner__crop">
                <img className="main-banner__img" src="../../images/main/main_visual_2.jpg" alt=""/>
              </div>
            </li>
          </ul>
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
