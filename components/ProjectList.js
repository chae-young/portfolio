import React from "react"
import Image from "next/image"

import styled from "styled-components"

const projectsArr = [
  {
    sub: "React project1",
    title: "emotion(리뷰서비스)",
    Image: "https://img.hankyung.com/photo/202002/01.21888540.1.jpg",
    stack: {
      front: "React,Redux-saga,Next.js,style-components,material-ui",
      backend: "Node.js,express,Sequelize(MySQL)",
      deployment: "AWS",
    },
    desc: "영화,드라마,다큐 등을 감상하고 사용자들이 리뷰를 공유하는 웹사이트입니다.",
    link: {
      view: "https://www.facebook.com/likelionatmju/",
      git: "https://www.facebook.com/likelionatmju/",
    },
  },
]

const ProjectList = () => {
  return (
    <ProjectListWrap>
      {projectsArr.map((v, i) => (
        <section>
          <h3>
            <span>{v.sub}</span>
            {v.title}
          </h3>
          <ProjectContent>
            <ProjectImg>
              <img src={v.Image} />
            </ProjectImg>
            <ContentBox>
              <ProjectStack>
                <li>
                  <b>front-end</b>
                  {projectsArr[i].stack.front}
                </li>
                <li>
                  <b>back-end</b>
                  {projectsArr[i].stack.backend}
                </li>
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
  & p {
    margin-bottom: 2rem;
    font-size: 2rem;
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
