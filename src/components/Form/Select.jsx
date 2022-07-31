import React from "react";
import styled from "styled-components";
import { calcRem } from "../../style/function";
import icoArrow from "assets/images/production/icon_arrow.png";
import { changeCategory } from "../../modules/action";

const SelectStyle1 = styled.div`
  margin-top: ${calcRem(16)}rem;
  background: url(${icoArrow}) no-repeat center right ${calcRem(10)}rem /
    ${calcRem(6)}rem ${calcRem(4)}rem;
  select {
    width: 100%;
    border: none;
    height: ${calcRem(40)}rem;
    line-height: ${calcRem(40)}rem;
    padding: 0 ${calcRem(16)}rem;
    font-size: ${calcRem(12)}rem;
    box-sizing: border-box;
    background: transparent;
    border: 1px solid #666;
    color: #fff;
    appearance: none;
  }
`;

const Select = (props) => {
  const handleChange = (value) => {
    console.log(value);
    props.dispatch(changeCategory(value));
  };
  return (
    <SelectStyle1>
      <select
        name=""
        id=""
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option value="0">전체</option>
        <option value="1">제목</option>
        <option value="2">내용</option>
      </select>
    </SelectStyle1>
  );
};

export default Select;
