import React, {useState, useEffect} from 'react';

import ModelItems from './../ModelItems/ModelItems'

import './ModelList.scss'

const ModelList = () => {
  
  const modelList = [
    {
      id: 1,
      name: 'KIM YE YEONG',
      height: '173cm',
      size: '31-24-34'
    },
    {
      id: 2,
      name: 'LEE HWA SEON',
      height: '174cm',
      size: '33-24-34'
    },
    {
      id: 3,
      name: 'CHOI MOON SUN',
      height: '172cm',
      size: '31-25-36'
    },
    {
      id: 4,
      name: 'SUN SO YEON',
      height: '174cm',
      size: '33-24-34'
    },
    {
      id: 5,
      name: 'PARK CHAE RIM',
      height: '180cm',
      size: '32-24-35'
    },
    {
      id: 6,
      name: 'JOO SEO HYEON',
      height: '162cm',
      size: '31-24-34'    
    },
    {
      id: 7,
      name: 'LEE JIN JU',
      height: '173cm',
      size: '31-20-33'
    },
    {
      id: 8,
      name: 'KIM DA WON',
      height: '175cm',
      size: '33-23-34'
    },
  ];

  const modelList2 = [
    {
      id: 9,
      name: '123123123',
      height: '166cm',
      size: '31-23-33'
    },
    {
      id: 10,
      name: 'testtesttest',
      height: '177cm',
      size: '30-23-35'    
    },
  ]

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setItemLists(modelList);
  }, []);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = modelList2;
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  return (
    <>
      <h2>FEMALE</h2>
      <ul>
        { itemLists.map(list => <ModelItems list={list} key={list.id} />)}
      </ul>
      
      <div className="more_btn" ref={setTarget}>
        <span>load more</span>
      </div>
    </>
  );
};

export default ModelList;