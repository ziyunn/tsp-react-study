import React, {useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from "styled-components";
import {Title3 , Body1, Body3, calcRem} from "../../style/font";
import {white,black} from "../../style/color";
import InfiniteScroll from "react-infinite-scroll-component";
import {modelListApi, modelViewApi} from '../../services/category'
import {gnbNum} from "../../modules/gnb";
import {useDispatch} from "react-redux";

const ListWrap = styled.section`
  overflow: hidden;
	padding:${calcRem(96)}rem ${calcRem(16)}rem ${calcRem(40)}rem;
	text-align: center;
	background: #000;
  ul{
    margin: 0 0 0 -${calcRem(8)}rem;;
    padding: 0;
    list-style: none;
		text-align: left;
		&:after{
			display: block;
			clear: both;
			content: '';
		}
  }
	.list-title{
		display: inline-block;
		position:relative;
		&:after{
			position:absolute;
			bottom:0;
			display: block;
			width:100%;
			height:${calcRem(2)}rem;
			content: '';
			background: #fff;
		}
	}
`

const ListItem = styled.li`
	float:left;
	width: 50%;
	padding-left:${calcRem(8)}rem;
	box-sizing: border-box;
	margin-top: ${calcRem(40)}rem;
	.model-item{
		&__img{
      width:100%;
      vertical-align: middle;
		}
		&__title{
			text-transform: uppercase;
		}
		&__title, &__txt{
			color:${white};
		}
	}
`

const listItems = ({model, modelFn, modelList}) => {
	const {modelListTotalCnt} = model;
	if(!model) return false;
	return (
		<ul>
			<InfiniteScroll next={modelFn} hasMore={modelListTotalCnt > modelList.length} dataLength={modelList.length}>
				{
					modelList && modelList.map((item, idx) => {
						return(
							<ListItem key={idx}>
								<Link to={`/modelView/${item.categoryCd}/${item.idx}`}>
									<img className="model-item__img" src={`${process.env.REACT_APP_ADMIN_URL}${item.modelImage[0].fileMask}`} alt=""/>
									<Body1 weight="700" className="model-item__title">{item.modelEngName}</Body1>
									<Body3 className="model-item__txt">{item.height}</Body3>
									<Body3 className="model-item__txt">{item.size3}</Body3>
								</Link>
							</ListItem>
						)
					})
				}
			</InfiniteScroll>
		</ul>
	);
}

const ModelList = () => {
	const [models, setModels] = useState(null);
	const [modelList, setModelList] = useState(null)
	const [current, setCurrent] = useState(1);
	const [isTotalZero, setIsTotalZero] = useState(false);
	const {category}  = useParams();
	const dispatch = useDispatch();
	const modelViewItem = async () => {
		const modelData = await modelListApi(category,1,4)
		setModels(modelData);
		setModelList(modelData.modelList);
	}
	
	const getList = async () => {
		setCurrent(current + 1);
		const modelData = await modelListApi(category,current + 1,4)
		setModelList(modelList.concat(modelData.modelList));
		setIsTotalZero(isTotalZero ? true : false);
	}
	
	const listTitle = () => {
		switch(category){
			case '1':
				return 'MALE';
			case '2':
				return 'FEMALE';
			case '3':
				return 'SENIOR'
			default :
				return false;
		}
	}
	
	useEffect(()=> {
		setCurrent(1)
		modelViewItem();
	},[category]);
	
	
	useEffect(()=> {
		dispatch(gnbNum(Number(category)));
	},[]);
	
	if(!modelList) return false;
  return (
    <>
			<ListWrap>
				<Title3 className="list-title font-abril" color={white}>{listTitle()}</Title3>
				{listItems({model : models, modelFn: ()=>getList(), modelList: modelList})}
			</ListWrap>
    </>
  );
};

export default ModelList;