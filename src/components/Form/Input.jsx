import React from "react";
import styled from "styled-components";
import { calcRem } from "../../style/font";
import icoMagnifier from "assets/images/production/icon_magnifier.png";

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
  }
`;

const Input = (props) => {
  return (
    <InputStyle1>
      <input type="text" placeholder="검색어를 입력하세요" />
      <button type="button">검색하기</button>
    </InputStyle1>
  );
};

export default Input;
