import React from "react";
import styled from "styled-components";
import { calcRem } from "../../style/font";
import icoMagnifier from "assets/images/production/icon_magnifier.png";
import { changeSearchValue } from "../../modules/action";
import { productionSearchApi } from "../../services/production";

const InputStyle1 = styled.div`
  position: relative;
  input {
    width: 100%;
    border: none;
    height: ${calcRem(58)}rem;
    padding: ${calcRem(16)}rem;
    font-size: ${calcRem(12)}rem;
    box-sizing: border-box;
  }
  button {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${calcRem(13)}rem;
    margin: auto 0;
    display: block;
    width: ${calcRem(14)}rem;
    height: ${calcRem(14)}rem;
    background: transparent;
    border: none;
    background: url(${icoMagnifier}) no-repeat center center / contain;
    text-indent: -999px;
    z-index: 20;
  }
`;

const Input = (props) => {
  const handleChange = (value) => {
    props.dispatch(changeSearchValue(value));
  };
  const onSearch = async () => {
    const { category, text } = props.reducerState.production;
    const productionData = await productionSearchApi(category, text);
    props.setList(productionData.productionList);
  };
  return (
    <InputStyle1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button type="button" onClick={onSearch}>
        검색하기
      </button>
    </InputStyle1>
  );
};

export default Input;
