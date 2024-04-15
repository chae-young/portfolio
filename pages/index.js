import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Slider from "../components/Slider"
import Profile from "../components/Profile"
import Intro from "../components/Intro"
import ProjectArea from "../components/ProjecArea"
import Contact from "../components/Contact"

const Main = () => {
  return (
    <>
      <Layout>
        <MainSection>
          <Intro />
        </MainSection>
        <Profile />
        {/* 인피니트 배너 영역 */}
        <Slider
          slideArr={[
            "Work Experience",
            "Work Experience",
            "Work Experience",
            "Work Experience",
          ]}
        />
        {/* // 인피니트 배너 영역 */}
        <ProjectArea />
        <Contact />
      </Layout>
    </>
  )
}

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 2rem;
  position: relative;
  height: 70vh;
  box-sizing: border-box;
  ${({ theme }) => theme.device.desktop} {
    max-width: ${({ theme }) => theme.deviceSizes.maxSize};
    margin: auto;
    height: 100vh;
    align-items: stretch;
  }
`

export default Main
