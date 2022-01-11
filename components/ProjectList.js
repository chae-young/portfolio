import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Parallax } from "react-scroll-parallax"

import styled from "styled-components"
import useWidth from "../hooks/useWidth"
import IntroCopy from "./IntroCopy"

const imgArr = [
  {
    title: "#구축#유지보수#이벤트#기획전",
    src: "/images/project/fila.jpg",
    color: 1,
  },
  {
    title: "#구축#유지보수#이벤트#기획전",
    src: "/images/project/columbia.jpg",
    color: 0,
  },
  {
    title: "#구축#유지보수",
    src: "/images/project/leica.jpg",
    color: 1,
  },
  {
    title: "#구축#유지보수",
    src: "/images/project/pandora.jpg",
    color: 0,
  },
  {
    title: "#구축#유지보수",
    src: "/images/project/keds.png",
    color: 1,
  },
  {
    title: "#구축#유지보수#이벤트#기획전",
    src: "/images/project/gg.jpg",
    color: 0,
  },
]

const DesktopObjectOffset = [
  [50, -50],
  [50, -50],
  [50, -50],
  [50, -50],
  [50, -50],
  [50, -50],
]
const MobileObjectOffset = [
  [20, 0],
  [50, 0],
  [50, 0],
  [50, 0],
  [50, 0],
  [50, 0],
]

const ProjectList = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  let timer
  const resizeWindow = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setWindowWidth(window.innerWidth)
    }, 500)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", resizeWindow)
    return () => {
      window.removeEventListener("resize", resizeWindow)
    }
  }, [windowWidth])

  return (
    <ProjectWrap>
      <ProjectObject>
        {imgArr.map((img, index) => (
          <Parallax
            key={index}
            className={`object${index + 1}`}
            y={
              windowWidth >= 1023
                ? DesktopObjectOffset[index]
                : MobileObjectOffset[index]
            }
            tagOuter="figure"
          >
            <img src={img.src} />
            <ProjectDesc className={img.color ? "white" : "black"}>
              {img.title}
            </ProjectDesc>
          </Parallax>
        ))}
      </ProjectObject>
      <MoreButton
        href="https://fixed-rubidium-143.notion.site/35759fb1fd0a4d849ac5603025dbfc2a"
        target="_blank"
      >
        <Parallax y={[200, -50]}>이력서 및 경력기술서 보러가기</Parallax>
      </MoreButton>
    </ProjectWrap>
  )
}

const ProjectWrap = styled.div`
  position: relative;
  height: 50vw;

  h2 {
    font-size: 6rem;
  }
  ${({ theme }) => theme.device.mobileL} {
    height: auto;
    padding-bottom: 20rem;
  }
`
const ProjectObject = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  right: 0;
  width: calc(100% - 80px);
  margin: 0 auto;

  & .parallax-inner:hover p {
    opacity: 1;
  }

  & img {
    width: 100%;
  }

  & p {
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    transition: all 0.5s;
    opacity: 0;
  }

  & [class*="object"] {
    position: absolute;
    top: 0%;

    & img {
      position: relative;
      filter: grayscale(80%);
      transition: all 0.3s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  & .object1 {
    left: 0;
    width: 25%;
    margin-top: 5%;
  }

  & .object2 {
    left: 30%;
    width: 20%;
    margin-top: 10%;
  }

  & .object3 {
    right: 27%;
    width: 20%;
    margin-top: 15%;
  }

  & .object4 {
    right: 0;
    width: 20%;
    margin-top: 8%;
  }

  & .object5 {
    left: 22%;
    width: 20%;
    margin-top: 30%;
  }
  & .object6 {
    width: 25%;
    right: 18%;
    margin-top: 23%;
  }

  ${({ theme }) => theme.device.mobileL} {
    width: calc(100% - 40px);
    position: static;
    & [class*="object"] {
      position: static;
      top: 0%;
      width: auto;
      margin: 20px 0 0 0;
      & img {
        filter: grayscale(0);
      }
    }
  }
`
const ProjectDesc = styled.p`
  &.white {
    color: #fff;
  }
  &.block {
    color: #000;
  }
`
const MoreButton = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 80px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  color: rgb(160, 160, 160);
  &:hover {
    color: rgb(0, 0, 0);
  }
  ${({ theme }) => theme.device.mobileL} {
    font-size: 1.4rem;
  }
`

export default ProjectList
