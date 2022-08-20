import React, { useState } from "react";
import styled from "styled-components";
import PrevImage from "assets/images/pagenation/prev.png";
import FirstPrevImage from "assets/images/pagenation/first_prev.png";
import NextImage from "assets/images/pagenation/next.png";
import LastNextImage from "assets/images/pagenation/last_next.png";

import { calcRem } from "../../style/function";
import { white, darkGray } from "../../style/color";
import { Title2, Body3, Body2 } from "../../style/font";

const PaginationStyle = styled.ul`
  position: relative;
  background: #000;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  li {
    color: ${darkGray};
    &.is-active {
      color: ${white};
    }
  }
  .pagination__item {
    display: inline-flex;
    vertical-align: top;
    width: ${calcRem(24)}rem;
    height: ${calcRem(24)}rem;
    align-items: center;
    justify-content: center;
    img {
      width: ${calcRem(5)}rem;
      height: ${calcRem(8)}rem;
    }
  }
`;

const Pagination = (props) => {
  const [activeNum, setActiveNum] = useState(1);

  console.log(props);
  const onPage = (idx) => {
    console.log(idx);
    props.getList(idx);
    setActiveNum(idx);
  };
  return (
    <>
      <PaginationStyle>
        <Body2
          className="pagination__item"
          color={darkGray}
          as="li"
          onClick={() => {
            onPage(1);
          }}
        >
          <img src={FirstPrevImage} />
        </Body2>
        <Body2
          className="pagination__item"
          color={darkGray}
          as="li"
          onClick={() => {
            onPage(activeNum - 1);
          }}
        >
          <img src={PrevImage} />
        </Body2>
        {[...Array(props.totalList)].map((item, idx) => {
          return (
            <Body2
              className={`pagination__item ${
                idx + 1 === activeNum ? "is-active" : ""
              }`}
              color={darkGray}
              as="li"
              key={idx}
              onClick={() => {
                onPage(idx + 1);
              }}
            >
              {idx + 1}
            </Body2>
          );
        })}
        <Body2 className="pagination__item" color={darkGray} as="li">
          <img src={NextImage} />
        </Body2>
        <Body2 className="pagination__item" color={darkGray} as="li">
          <img src={LastNextImage} />
        </Body2>
      </PaginationStyle>
    </>
  );
};

export default Pagination;
