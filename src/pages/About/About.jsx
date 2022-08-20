import React from "react";
import { Title1, Title3, Body1, Body2, Body3, calcRem } from "../../style/font";
import { darkGray, yellow, gray } from "../../style/color";
import AboutImage from "assets/images/about/img.png";

import parse from "html-react-parser/dist/html-react-parser";

import styled from "styled-components";

const businessList = [
  "PRODUCTION",
  "BRAND MARKING",
  "MODEL AGENCY",
  "MODEL ACADEMY",
  "TSP STUDIO",
];

const productionList = [
  {
    ID: "1",
    ABBREVIATION: "F.",
    TITLE: "FASHION SHOW PRODUCTION",
    SUBTITLE:
      "새로운 기획방법과 연출로 클라이언트와의<br/>지속적인 커뮤니케이션",
    TXT:
      "디자이너&브랜드패션쇼<br/>" +
      "패션디자인&모델 콘테스트<br/>" +
      "브랜드 런칭 프로모션<br/>" +
      "대학교졸업작품패션쇼<br/>" +
      "시니어모델패션쇼브랜드품평회<br/>" +
      "기업행사 및 컨퍼런스",
  },
  {
    ID: "2",
    ABBREVIATION: "M.",
    TITLE: "MODEL MANAGEMENT",
    SUBTITLE:
      "모델의 전체적인 매니징과 각종 광고 및<br/>" +
      "브랜드 촬영을 통한 모델 토탈 마케팅",
    TXT:
      "패션모델 매니지먼트<br/>" +
      "광고모델 에이전시<br/>" +
      "패션모델 에이전시<br/>" +
      "연기자 및 모델 엔터테인먼트<br/>" +
      "시니어모델 매니지먼트 및 에이전시",
  },
  {
    ID: "3",
    ABBREVIATION: "A.",
    TITLE: "MODEL ACADEMY",
    SUBTITLE:
      "전문적인 패션모델 교육과 교수출신<br/>" + "강사진들의 퀄리티 높은 교육",
    TXT:
      "패션모델 아카데미<br/>" +
      "시니어모델 아카데미<br/>" +
      "키즈모델 아카데미<br/>" +
      "연기 아카데미<br/>" +
      "모델 포트폴리오",
  },
  {
    ID: "4",
    ABBREVIATION: "B.",
    TITLE: "BRAND MAKATING",
    SUBTITLE:
      "브랜드의 마케팅 기획으로<br/>" + "최고의 만족도로 보답하고 있습니다",
    TXT:
      "브랜드 기획<br/>" +
      "바이럴 마케팅<br/>" +
      "영상 기획 및 연출<br/>" +
      "SNS 마케팅",
  },
];

const AboutTop = styled.section`
  .about-top {
    &__tit {
      margin: 0;
    }
    &__wrap {
      padding: ${calcRem(136)}rem ${calcRem(40)}rem 0;
    }
    &__inner {
      position: relative;
    }
    &__span {
      position: absolute;
      &:nth-child(1) {
        top: -${calcRem(32)}rem;
        left: -${calcRem(24)}rem;
      }
      &:nth-child(2) {
        top: ${calcRem(32)}rem;
        right: -${calcRem(24)}rem;
        color: transparent;
        text-stroke: 1px ${yellow};
        -webkit-text-stroke: 1px ${yellow};
      }
      &:nth-child(3) {
        bottom: -${calcRem(24)}rem;
        right: -${calcRem(24)}rem;
      }
    }
  }
`;

const AboutWrap = styled.section`
  background: #000000;
  text-align: center;

  .about__title {
    position: relative;

    &:after {
      display: block;
      margin: ${calcRem(16)}rem auto;
      width: ${calcRem(2)}rem;
      height: ${calcRem(80)}rem;
      background: ${darkGray};
      content: "";
    }
  }

  .about__txt {
    margin-top: ${calcRem(16)}rem;
  }

  .about__point {
    margin-bottom: ${calcRem(16)}rem;
  }

  .about__production + .about__production {
    margin-top: ${calcRem(16)}rem;
  }
`;
const AboutArea = styled.section`
  padding: ${calcRem(64)}rem ${calcRem(16)}rem ${calcRem(40)}rem;
  &.type-yellow {
    background: ${yellow};
  }
`;

