import React from "react"

import styled from "styled-components"
import Layout from "../components/Layout"
import Content from "../components/ContentBox"
import Skill from "../components/Skill"
import SubSection from "../components/SubSection"
import Profile from "../components/Profile"
import { LinkList } from "../components/Footer"

const ProjectArr = [
  {
    title: "휠라 메인페이지 애니메이션효과 구조 설계",
    date: "2021년 01월 - 2021냔 02월",
    content:
      "메인페이지에 적용되는 애니메이션효과를 관리자에서 스타일별로 설정하도록 개발하는 과정에서 clsss네이밍, animation css, html 구조 설계를 담당하였습니다 ",
    link: "https://www.fila.co.kr/main/main.asp",
  },
  {
    title: "쥬케로(ZUCCHERO) 온라인몰",
    date: "2020년 11월 - 2021년 01월",
    content:
      "전담하여 퍼블리싱 하였으며 오픈 전 개발수정요청, 퍼블리싱 수정작업 까지 담당하였습니다  ",
    link: "https://www.zucchero.co.kr/main/main.asp",
  },
  {
    title: "레스포삭 온라인몰 리뉴얼",
    date: "2020년 10월 - 2021년 11월",
    content:
      "1000px로 컨텐츠가 고정된 메인,리스트 페이지에서 와이드로 레이아웃/스타일/html 구조를 바꾸는 리뉴얼 작업을 하였습니다.",
    link: "https://www.lesportsackorea.com:447/",
  },
  {
    title: "INFO FILA 사이트",
    date: "2020년 9월",
    content:
      "원페이지 반응형 및 Scrollmagic 플러그인 을 활용하여 스크롤 이벤트 작업을 하였습니다.",
    link: "",
  },
  {
    title: "무스너클 온라인몰",
    date: "2020년 6월 - 2020년 8월",
    content:
      "모바일 서브페이지(상품리스트/상세/결제/마이페이지)를 담당하여 퍼블리싱 작업을 하였습니다. 후에 데스크탑까지 수정작업에 참여하였습니다. ",
    link: "https://www.mooseknucklescanada.kr/main/main.asp",
  },
  {
    title: "라이카 온라인몰",
    date: "2019년 12월 - 2020년 3월",
    content:
      "라이카 서브페이지 작업에 참여하였습니다. 스크롤 효과가 들어가는 상품 상세 페이지를 팀원과 나누어서 작업하였고 자사 스크롤 플러그인을 활용하여 팀원과 ie에서 깨짐문제(크로스브라우징)/플러그인 스크롤 속도느림(스크롤 효과)을 개선하였습니다. ",
    link: "https://www.leica-store.co.kr/product/s3/10827/",
  },
  {
    title: "부쉬넬 온라인몰",
    date: "2019년 12월 - 2020년 2월",
    content: "전담하여 퍼블리싱 작업하였습니다",
    link: "https://www.bushnellgolfkorea.co.kr",
  },
  {
    title: "판도라 온라인몰",
    date: "2019년 9월 - 2019년 10월, 2020년 리뉴얼 작업",
    content:
      "서브페이지(결제/customer/마이페이지/회원가입 및) 작업에 참여하였으며 후에 레이아웃/리스트페이지 리뉴얼을 담당하였습니다",
    link: "https://kr.pandora.net/main/main.asp",
  },
  {
    title: "바닐라코 크루 사이트",
    date: "2019년 8월",
    content: "전담하여 작업하였으며 반응형으로 작업했던 프로젝트입니다.",
    link: "http://www.banila-crew.com/main/main.asp",
  },
  {
    title: "스타럭스 임직원 사이트",
    date: "2019년 8월",
    content: "전담하여 메인/서브 페이지를 담당하였습니다. ",
    link: "",
  },
  {
    title: "캐드키드슨 온라인몰",
    date: "2019년 6월",
    content:
      "메인/리스트 페이지 리뉴얼 작업을 하였으며 레이아웃/메인컨텐츠가 와이드로 바뀌면서 slider/html구조/css가 대폭 수정되었던 프로젝트 였습니다.",
    link: "http://www.cathkidstonkorea.co.kr/main/index.asp",
  },
  {
    title: "카파 온라인몰",
    date: "2019년 5월 - 2019년 6월",
    content: "전담하여 메인/서브 페이지 작업",
    link: "",
  },
  {
    title: "키플링 온라인몰",
    date: "2018년 9월",
    content: "키플링 메인 스타일변경 리뉴얼 작업.",
    link: "",
  },
  {
    title: "골든구스 온라인몰",
    date: "2018년 5월 - 2018년 6월",
    content: "서브페이지(결제,마이페이지,회원가입 등) 담당하여 작업하였습니다",
    link: "",
  },
  {
    title: "콜럼비아 온라인몰",
    date: "2018년 4월 - 2018년 6월, 2019년 리뉴얼 작업",
    content:
      "하드코딩 페이지에 참여하였으며 애니메이션을 스타일별로 문서화하여 페이지에 적용하는 것까지 작업하였습니다. (후에 메인 리뉴얼 작업)",
    link: "",
  },
  {
    title: "휠라 온라인몰",
    date: "2018년 4월 - 2018년 8월",
    content:
      "리뉴얼로 스타일/구조가 변경되면서 신규 페이지로 작업을 하였으며 회원가입/로그인/고객센터를 작업하였습니다",
  },
  {
    title: "레페토 온라인몰",
    date: "2018년 2월",
    content: "하드코딩 페이지를 담당하여 작업하였습니다",
  },
]

const About = () => {
  return (
    <Layout>
      <Content title="About">
        <AboutWrap>
          <Profile />
          <SubSection title="Skills">
            <Skill />
          </SubSection>
          <SubSection title="Carrer">
            <CarrerContent>
              <dt>
                (주)스타일쉽 UI팀 퍼블리싱 근무
                <br />
                <span>2018.02 - 2021.02</span>
              </dt>
              <dd>
                패션브랜드를 중점으로 웹사이트를 제작하는 웹에이전시에서 UI팀
                퍼블리셔로 3년간 근무하였으며 주로 유지보수,사이트 퍼블리싱
                구축,이벤트 페이지 작업,반응형 을 담당하여 작업하였습니다.
              </dd>
            </CarrerContent>
            {ProjectArr.map((v) => (
              <CarrerContent>
                <dt>
                  {`- ${v.title}`}
                  <span>{v.date}</span>
                </dt>
                <dd>{v.content}</dd>
                <dd>
                  <a href={v.link} target="_blank" rel="noreferrer noopener">
                    {v.link}
                  </a>
                </dd>
              </CarrerContent>
            ))}
          </SubSection>
          <SubSection title="Visit">
            <LinkList />
          </SubSection>
        </AboutWrap>
      </Content>
    </Layout>
  )
}
const AboutWrap = styled.div`
  max-width: 760px;
  margin: 0 auto;
`
const CarrerContent = styled.dl`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  & dt {
    margin-bottom: 1rem;
    font-weight: 800;
    > span {
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
      color: rgb(112, 112, 112);
    }
  }
  & dd {
    margin-bottom: 1rem;
    word-break: keep-all;
    font-size: 1.4rem;
    & a {
      font-size: 1.2rem;
    }
  }
`

export default About
