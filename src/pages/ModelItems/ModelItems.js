import React from 'react';

import './ModelItems.scss';

const ModelItems = ({list}) => {
  const {name, height, size} = list;

  return (
    <li className="model_items">
      <p className="model_items_img"><img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" /></p>
      <p className="model_items_name">{name}</p>
      <p className="model_items_height">{height}</p>
      <p className="model_items_size">{size}</p>
    </li>
  );
};

export default ModelItems;