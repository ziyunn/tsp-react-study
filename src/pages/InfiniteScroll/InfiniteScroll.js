import { memo, useCallback, useEffect, useState ,useRef} from "react";
import styled, { createGlobalStyle } from "styled-components";

import {getCommnetById} from "services/scroll"

import Item from "./Item";
import Loader from "./Loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const InfiniteScroll = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loader = useRef(null);


  const getMoreItem = useCallback(async () => {
    try {
      console.log(currentPage)
      await setIsLoaded(true);
      const res = await getCommnetById(currentPage);
      await setItemLists((prev) => [...prev, ...res]);
      setIsLoaded(false);
    } catch (err) {
      setError(err);
    }
  }, [currentPage]);

  useEffect(() => {
    getMoreItem();
  }, [currentPage]);


  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      setCurrentPage((page) => page + 1);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (loader.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(loader.current);
    }
    return () => observer && observer.disconnect();
  }, [loader]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((list) => {
          return <Item list={list} key={list.id} />;
        })}
        <div ref={loader} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  );
};

export default memo(InfiniteScroll);