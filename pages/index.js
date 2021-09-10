import React, { useEffect, useState } from "react"

import styled, { css } from "styled-components"
import Layout from "../components/Layout"
import HandShaking from "../components/HandShaking"
import ProjectList from "../components/ProjectList"
import Typing from "../components/Typing"

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
            <MyEtc load={load}>
              <li>phone.&nbsp;01095288527</li>
              <li>email.&nbsp;leechaeng2222@gmail.com</li>
            </MyEtc>
          </MyInfo>
        </MainSection>
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
  margin-bottom: 20rem;
  box-sizing: border-box;
  ${({ theme }) => theme.device.tabletL} {
    padding: 2rem;
    height: auto;
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
  margin-top: 4rem;
  font-size: 1.8rem;
  ${({ theme }) => theme.device.desktop} {
    display: flex;
  }
`
const Mydesc = styled.div`
  flex: 7;
  ${OpaciryAnimation}
  transition-delay:.5s;
`
const MyEtc = styled.ul`
  flex: 3;
  ${OpaciryAnimation}
  transition-delay:.7s;
  ${({ theme }) => theme.device.mobileL} {
    font-size: 1.3rem;
  }
`
export default Main
