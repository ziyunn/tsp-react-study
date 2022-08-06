import React from "react";
import styled from "styled-components";
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
    display: inline-block;
  }
`;

const Pagination = (props) => (
  <>
    <PaginationStyle>
      <Body2 className="pagination__item" color={darkGray} as="li">
        &lt;
      </Body2>
      <Body2 className="pagination__item" color={darkGray} as="li">
        1
      </Body2>
    </PaginationStyle>
  </>
);

export default Pagination;
