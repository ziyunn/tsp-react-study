import React, {useEffect, useState} from 'react';

const header = (props) => {
    useEffect(() => {
        const menuBtn = document.querySelector('.js-menu-btn');
        const gnb = document.querySelector('.gnb');
        const header = document.querySelector('.header');
        const body = document.querySelector('body');

        menuBtn.addEventListener('click',function(){
            if(menuBtn.classList.contains('is-active')){
                gnb.classList.remove('is-active');
                header.classList.remove('is-active');
                menuBtn.classList.remove('is-active');
                body.classList.remove('is-active');
            }else{
                gnb.classList.add('is-active');
                header.classList.add('is-active');
                menuBtn.classList.add('is-active');
                body.classList.add('is-active');
            }
        })
    },[]);
    return(
        <>
            <header className="header">
                <h1 className="header__logo">
                    <img src="/assets/images/common/logo.png" className="img-w100" alt="tsp"/>
                </h1>
                <button className="menu-btn js-menu-btn">
                    <span className="menu-btn__line">line</span>
                </button>
            </header>
            <nav className="gnb">
                <div className="gnb__wrap">
                    <ul className="gnb__list">
                        <li className="gnb__item is-active">
                            <a href="" className="gnb__link">TSP</a>
                        </li>
                        <li className="gnb__item">
                            <a href="" className="gnb__link">FEMALE</a>
                        </li>
                        <li className="gnb__item">
                            <a href="" className="gnb__link">MALE</a>
                        </li>
                        <li className="gnb__item">
                            <a href="" className="gnb__link">SENIOR</a>
                        </li>
                    </ul>
                    <ul className="gnb-sub">
                        <li className="gnb-sub__item">
                            <a href="" className="gnb-sub__link">PRODUCTION</a>
                        </li>
                        <li className="gnb-sub__item">
                            <a href="" className="gnb-sub__link">PORTFOLIO</a>
                        </li>
                        <li className="gnb-sub__item">
                            <a href="" className="gnb-sub__link">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default header;