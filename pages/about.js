import React from "react"
import Image from "next/image"

import styled from "styled-components"
import Layout from "../components/Layout"
import Content from "../components/ContentBox"
import Skill from "../components/Skill"
import SubSection from "../components/SubSection"
import Profile from "../components/Profile"

const About = () => {
  return (
    <Layout>
      <Content title="About">
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
      </Content>
    </Layout>
  )
}

const ProfileImg = styled.div``

export default About
