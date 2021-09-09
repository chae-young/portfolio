import React from "react"
import Image from "next/image"

import styled from "styled-components"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Skill from "../components/Skill"
import SubSection from "../components/SubSection"
import Profile from "../components/Profile"

const About = () => {
  return (
    <Layout>
      <AboutWrap>
        <Title>About</Title>
        <Profile />
        <SubSection title="Skills">
          <Skill />
        </SubSection>
        <SubSection title="Carrer">
          <div>(주)스타일쉽</div>
        </SubSection>
        <SubSection title="Visit">
          <div>(주)스타일쉽</div>
        </SubSection>
      </AboutWrap>
    </Layout>
  )
}

const AboutWrap = styled.div`
  padding: 6rem;
  ${({ theme }) => theme.device.tabletL} {
    padding: 0 2rem;
  }
  background: rgb(36 232 127);
`

const ProfileImg = styled.div``

export default About