const AboutList = styled.ul`
  margin-left: -${calcRem(8)}rem;
  justify-content: center;
  padding: 0;
  .about {
    &__item {
      display: inline-block;
      width: 50%;
      padding-left: ${calcRem(8)}rem;
      color: #fff;
      margin-top: ${calcRem(16)}rem;
      box-sizing: border-box;
    }

    &__box {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }

    &__circle {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: #000;
    }
  }
`;

const aboutList = () => {
  return (
    <AboutList className="about__list">
      {businessList.map((item, idx) => {
        return (
          <li className="about__item" key={idx}>
            <div className="about__box">
              <Body1 className="about__circle">{item}</Body1>
            </div>
          </li>
        );
      })}
    </AboutList>
  );
};

const aboutProductions = () => {
  return (
    <>
      {productionList.map((item) => {
        return (
          <div className="about__production" key={item.ID}>
            <Title1
              as="h4"
              weight="700"
              color={yellow}
              className="font-abril about__point"
            >
              {item.ABBREVIATION}
            </Title1>
            <Body1 as="p" color="#fff" weight="700">
              {item.TITLE}
            </Body1>
            <Body2 as="p" color="#fff">
              {parse(item.SUBTITLE)}
            </Body2>
            <Body1 as="p" color={gray} className="about__txt">
              {parse(item.TXT)}
            </Body1>
          </div>
        );
      })}
    </>
  );
};

const About = (props) => {
  return (
    <>
      <AboutWrap>
        <AboutTop>
          <div className="about-top__wrap">
            <div className="about-top__inner">
              <h1 className="about-top__tit">
                <Title1 color={yellow} className="about-top__span font-abril">
                  WHO
                </Title1>
                <Title1 color={yellow} className="about-top__span font-abril">
                  WE
                </Title1>
                <Title1 color={yellow} className="about-top__span font-abril">
                  ARE
                </Title1>
              </h1>
              <img src={AboutImage} className="img-w100" alt="" />
            </div>
          </div>
        </AboutTop>
        <AboutArea>
          <Title3 as="h3" weight="700" color="#fff" className="about__title">
            ABOUT TSP
          </Title3>
          <Title3 as="h4" weight="700" color="#fff">
            THE SHOW PROJECT
          </Title3>
          <Title3 as="p" color="#fff">
            더쇼프로젝트
          </Title3>
          <Body2 color="#fff" className="about__txt">
            국내외 패션쇼 연출 및 기획, 광고, 잡지, 화보 등 모델 전반의
            비즈니스는 물론 각종 미디어, 모델 교육과 다양한 컨텐츠를 보유하고
            있습니다. 하나의 행사를 진행함에 있어 클라이언트와 상호간의 ‘공생’
            ‘상생’을 기본으로 양질의 멀티 컨텐츠를 통해 새로운 가치를 창출할
            것을 약속합니다.
          </Body2>
          <Body3 color={gray} className="about__txt">
            The company has various contents in modeling education, directing
            and planning fashion shows in domestic and overseas. Also various
            contents of overall model businesses such as the media,
            advertisements, magazines and pictorials. We create new values
            through multi-contents based on synergies among clients and events.
          </Body3>
        </AboutArea>
        <AboutArea className="type-yellow">
          <Title3 as="h3" weight="700" className="about__title">
            BUSINESS AREA
          </Title3>
          <Title3 as="p" weight="700">
            Various Contents -<br />
            Communication -<br />
            Professional
          </Title3>
          <Body2 className="about__txt">
            더쇼프로젝트의 다양한 컨텐츠를 활용한 전문성과 각각의 분야에 초점을
            맞춰 지속 가능하고 클라이언트가 선택한 파트너가 되는 것입니다.
          </Body2>
          {aboutList()}
        </AboutArea>
        <AboutArea>
          <Title3 as="h3" weight="700" color="#fff" className="about__title">
            PRODUCTION
          </Title3>
          {aboutProductions()}
        </AboutArea>
      </AboutWrap>
    </>
  );
};

export default About;
