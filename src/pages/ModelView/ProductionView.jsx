import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser/dist/html-react-parser";

import styled from "styled-components";
import {
  yellow,
  darkYellow,
  deepYellow,
  lightGray,
  darkGray,
  white,
} from "../../style/color";
import { Title2, Title3, Body1, Body3 } from "../../style/font";
import { calcRem, calclH } from "../../style/font";
import { productionViewApi } from "../../services/production";
import { changeGnb } from "../../modules/action";
import { useDispatch } from "react-redux";
import Production from "../Production/Production";

const ProductionWrap = styled.section`
  min-height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
  padding: ${calcRem(96)}rem ${calcRem(16)}rem ${calcRem(40)}rem;
  box-sizing: border-box;
`;

const ProductionHeader = styled.header`
  padding-bottom: ${calcRem(16)}rem;
  border-bottom: 2px solid ${yellow};
`;

const ProductionBody = styled.div`
  padding-top: ${calcRem(40)}rem;
  .production-desc {
    white-space: pre-line;
  }
`;

const ButtonStyle = styled.div`
	display: inline-block;
  margin-top: ${calcRem(40)}rem;
	padding: ${calcRem(16)}rem ${calcRem(40)}rem;
	background: ${yellow};
	border: none;
	font-size: ${calcRem(14)}rem;
  line-height:${calclH(24, 14)};
	font-weight: 700;
  font-family: 'Noto Sans KR', Sans-Serif, 'Malgun Gothic', '맑은 고딕', '맑은고딕', 'Dotum', '돋움';
	a {
		display: block;
  }
}
`;
const ProductionView = () => {
  const [productionData, setProductionData] = useState(null);
  const { category, number } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeGnb(Number(category)));
  }, []);
  const productionViewItem = async () => {
    const data = await productionViewApi(number);
    setProductionData(data);
  };

  useEffect(() => {
    productionViewItem();
  }, []);
  if (productionData === null) return false;
  return (
    <ProductionWrap>
      <ProductionHeader>
        <Title3 color={white}>{productionData.title}</Title3>
      </ProductionHeader>
      <ProductionBody>
        <Body3 color={white} className="production-desc">
          {parse(productionData.description)}
        </Body3>
        <div className="txt-c">
          <ButtonStyle>
            <Link to={`/production`}>목록</Link>
          </ButtonStyle>
        </div>
      </ProductionBody>
    </ProductionWrap>
  );
};

export default ProductionView;
