import React from "react"

import styled from "styled-components"
import Layout from "../components/Layout"
import Content from "../components/ContentBox"
import SubSection from "../components/SubSection"
import Profile from "../components/Profile"
import { LinkList } from "../components/Footer"

const ProjectArr = [
  {
    title: "휠라 메인페이지 인터랙티브 효과 구조 설계",
    date: "2021년 01월 - 2021냔 02월",
    content:
      "메인페이지에 적용되는 인터랙티브효과를 관리자에서 스타일별로 적용 할 수 있도록 개발하는 과정에서 css animation, HTML구조, class 네이밍 설계를 담당하였습니다.",
    detail: `- 인터랙티브가 적용될 slider, 배너 HTML 구조 설계
- CSS BEM 방식으로 클래스 네이밍
- 메인페이지 전체 animation 적용
- animation 스타일별로(클래스 별로 다르게) 구현`,
    link: "https://www.fila.co.kr/main/main.asp",
  },
  {
    title: "쥬케로(ZUCCHERO) 온라인몰",
    date: "2020년 11월 - 2021년 01월",
    content: "전담하여 퍼블리싱 하였습니다",
    detail: `- PC/MOBILE 작업
- slick slider 라이브러리 커스텀 적용/ 자사라이브러리 활용
- 개발 수정요청/ 유지보수 담당 `,
    link: "https://www.zucchero.co.kr/main/main.asp",
  },
  {
    title: "레스포삭 온라인몰 리뉴얼",
    date: "2020년 10월 - 2021년 11월",
    content:
      "1000px로 컨텐츠가 고정된 메인,리스트 페이지에서 와이드로 레이아웃/스타일/html 구조를 바꾸는 리뉴얼 작업을 하였습니다.",
    detail: `- 와이드로 레이아웃 수정
- bxSlider 에서 slick slider 로 라이브러리 변경
- 반응형 웹
- 디자인 변경에 따라 header , 상품 리스트 및 스크립트 수정`,
    link: "https://www.lesportsackorea.com:447/",
  },
  {
    title: "INFO FILA 사이트",
    date: "2020년 9월",
    content: "브랜드 소개 웹사이트 이며 전담하여 작업하였습니다",
    detail: `- 원페이지 및 반응형
- scrollMagic 라이브러리 활용/ 스크롤 이벤트 작업`,
    link: "",
  },
  {
    title: "무스너클 온라인몰",
    date: "2020년 6월 - 2020년 8월",
    content:
      "모바일 서브페이지(상품리스트/상세/결제/마이페이지/매장검색)를 담당하여 퍼블리싱 작업을 하였습니다. 후에 데스크탑 수정작업까지 참여하였습니다. ",
    detail: `- slick slider 라이브러리 활용하여 상품 리스트페이지에 이미지 슬라이더 스크립트 커스텀 적용 
- 지도 기반 매장 검색 목록 및 상세 페이지 / 지도 마커 UI`,
    link: "https://www.mooseknucklescanada.kr/main/main.asp",
  },
  {
    title: "SJ DUKO 웹사이트",
    date: "2020년 8월 - 2020년 7월",
    content: "회사 소개 웹사이트로 전담하여 퍼블리싱 작업하였습니다",
    detail: `- 반응형 웹 
- 이미지 줌 슬라이더 적용
- Slider animation 적용
- iframe 영상 비율 개선`,
    link: "https://www.mooseknucklescanada.kr/main/main.asp",
  },
  {
    title: "라이카 온라인몰",
    date: "2019년 12월 - 2020년 3월",
    content:
      "라이카 서브페이지 작업에 참여/스크롤 효과가 들어가는 다수 상품 상세 페이지를 팀원과 나눠서 작업하였습니다.",
    detail: `- PC/MOBILE 서브페이지 작업
- 상품 상세 페이지 스크롤 인터랙티브 작업/ 자사 라이브러리 활용/ IE 깨짐문제(크로스 브라우징) 개선
- 스크롤 속도느림 개선`,
    link: "https://www.leica-store.co.kr/product/s3/10827/",
  },
  {
    title: "휠라 온라인몰 메인 리뉴얼(모바일)",
    date: "2019년 11월 - 2019년 12월",
    content:
      "모바일 메인만 리뉴얼(컨텐츠 변경,추가/ 스타일 변경) 하는 작업이였습니다. ",
    detail: `- 추가 스타일 수정작업
- sly.js 라이브러리를 사용하여 상품 터치슬라이더 스크립트 커스텀`,
    link: "https://www.fila.co.kr/main/main.asp",
  },
  {
    title: "부쉬넬 온라인몰",
    date: "2019년 12월 - 2020년 2월",
    content: "전담하여 퍼블리싱 작업하였습니다",
    detail: `- 영상 슬라이더 작업
- 상품 상세내용 table을 클래스에 따라 가변적 적용
- 상품 상세페이지 스크롤시 영상 재생 스크립트 적용`,
    link: "https://www.bushnellgolfkorea.co.kr",
  },
  {
    title: "판도라 온라인몰",
    date: "2019년 9월 - 2019년 10월, 2020년 리뉴얼 작업",
    content:
      "서브페이지(결제/customer/마이페이지/회원가입 및) 작업에 참여하였으며 후에 레이아웃/상품 리스트페이지 리뉴얼을 담당하였습니다",
    detail: `- 필터별 매장검색 페이지 작업
- HEADER gnb 드롭다운으로 변경/ 배너 추가
- sorting UI 리뉴얼`,
    link: "https://kr.pandora.net/main/main.asp",
  },
  {
    title: "바닐라코 크루 사이트",
    date: "2019년 8월",
    content: "전담하여 작업하였으며 반응형으로 작업했던 프로젝트입니다.",
    detail: `- 반응형 웹
- Swiper.js , slider.js, 자사 라이브러리 활용
- 하단 고정메뉴`,
    link: "http://www.banila-crew.com/main/main.asp",
  },
  {
    title: "스타럭스 임직원 사이트",
    date: "2019년 8월",
    content:
      "스타럭스 임직원들이 이용하는 웹사이트 이며 전담하여 퍼블리싱 담당하였습니다. ",
    detail: `- 반응형 웹
- 사원 검색 팝업 레이아웃
- 출석 페이지 퍼블리싱
- 게시판 editor에 들어가는 규격 table 양식 작업 `,
    link: "",
  },
  {
    title: "캐드키드슨 온라인몰 리뉴얼",
    date: "2019년 6월",
    content:
      "메인/상품 리스트 페이지 리뉴얼 작업을 하였으며 레이아웃/메인컨텐츠가 와이드로 바뀌면서 slider/html구조/css가 대폭 수정되었던 프로젝트 였습니다.",
    detail: `- 반응형 웹
- 레이아웃 변경
- 기존 bxSlider 옵션,스타일 수정
- Sticky menu 상품 유무 텍스트/ 카운터 수정 `,
    link: "http://www.cathkidstonkorea.co.kr/main/index.asp",
  },
  {
    title: "카파 온라인몰",
    date: "2019년 5월 - 2019년 6월",
    content: "전담하여 퍼블리싱 작업하였습니다",
    detail: `- PC,MOBILE 작업
- 스프라이트 이미지를 사용한 상품리뷰 작업 `,
    link: "",
  },
  {
    title: "키플링 온라인몰 리뉴얼",
    date: "2018년 9월",
    content: "전담하여 리뉴얼 작업하였습니다.",
    detail: `- 반응형 웹
- 메인 컨텐츠 추가/스타일 변경/와이드 레이아웃으로 수정 `,
    link: "",
  },
  {
    title: "골든구스 온라인몰",
    date: "2018년 5월 - 2018년 6월, 2019년 리뉴얼 작업",
    content: "서브페이지(결제,마이페이지,회원가입 등) 담당하여 작업하였습니다",
    detail: `- 반응형 이벤트 페이지 작업
- 와이드로 리뉴얼/HEADER gnb 드롭다운으로 수정/클래스명 BEM 방식으로 수정/폰트 수정/ 및 상품 상세페이지/메인 컨텐츠스타일 변경 `,
    link: "",
  },
  {
    title: "콜럼비아 온라인몰",
    date: "2018년 4월 - 2018년 6월, 2019년 2 - 3월 리뉴얼 작업",
    content:
      "서브 페이지 및 하드코딩 페이지에 참여하였으며 추후 리뉴얼 작업을 하였습니다.",
    detail: `- css animation 문서화/animation 클래스 적용
- PC,MOBILE 리뉴얼/1200px 에서 1500px 로 컨텐츠 넓이 변경/메인 컨텐츠 추가/레이아웃 스타일 수정/공통 스타일 수정/sticky 레이아웃(최근본 상품) 작업
- 다수 인터랙티브 이벤트 작업`,
    link: `https://www.columbiakorea.co.kr/main/main.asp
https://www.columbiakorea.co.kr/event/190926/shft.asp    
https://www.columbiakorea.co.kr/event/200107/disney.asp
`,
  },
  {
    title: "휠라 온라인몰 리뉴얼",
    date: "2018년 4월 - 2018년 8월",
    content:
      "스타일/구조가 전체적으로 리뉴얼 되면서 신규 서브페이지(회원가입/로그인/고객센터)를 작업하였습니다",
    detail: `- PC/MOBILE 작업
- 상품 정보 펼침 버튼 구현
- 다수 인터랙티브 이벤트 작업`,
    link: `https://www.fila.co.kr/
https://www.fila.co.kr/promotion/rgb2/index.asp#`,
  },
  {
    title: "레페토 온라인몰",
    date: "2018년 2월",
    content: "하드코딩 페이지를 담당하여 작업하였습니다",
    link: "https://www.repetto.kr/main/main.asp",
  },
]

