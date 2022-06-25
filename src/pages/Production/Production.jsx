import React from "react";
import ProductionImage from "assets/images/production/girl-woman-female-model-spring-collection-790742-pxhere 1.png";
import styled from "styled-components";
import { Title2, Body3, Body2, calcRem } from "../../style/font";
import { black, yellow, gray, white } from "../../style/color";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

const ProductionTop = styled.section`
  position: relative;
  img {
    vertical-align: middle;
  }
  .production-top {
    &__wrap {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
    }
    &__slogan {
      text-align: center;
    }
    &__txt {
      margin-top: ${calcRem(8)}rem;
    }
  }
`;

const ProductionForm = styled.section`
  background: #000000;
  padding: ${calcRem(40)}rem ${calcRem(16)}rem ${calcRem(16)}rem;
`;

const ProductionBody = styled.section`
  background: ${black};
  padding: ${calcRem(16)}rem;
  .production-body {
    &__txt {
      word-break: keep-all;
    }
    &__box {
      padding-bottom: ${calcRem(8)}rem;
      border-bottom: ${calcRem(2)}rem solid ${yellow};
    }
  }
  ul {
    margin: 0 0 0 -${calcRem(8)}rem;
    padding: 0;
    list-style: none;
    font-size: 0;
  }
  li {
    display: inline-block;
    padding-left: ${calcRem(8)}rem;
    width: 50%;
  }
  img {
    vertical-align: middle;
    width: 100%;
  }
`;

const ProductionList = () => {
  return (
    <ul>
      <li>
        <div className="production-body__box">
          <img src={ProductionImage} alt="" />
          <Body2 color={white} className="production-body__txt">
            2021국제패션디자인전문학교 졸업작품 패션쇼
          </Body2>
        </div>
      </li>
    </ul>
  );
};

const Production = (props) => {
  return (
    <>
      <ProductionTop>
        <div className="production-top__wrap">
          <div className="production-top__slogan">
            <Title2 className="font-abril" color={yellow}>
              FASHION SHOW
            </Title2>
            <Body3 className="production-top__txt" color={gray}>
              This is a fashion show directed by Theshowproject.
            </Body3>
          </div>
        </div>
        <img src={ProductionImage} className="img-w100" alt="" />
      </ProductionTop>
      <ProductionForm>
        <Input />
        <Select />
      </ProductionForm>
      <ProductionBody>{ProductionList()}</ProductionBody>
    </>
  );
};

export default Production;
