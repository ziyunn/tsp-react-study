import styled from "styled-components";
import {calcRem,calclH} from "./function";

const defaultLetter = 0.06;


const Title1 = styled.p`
  font-size:${calcRem(60)}rem;
  line-height:${calclH(70,60)}; 
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  text-transform: ${(props)=> props.upper ? "uppercase" : "none"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

const Title2 = styled.p`
  font-size:${calcRem(40)}rem;
  line-height:${calclH(70,60)}; 
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  text-transform: ${(props)=> props.upper ? "uppercase" : "none"};
`;

const Title3 = styled.p`
  font-size:${calcRem(24)}rem;
  line-height:${calclH(32,24)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

const Body1 = styled.p`
  font-size:${calcRem(16)}rem;
  line-height:${calclH(26,16)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

const Body2 = styled.p`
  font-size:${calcRem(14)}rem;
  line-height:${calclH(24,14)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;


const Body3 = styled.p`
  font-size:${calcRem(12)}rem;
  line-height:${calclH(22,12)};
  letter-spacing: ${defaultLetter}rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "inherit"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

export {Title1, Title2, Title3, Body1, Body2, Body3, calcRem, calclH}