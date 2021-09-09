import React, { useEffect, useState } from "react"

import styled from "styled-components"
import Layout from "../components/Layout"
import HandShaking from "../components/HandShaking"
import ProjectList from "../components/ProjectList"
import Typing from "../components/Typing"

const Main = () => {
  return (
    <>
      <Layout>
        <MainSection>
          <h2>welcome!</h2>
          <MyDesc>
            <p>
              안녕하세요.
              <HandShaking />
              <Typing />
              Front-end developer 이채영입니다.
            </p>
            <MyInfo>ph.01095288527</MyInfo>
          </MyDesc>
        </MainSection>
        <ProjectList />
      </Layout>
    </>
  )
}
const MainSection = styled.section`
  padding: 6rem 6rem 4rem;
  height: 100vh;
  box-sizing: border-box;
  ${({ theme }) => theme.device.tabletL} {
    padding: 2rem;
  }
  & h2 {
    padding-top: 12rem;
    font-size: 13vw;
    ${({ theme }) => theme.device.tabletL} {
      font-size: 6rem;
    }
  }
`
const MyDesc = styled.div`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
  }
  & p {
    flex: 7;
  }
`
const MyInfo = styled.div`
  flex: 3;
`
export default Main
