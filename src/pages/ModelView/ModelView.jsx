import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  yellow,
  darkYellow,
  deepYellow,
  lightGray,
  darkGray,
} from "../../style/color";
import { Title2, Title3, Body1, Body3 } from "../../style/font";
import { calcRem } from "../../style/font";
import { modelViewApi } from "../../services/category";
import { changeGnb } from "../../modules/action";
import { useDispatch } from "react-redux";

const MainVisual = styled.div`
  position: relative;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    margin: 0 auto;
    padding: 0;
    bottom: 50px;
    text-align: center;
    left: 0;
    right: 0;
  }
  .main-visual {
    &__eng {
      white-space: nowrap;
    }
    &__kor {
      display: block;
    }
  }
`;

const ModelWrap = styled.section`
  overflow: hidden;
`;

const ModelInfo = styled.ul`
  margin: 0;
  padding: 0;
  background: ${yellow};
  li {
    margin: 0;
    padding: ${calcRem(16)}rem;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
    & + li {
      border-top: ${calcRem(2)}rem solid ${darkYellow};
    }
    &.model-info__3size {
      .model-info__txt {
        margin: 0;
        padding: 0;
        &:before {
          display: none;
        }
      }
    }
  }
  .model-info__tit {
    font-weight: bold;
  }
  span {
    font-family: "Noto Sans KR", Sans-Serif;
  }
  .model-info__txt {
    position: relative;
    padding-left: ${calcRem(10)}rem;
    box-sizing: border-box;
    margin-left: ${calcRem(8)}rem;
    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: ${calcRem(16)}rem;
      width: ${calcRem(2)}rem;
      margin: auto 0;
      background: ${deepYellow};
      content: "";
    }
  }
  .model-info__bar {
    margin: 0 8px;
  }
`;
const ModelCareer = styled.div`
  position: relative;
  padding: ${calcRem(40)}rem ${calcRem(16)}rem;
  font-family: "Noto Sans KR", Sans-Serif;
  .model-career {
    &__head {
      display: flex;
      justify-content: space-between;
    }
    &__tit {
      margin-bottom: ${calcRem(16)}rem;
      padding-bottom: ${calcRem(16)}rem;
      border-bottom: 2px solid ${lightGray};
    }
    &__list {
      &.is-active {
        display: block;
      }
      display: none;
      margin: ${calcRem(40)}rem 0 0;
      padding: 0;
    }
    &__item {
      margin: 0;
      padding: 0;
      list-style: none;
      & + .model-career__item {
        margin-top: ${calcRem(40)}rem;
      }
    }
  }
`;
const ModelImages = styled.div`
  margin: 0 -${calcRem(4)}rem;
  box-sizing: border-box;
  padding: ${calcRem(16)}rem;
  background: #000;
`;

const ModelImage = styled.div`
  display: inline-block;
  width: ${(props) => (props.single ? "100%" : "50%")};
  justify-content: space-between;
  padding: 0 ${calcRem(4)}rem;
  & + & {
    margin-top: ${calcRem(8)}rem;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: ${calcRem(28)}rem;
  width: ${calcRem(24)}rem;
  height: ${calcRem(24)}rem;
  margin: auto 0;
  padding: 0;
  z-index: 10;
  border: none;
  background: transparent;
  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    &:before,
    &:after {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background: ${yellow};
      transform: rotate(45deg);
    }
    &:before {
      width: ${calcRem(2)}rem;
      height: 100%;
    }
    &:after {
      width: 100%;
      height: ${calcRem(2)}rem;
    }
  }
`;

const ButtonPlus = styled.div`
  overflow: hidden;
  position: relative;
  width: ${calcRem(32)}rem;
  height: ${calcRem(32)}rem;
  border: ${calcRem(2)}rem solid black;
  text-indent: -9999px;
  &.is-active {
    &:after {
      display: none;
    }
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: black;
    content: "";
  }
  &:before {
    width: ${calcRem(16)}rem;
    height: ${calcRem(2)}rem;
  }
  &:after {
    width: ${calcRem(2)}rem;
    height: ${calcRem(16)}rem;
  }
`;

