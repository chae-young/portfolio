import React, { useEffect, useState } from "react"

import styled, { css } from "styled-components"
import Layout from "../components/Layout"
import HandShaking from "../components/HandShaking"
import ProjectList from "../components/ProjectList"
import Typing from "../components/Typing"
import Profile from "../components/Profile"

const Main = () => {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const actionTimer = setTimeout(() => {
      setLoad(true)
    }, 500)
    return () => {
      clearTimeout(actionTimer)
    }
  }, [])
  return (
    <>
      <Layout>
        <MainSection>
          <MainText load={load}>welcome!</MainText>
          <MyInfo>
            <Mydesc load={load}>
              안녕하세요.
              <HandShaking />
              <Typing />
            </Mydesc>
            <MyEtc load={load}>lee chaeyoung Portfolio</MyEtc>
          </MyInfo>
        </MainSection>
        <Profile />
        <ProjectList />
      </Layout>
    </>
  )
}

const OpaciryAnimation = css`
  transform: ${(props) => (props.load ? "translateY(0)" : "translateY(100px)")};
  opacity: ${(props) => (props.load ? 1 : 0)};
  transition: opacity 0.5s ease, transform 1s ease;
`
const MainSection = styled.section`
  padding: 6rem 6rem 4rem;
  height: 100vh;
  box-sizing: border-box;
  ${({ theme }) => theme.device.tabletL} {
    padding: 2rem;
    position: relative;
    height: 70vh;
  }
`
const MainText = styled.h2`
  padding-top: 12rem;
  font-size: 13vw;
  font-weight: 700;
  ${OpaciryAnimation}
  ${({ theme }) => theme.device.mobileL} {
    font-size: 6.5rem;
  }
`
const MyInfo = styled.div`
  font-size: 1.4rem;
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    font-size: 2rem;
  }
`
const Mydesc = styled.div`
  flex: 7;
  ${OpaciryAnimation}
  transition-delay:.5s;
`
const MyEtc = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-size: 2rem;
  font-family: "Noto Sans KR";
  ${OpaciryAnimation}
  transition-delay:.7s;
  ${({ theme }) => theme.device.tabletL} {
    bottom: 20px;
    right: 20px;
    font-size: 1.3rem;
  }
`
export default Main
