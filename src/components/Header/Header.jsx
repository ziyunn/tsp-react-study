import React, {useState} from 'react';

const header = (props) => {
    return(
        <>
            <header className="header">
                <h1 className="header__logo">
                    <img src="../../images/common/logo.png" className="img-w100" alt="tsp"/>
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