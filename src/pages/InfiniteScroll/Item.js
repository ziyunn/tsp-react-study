import { memo } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  .ItemWrap {
    width: 350px;
    height: 370px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 6px;
  }

  .ItemWrap-Top {
    display: flex;
    width: 350px;
    height: 170px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #e2e5e7;
    color: #566270;
    font-size: 2.25rem;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .ItemWrap-Body {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px;
  }

  .ItemWrap-Body-Title {
    width: 300px;
    height: auto;
    margin: 16px;
    border-radius: 4px;
    background-color: #e2e5e7;
  }
`;

const Item = ({ list }) => {
  const {id, name, email, body} = list
  return (
    <ItemWrap>
      <div className="ItemWrap">
        <div className="ItemWrap-Top ">{id}</div>
        <div className="ItemWrap-Body">
          <div className="ItemWrap-Body-Title">{name}</div>
          <div className="ItemWrap-Body-Title">{email}</div>
          <div className="ItemWrap-Body-Title">{body}</div>
        </div>
      </div>
    </ItemWrap>
  );
};

export default memo(Item);