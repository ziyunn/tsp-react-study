import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Title3 , Body1, Body3, calcRem} from "../../style/font";
import {white,black} from "../../style/color";
import InfiniteScroll from "react-infinite-scroll-component";
import {modelListApi, modelViewApi} from '../../services/category'

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
		&__title, &__txt{
			color:${white};
		}
	}
`

const listItems = ({model, modelFn, modelList}) => {
	const {modelListTotalCnt} = model;
	if(!model) return false;
	console.log(modelListTotalCnt);
	console.log(modelList.length);
	console.log(modelListTotalCnt > modelList.length)
	return (
		<ul>
			<InfiniteScroll next={modelFn} hasMore={modelListTotalCnt > modelList.length} dataLength={modelList.length}>
				{
					modelList && modelList.map((item, idx) => {
						return(
							<ListItem key={idx}>
								<img className="model-item__img" src="/upload/1223023959779.jpg" alt=""/>
								<Body1 className="model-item__title">{item.modelEngName}</Body1>
								<Body3 className="model-item__txt">{item.height}</Body3>
								<Body3 className="model-item__txt">{item.size3}</Body3>
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
	const modelViewItem = async () => {
		const modelData = await modelListApi(1,1,3)
		setModels(modelData);
		setModelList(modelData.modelList);
	}
	
	const getList = async () => {
		console.log('get');
		setCurrent(current + 1);
		const modelData = await modelListApi(1,current + 1,3)
		setModelList(modelList.concat(modelData.modelList));
		setIsTotalZero(isTotalZero ? true : false);
	}
	
	useEffect(()=> {
		modelViewItem();
	},[]);
	
	if(!modelList) return false;
  return (
    <>
			<ListWrap>
				<Title3 className="list-title font-abril" color={white}>FEMALE</Title3>
				{listItems({model : models, modelFn: ()=>getList(), modelList: modelList})}
			</ListWrap>
    </>
  );
};

export default ModelList;