const ModelView = () => {
  const [model, setModel] = useState(null);
  const [career, setCareer] = useState(false);
  const { category, number } = useParams();
  const dispatch = useDispatch();
  const onToggle = () => {
    setCareer(!career);
  };

  useEffect(() => {
    dispatch(changeGnb(Number(category)));
  }, []);

  const modelImages = (images) => {
    images.forEach((item, idx) => {
      item.id = idx;
    });
    return (
      <ModelImages>
        {images.map((image, idx) => {
          if (idx === 0) return false;
          if (idx === 2 || idx === 3) {
            return (
              <ModelImage single={false} key={image.id}>
                <img
                  src={`${process.env.REACT_APP_ADMIN_URL}${image.fileMask}`}
                  alt=""
                />
              </ModelImage>
            );
          } else {
            return (
              <ModelImage single={true} key={image.id}>
                <img
                  src={`${process.env.REACT_APP_ADMIN_URL}${image.fileMask}`}
                  alt=""
                />
              </ModelImage>
            );
          }
        })}
      </ModelImages>
    );
  };
  const careerList = (careerList) => {
    careerList.forEach((item, idx) => {
      item.id = idx;
    });
    return (
      <ModelCareer>
        <div className="model-career__head">
          <Title3 weight="700">경력사항</Title3>
          <ButtonPlus
            className={`${career ? "is-active" : ""}`}
            onClick={onToggle}
          >
            button
          </ButtonPlus>
        </div>
        <ul className={`model-career__list ${career ? "is-active" : ""}`}>
          {careerList.map((item) => {
            return (
              <li className="model-career__item" key={item.id}>
                <Body1 as="h3" className="model-career__tit" weight="700">
                  {item.title}
                </Body1>
                <Body3 color={darkGray}>{item.txt}</Body3>
              </li>
            );
          })}
        </ul>
      </ModelCareer>
    );
  };

  const modelViewItem = async () => {
    const modelData = await modelViewApi(category, number);
    setModel(modelData);
  };
  useEffect(() => {
    modelViewItem();
  }, []);
  const size3 = (number) => {
    const sizes = model.size3 && model.size3;
    const size = sizes.split("-");
    return size[number];
  };
  if (model === null || model === undefined) return false;
  return (
    <ModelWrap>
      <MainVisual>
        <img
          src={`${process.env.REACT_APP_ADMIN_URL}${model.modelImage[0].fileMask}`}
          alt=""
        />
        <h1>
          <Title2
            as="span"
            color={yellow}
            upper={true}
            className="main-visual__eng font-abril"
          >
            {model.modelEngName}
          </Title2>
          <Title3
            as="span"
            color="#fff"
            margin="8px 0 0 0"
            className="main-visual__kor"
          >
            {model.modelKorName}
          </Title3>
        </h1>
        <ButtonClose>
          <Link to={`/modelList/${category}`}>
            <span></span>
          </Link>
        </ButtonClose>
      </MainVisual>
      <ModelInfo>
        <li>
          <Body1 as="span" className="model-info__tit">
            Height
          </Body1>
          <Body1 as="span" className="model-info__txt">
            {model.height}cm
          </Body1>
        </li>
        <li className="model-info__3size">
          <Body1 as="span" className="model-info__tit">
            B
          </Body1>
          <Body1 as="span" className="model-info__txt">
            {size3(0)}
          </Body1>
          <Body1 as="span" className="model-info__bar">
            -
          </Body1>
          <Body1 as="span" className="model-info__tit">
            W
          </Body1>
          <Body1 as="span" className="model-info__txt">
            {size3(1)}
          </Body1>
          <Body1 as="span" className="model-info__bar">
            -
          </Body1>
          <Body1 as="span" className="model-info__tit">
            H
          </Body1>
          <Body1 as="span" className="model-info__txt">
            {size3(2)}
          </Body1>
        </li>
        <li>
          <Body1 as="span" className="model-info__tit">
            Shoes
          </Body1>
          <Body1 as="span" className="model-info__txt">
            {model.shoes}mm
          </Body1>
        </li>
      </ModelInfo>
      {model.careerList && careerList(model.careerList)}
      {model.modelImage && modelImages(model.modelImage)}
    </ModelWrap>
  );
};

export default ModelView;
