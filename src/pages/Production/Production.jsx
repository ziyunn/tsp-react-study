import React, { useState, useEffect } from "react";
import ProductionImage from "assets/images/production/girl-woman-female-model-spring-collection-790742-pxhere 1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title2, Body3, Body2, calcRem } from "../../style/font";
import { black, yellow, gray, white } from "../../style/color";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import Pagination from "../../components/Pagination/Pagination";
import { productionListApi } from "../../services/production";

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
const ProductionWrap = styled.section`
  background: ${black};
`;
const ProductionForm = styled.section`
  background: ${black};
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
    box-sizing: border-box;
    vertical-align: top;
  }
  img {
    vertical-align: middle;
    width: 100%;
  }
`;

const Production = (props) => {
  const [productionList, setProductionList] = useState(null);
  useEffect(() => {
    getList();
  }, []);
  const ProductionList = (productionList) => {
    return (
      <ul>
        {productionList.map((item) => {
          return (
            <Link to={`/productionView/${item.idx}`}>
              <li key={item.idx}>
                <div className="production-body__box">
                  <img
                    src={`${process.env.REACT_APP_ADMIN_URL}${item.productionImage[0].fileMask}`}
                    alt={item.title}
                  />
                  <Body2 color={white} className="production-body__txt">
                    {item.title}
                  </Body2>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  const getList = async () => {
    const productionData = await productionListApi(1, 1);
    setProductionList(productionData.productionList);
  };

  const _setList = (data) => {
    setProductionList(data);
  };

  if (!productionList) return false;
  return (
    <ProductionWrap>
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
        <Input
          dispatch={props.dispatch}
          reducerState={props.reducerState}
          setList={_setList}
        />
        <Select dispatch={props.dispatch} />
      </ProductionForm>
      <ProductionBody>{ProductionList(productionList)}</ProductionBody>
      <Pagination />
    </ProductionWrap>
  );
};

export default Production;
