import React, {useEffect, useState, useRef} from 'react';
import Constants from './state'
import {Link, useParams} from 'react-router-dom';
import Logo from 'assets/images/common/logo.png'
const header = (props) => {
	const gnb = useRef(null);
	const header = useRef(null);
	const menuBtn = useRef(null);
	const body = document.querySelector('body');
	const [gnbState, setGnbState] = useState(false);
	const [number,setNumber] = useState(0);
	const { category  }= useParams();
	const gnbClose = ({e,idx}) => {
		gnb.current.classList.remove('is-active');
		header.current.classList.remove('is-active');
		menuBtn.current.classList.remove('is-active');
		body.classList.remove('is-active');
		setGnbState(false);
		setNumber(idx)
	}
	const gnbOpen = ({e,idx}) => {
		gnb.current.classList.add('is-active');
		header.current.classList.add('is-active');
		menuBtn.current.classList.add('is-active');
		body.classList.add('is-active');
		setGnbState(true);
	}
	const gnbToggle = ({e,idx}) =>{
		e.preventDefault();
		if(gnbState){
			gnbClose({e,idx});
		}else{
			gnbOpen({e,idx});
		}
	}

	useEffect(() => {
		console.log(category)
		setNumber(category)
	},[category]);
	const gnbList = () =>{
		return(
			<nav className="gnb" ref={gnb}>
				<div className="gnb__wrap">
					<ul className="gnb__list">
						{
							Constants.GNB.map((item,idx) => {
								return(
									<li className={`gnb__item ${number === idx ? 'is-active' : ''} `} key={item.KEY}>
										<Link className="gnb__link font-abril" onClick={(e)=>gnbClose({e,idx})} to={item.LINK}>{item.TITLE}</Link>
									</li>
								);
							})
						}
					</ul>
					<ul className="gnb-sub">
						{
							Constants.GNBSUB.map((item,idx) => {
								let totalIdx = idx + Constants.GNB.length;
								return(
									<li className={`gnb-sub__item ${number === (totalIdx) ? 'is-active' : ''} `} key={item.KEY}>
										<Link className="gnb-sub__link font-abril" onClick={(e)=>gnbClose({e,idx:totalIdx})} to={item.LINK}>{item.TITLE}</Link>
									</li>
								);
							})
						}
					</ul>
				</div>
			</nav>
		)
	}
	return(
		<>
			<header className="header" ref={header}>
				<h1 className="header__logo">
					<Link to={`/`}>
						<img src={Logo} className="img-w100" alt="tsp"/>
					</Link>
				</h1>
				<button className="menu-btn" ref={menuBtn} onClick={(e)=>{gnbToggle({e,number})}}>
					<span className="menu-btn__line">line</span>
				</button>
			</header>
			{gnbList()}
		</>
	)
};

export default header;