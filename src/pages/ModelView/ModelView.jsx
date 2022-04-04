import React from 'react';
import styled from 'styled-components'

const MainVisual = styled.div`
  position:relative;
  height:100vh;
  
  img{
    width:100%; 
    height:100%;
    vertical-align: middle; 
    object-fit: cover;
  }
  h1{
    position: absolute;
    margin: 0 auto;
    padding: 0;
    bottom: 50px;
    text-align: center;
    left: 0;
    right: 0;
  }
  .main-visual{
    &__eng{
      white-space: nowrap;
    }
    &__kor {
      display: block;
    }
  }
`;


//color
const yellow = "#EEFF25";
const darkYellow = "#D7E620";
const deepYellow = "#B2BF0C";

const black = "#000";
const darkGray = "#666";
const gray = "#aaa";
const lightGray = "#EBEBEB";
const gloudGray = "#F8F8F8";
const white = "#fff";

const defaultSize = 16;
const defaultLetter = 0.06;

const calcRem = (size) =>{
    return size/defaultSize;
}

const calclH = (lh,font) =>{
    return lh/font;
}
const Title2 = styled.p`
  font-size:${calcRem(40)}rem;
  line-height:${calclH(70,60)}; 
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
`
const Title3 = styled.p`
  font-size:${calcRem(24)}rem;
  line-height:${calclH(32,24)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`
const Body1 = styled.p`
  font-size:${calcRem(16)}rem;
  line-height:${calclH(26,16)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`
const Body3 = styled.p`
  font-size:${calcRem(12)}rem;
  line-height:${calclH(22,12)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`

const ModelWrap = styled.section`
  overflow: hidden;
`

const ModelInfo = styled.ul`
  margin: 0;
  padding:0;
  background: ${yellow};
  li{
    margin:0;
    padding: ${calcRem(16)}rem;
    box-sizing: border-box;
    list-style:none;
    text-align: center;
    & + li{
      border-top:${calcRem(2)}rem solid ${darkYellow}
    }
    &.model-info__3size{
      .model-info__txt{
        margin:0;
        padding:0;
        &:before{
          display:none;
        }
      }
    }
  }
  .model-info__tit{
    font-weight:bold;
  }
  span{
    font-family: "Noto Sans KR", Sans-Serif;
  }
  .model-info__txt{
      position:relative;
      padding-left:${calcRem(10)}rem;
      box-sizing: border-box;
      margin-left:${calcRem(8)}rem;
      &:before{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        height:${calcRem(16)}rem;
        width:${calcRem(2)}rem;
        margin: auto 0;
        background: ${deepYellow};
        content:'';
      }
  }
  .model-info__bar{
    margin:0 8px;
  }
`;
const ModelCareer = styled.div`
  position:relative;
  padding: ${calcRem(40)}rem ${calcRem(16)}rem;
  font-family: "Noto Sans KR", Sans-Serif;
  .model-career{
    &__head {
      display: flex;
      justify-content: space-between;
      padding-bottom: ${calcRem(40)}rem;
    }
    &__tit {
      margin-bottom: ${calcRem(16)}rem;
      padding-bottom: ${calcRem(16)}rem;
      border-bottom: 2px solid ${lightGray};
    }
    &__list{
      margin:0;
      padding:0;
    }
    &__item{
      margin:0;
      padding:0;
      list-style:none;
      & +  .model-career__item{
        margin-top: ${calcRem(40)}rem;
      }
    }
  }
`;
const ModelImages = styled.div`
  margin:0 -${calcRem(4)}rem;
  box-sizing: border-box;
  padding:${calcRem(16)}rem;
  background:#000;

`;

const ModelImage = styled.div`
  display:inline-block;
  width: ${props => props.single ? '100%' : '50%'};
  justify-content: space-between;
  padding:0 ${calcRem(4)}rem;
  & + &{
    margin-top: ${calcRem(8)}rem;
  }
  img{
    width:100%;
    vertical-align: middle;
  }
`



const ButtonPlus = styled.div`
    overflow: hidden;
    position: relative;
    width:${calcRem(32)}rem;
    height:${calcRem(32)}rem;
    border:${calcRem(2)}rem solid black;
    text-indent: -9999px;
  &:before,&:after{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background:black;
    content:'';
  }
  &:before{
    width:${calcRem(16)}rem;
    height:${calcRem(2)}rem;
  }
  &:after{
    width:${calcRem(2)}rem;
    height:${calcRem(16)}rem;
  }
`;

const ModelView = (props) => {
    return(
        <ModelWrap>
            <MainVisual>
                <img src={`${process.env.PUBLIC_URL}/upload/1223023959779.jpg`} alt=""/>
                <h1>
                    <Title2 as="span" color={yellow} className="main-visual__eng">KIM YE YEONG</Title2>
                    <Title3 as="span" color="#fff" margin="8px 0 0 0" className="main-visual__kor">김예영</Title3>
                </h1>
            </MainVisual>
            <ModelInfo>
                <li>
                    <Body1 as="span" className="model-info__tit">Height</Body1>
                    <Body1 as="span" className="model-info__txt">173cm</Body1>
                </li>
                <li className="model-info__3size">
                    <Body1 as="span" className="model-info__tit">B</Body1>
                    <Body1 as="span" className="model-info__txt">31</Body1>
                    <Body1 as="span" className="model-info__bar">-</Body1>
                    <Body1 as="span" className="model-info__tit">W</Body1>
                    <Body1 as="span" className="model-info__txt">31</Body1>
                    <Body1 as="span" className="model-info__bar">-</Body1>
                    <Body1 as="span" className="model-info__tit">H</Body1>
                    <Body1 as="span" className="model-info__txt">31</Body1>
                </li>
                <li>
                    <Body1 as="span" className="model-info__tit">Shoes</Body1>
                    <Body1 as="span" className="model-info__txt">240 - 5mm</Body1>
                </li>
            </ModelInfo>
            <ModelCareer>
                <div className="model-career__head">
                    <Title3 weight="700">
                        경력사항
                    </Title3>
                    <ButtonPlus>button</ButtonPlus>
                </div>
                <ul className="model-career__list">
                    <li className="model-career__item">
                        <Body1 as="h3" className="model-career__tit" weight="700">Clothes</Body1>
                        <Body3 color={darkGray}>hstyle(CH) , mixxmix , Icecream12 , Odd gallary , Armoire, Wusi`na , Blue pie , Canebros , Truu , Dabkorea , Accbee </Body3>
                    </li>
                    <li className="model-career__item">
                        <Body1 as="h3" className="model-career__tit" weight="700">Video / MV</Body1>
                        <Body3 color={darkGray}>hstyle(CH) , mixxmix , Icecream12 , Odd gallary , Armoire, Wusi`na , Blue pie , Canebros , Truu , Dabkorea , Accbee </Body3>
                    </li>
                </ul>
            </ModelCareer>
            <ModelImages>
                <ModelImage single={true}>
                    <img src={`${process.env.PUBLIC_URL}/upload/1223023959779.jpg`}  alt=""/>
                </ModelImage>
                <ModelImage single={false}>
                    <img src={`${process.env.PUBLIC_URL}/upload/1223023959779.jpg`}  alt=""/>
                </ModelImage>
                <ModelImage single={false}>
                    <img src={`${process.env.PUBLIC_URL}/upload/1223023959779.jpg`}  alt=""/>
                </ModelImage>
                <ModelImage single={true}>
                    <img src={`${process.env.PUBLIC_URL}/upload/1223023959779.jpg`}  alt=""/>
                </ModelImage>
            </ModelImages>
        </ModelWrap>
    )
};

export default ModelView;