const skillArr = [
  "웹 표준, 웹 접근성, 시맨틱 마크업, 반응형 웹, 크로스 브라우징",
  "HTML5",
  "CSS3",
  "javascript(es6),jquery",
  "React,SPA",
  "Next.js",
  "Redux,Redux-thunk,Redux-saga",
  "git,github",
]

const About = () => {
  return (
    <Layout>
      <Content title="About">
        <AboutWrap>
          <Profile />
          <SubSection title="보유기술">
            <CarrerContent>
              <ul>
                {skillArr.map((v, i) => (
                  <li>
                    <p>-&nbsp;{v}</p>
                  </li>
                ))}
              </ul>
            </CarrerContent>
          </SubSection>
          <SubSection title="경력">
            <CarrerContent>
              <dl>
                <dt>
                  (주)스타일쉽 UI팀 퍼블리싱 근무
                  <br />
                  <span>2018.02 - 2021.02</span>
                </dt>
                <dd>
                  패션브랜드를 중점으로 웹사이트를 제작하는 웹에이전시에서 UI팀
                  퍼블리셔로 3년간 근무하였으며 주로 유지보수,사이트 퍼블리싱
                  구축,이벤트 페이지 작업,반응형 웹 작업을 담당하여
                  작업하였습니다.
                </dd>
              </dl>
            </CarrerContent>
          </SubSection>
          <SubSection title="프로젝트">
            <AddText>
              웹표준을 준수하고 크로스브라우징에 맞추어 작업을 하였으며 의미있는
              클래스명을 사용하여 웹사이트를 구현 및 작업하였습니다.
            </AddText>
            {ProjectArr.map((v) => (
              <CarrerContent>
                <dl>
                  <dt>
                    {v.title}
                    <span>{v.date}</span>
                  </dt>
                  <dd>{v.content}</dd>
                  <dd>{v.detail}</dd>
                  <dd>
                    <a href={v.link} target="_blank" rel="noreferrer noopener">
                      {v.link}
                    </a>
                  </dd>
                </dl>
              </CarrerContent>
            ))}
          </SubSection>
          <SubSection title="블로그 및 github">
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
const CarrerContent = styled.div`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-family: Noto Sans KR;
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
    white-space: pre-wrap;
    word-break: keep-all;
    font-size: 1.4rem;
    & a {
      font-size: 1.2rem;
      color: #3d62ff;
    }
  }
`
const AddText = styled.p`
  margin: 2rem 0;
  font-size: 1.4rem;
`

export default About
