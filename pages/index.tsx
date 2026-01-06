import React from "react"
import styled from "styled-components"
import BlogPost from "../components/BlogPost"
import Career from "../components/Career"
import Contact from "../components/Contact"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import ProjectSection from "../components/ProjectSection"

const Main = () => {
  return (
    <>
      <Layout>
        <Intro />
        <SubSection>
          <Profile />
          <Career />
          {/* 인피니트 배너 영역 */}
          {/* <Slider
            slideArr={[
              "Work Experience",
              "Work Experience",
              "Work Experience",
              "Work Experience",
            ]}
          /> */}
          {/* // 인피니트 배너 영역 */}
          {/* <ProjectArea /> */}
          <ProjectSection />
          <BlogPost />
          <Contact />
        </SubSection>
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
const SubSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 10rem 2rem;
  color: #fff;
  article + article {
    margin-top: 10rem;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 10rem 6rem;

    article + article {
      margin-top: 20rem;
    }
  }

  /* padding: 10rem 2rem;
	position: relative;
	height: 70vh;
	box-sizing: border-box;
	${({ theme }) => theme.device.desktop} {
		max-width: ${({ theme }) => theme.deviceSizes.maxSize};
		margin: auto;
		height: 100vh;
		align-items: stretch;
	} */
`

export default Main
