import React from "react"

import styled from "styled-components"

const projectsArr = [
  {
    sub: "React project1",
    title: "emotion(리뷰서비스)",
    Image: "/images/project/project_emotion.gif",
    stack: {
      front: "React,Redux-saga,Next.js,style-components,material-ui",
      backend: "Node.js,express,Sequelize(MySQL)",
      deployment: "AWS",
    },
    desc: "영화,드라마,다큐 등을 감상하고 사용자들이 리뷰를 공유하는 웹사이트입니다. 좋아요,팔로우,게시글 등록 등 다양한 기능을 구현한 프로젝트이며 react,redux 뿐만 아니라 Next.js의 다양한 기능까지 익힐 수 있었던 프로젝트입니다.",
    link: {
      view: "https://emotion-feed.com",
      git: "https://github.com/chae-young/emotion",
    },
  },
  {
    sub: "React project2",
    title: "캘린더",
    Image: "/images/project/project_calendar.gif",
    stack: {
      front: "React,Redux-thunk,Redux,webpoack,style-components",
      deployment: "github",
    },
    desc: "리액트로 만든 캘린더 입니다. Redux의 흐름,이해를 돕고자 만든 프로젝트이며 일정추가,삭제,수정 기능을 구현하였습니다. ",
    link: {
      view: "https://chae-young.github.io/calendar/",
      git: "https://github.com/chae-young/calendar",
    },
  },
  {
    sub: "React project3",
    title: "Todlist",
    Image: "/images/project/project_todolist.gif",
    stack: {
      front: "React,webpoack,antd",
      deployment: "github",
    },
    desc: "리액트로 만든 Todolist 입니다. React를 처음 배우고 만든 프로젝트입니다. React의 status,map,렌더링 등 기초 문법을 익히기위해 만들었으며 처음 시도해보는 github 배포까지 배울 수 있었습니다. ",
    link: {
      view: "https://chae-young.github.io/TodoList/",
      git: "https://github.com/chae-young/TodoList",
    },
  },
  {
    sub: "javascript toy project1",
    title: "가위 바위 보",
    Image: "/images/project/project_js_rcp.png",
    stack: {
      front: "javascript",
      deployment: "github",
    },
    desc: "배열에 이미지값을 넣어 setInterval을 활용하여 만든 가위바위보 게임입니다. 기존 가위바위보게임 에서 스코어 값을 변수에 저장하여 스코어 기능까지 구현였습니다. ",
    link: {
      view: "https://chae-young.github.io/js_project/project/Rock_Paper_Scissors/",
      git: "https://github.com/chae-young/js_project/tree/master/project/Rock_Paper_Scissors",
    },
  },
  {
    sub: "javascript toy project2",
    title: "빙고",
    Image: "/images/project/project_js_bingo.png",
    stack: {
      front: "javascript",
      deployment: "github",
    },
    desc: "table을 2차원 배열로 구현하였고, 하단의 버튼 클릭시 저장되있던 title 객체의 배열 값이 table에 추가되어 구현된 빙고게임 입니다.",
    link: {
      view: "https://chae-young.github.io/js_project/project/bingo/",
      git: "https://github.com/chae-young/js_project/tree/master/project/bingo",
    },
  },
  {
    sub: "javascript toy project3",
    title: "카드 짝맞추기",
    Image: "/images/project/project_js_card.png",
    stack: {
      front: "javascript",
      deployment: "github",
    },
    desc: "for문으로 카드를 여러개 만들고 이미지를 랜덤으로 섞어 나열한 카드 짝맞추기 입니다. setTimeout으로 시간차를 주고 조건문을 활용하여 카드가 똑같지 않으면 뒤집히도록 구현하였습니다 ",
    link: {
      view: "https://chae-young.github.io/js_project/project/card/cardplay.html",
      git: "https://github.com/chae-young/js_project/tree/master/project/card",
    },
  },
  {
    sub: "javascript toy project5",
    title: "점심메뉴뽑기",
    Image: "/images/project/project_js_lunch.png",
    stack: {
      front: "javascript",
      deployment: "github",
    },
    desc: "스터디를 하며 Math.random()을 활용할 수 있는 주제로 점심메뉴 뽑기를 만들었었던 토이프로젝트입니다. ",
    link: {
      view: "https://chae-young.github.io/js_project/project/lunchmenu/",
      git: "https://github.com/chae-young/js_project/tree/master/project/lunchmenu",
    },
  },
]

const ProjectList = () => {
  return (
    <ProjectListWrap>
      {projectsArr.map((v, i) => (
        <section key={i}>
          <h3>
            <span>{v.sub}</span>
            {v.title}
          </h3>
          <ProjectContent>
            <ProjectImg>
              <img src={v.Image} alt={v.title} />
            </ProjectImg>
            <ContentBox>
              <ProjectStack>
                <li>
                  <b>front-end</b>
                  {projectsArr[i].stack.front}
                </li>
                {projectsArr[i].stack.backend && (
                  <li>
                    <b>back-end</b>
                    {projectsArr[i].stack.backend}
                  </li>
                )}
                <li>
                  <b>deployment</b>
                  {projectsArr[i].stack.deployment}
                </li>
              </ProjectStack>
              <ProjectDesc>
                <p>{v.desc}</p>
                <a
                  href={projectsArr[i].link.view}
                  target="_blank"
                  rel="noreferrer"
                >
                  view
                </a>{" "}
                <a
                  href={projectsArr[i].link.git}
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </ProjectDesc>
            </ContentBox>
          </ProjectContent>
        </section>
      ))}
    </ProjectListWrap>
  )
}

const ProjectListWrap = styled.section`
  padding: 0 6rem;
  ${({ theme }) => theme.device.tabletL} {
    padding: 0 2rem;
  }
  > section {
    padding-bottom: 10rem;
    + section {
      padding-top: 10rem;
      border-top: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
  & h3 {
    margin-bottom: 4rem;
    font-size: 4.8rem;
    font-weight: 700;
    ${({ theme }) => theme.device.tabletL} {
      font-size: 3rem;
    }
    > span {
      display: block;
      font-size: 2rem;
      ${({ theme }) => theme.device.tabletL} {
        font-size: 1.4rem;
      }
    }
  }
`
const ProjectContent = styled.div`
  position: relative;
`
const ContentBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 45%;
  ${({ theme }) => theme.device.mobileL} {
    position: static;
    width: 100%;
  }
  ${({ theme }) => theme.device.desktop} {
  }
  box-sizing: border-box;
`
const ProjectImg = styled.div`
  padding-left: 50%;
  ${({ theme }) => theme.device.mobileL} {
    padding: 0;
    margin-bottom: 2rem;
  }
  & img {
    max-width: 100%;
  }
`
const ProjectDesc = styled.div`
  white-space: pre-wrap;

  & p {
    margin-bottom: 2rem;
    word-break: keep-all;
    font-size: 2rem;
    font-family: Noto Sans KR;
    ${({ theme }) => theme.device.mobileL} {
      font-size: 1.4rem;
    }
  }
  & a {
    display: inline-block;
    font-size: 1.4rem;
    &:hover {
      text-decoration: underline;
    }
    ${({ theme }) => theme.device.mobileL} {
      font-size: 1.2rem;
    }
    + a {
      margin-left: 1rem;
    }
  }
`

const ProjectStack = styled.ul`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  ${({ theme }) => theme.device.mobileL} {
    font-size: 1.2rem;
  }
  > li {
    & b {
      margin-right: 10px;
      font-weight: 700;
    }
  }
`
export default ProjectList
