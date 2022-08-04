import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  yellow,
  darkYellow,
  deepYellow,
  lightGray,
  darkGray,
} from "../../style/color";
import { Title2, Title3, Body1, Body3 } from "../../style/font";
import { calcRem } from "../../style/font";
import { productionViewApi } from "../../services/production";
import { changeGnb } from "../../modules/action";
import { useDispatch } from "react-redux";

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
    console.log(data);
  };

  useEffect(() => {
    productionViewItem();
  }, []);
  if (productionData === null) return false;
  return (
    <>
      <h1>{productionData.title}</h1>
      <p>{productionData.description}</p>
    </>
  );
};

export default ProductionView;
