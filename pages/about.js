import React from "react"

import styled from "styled-components"
import Layout from "../components/Layout"
import Content from "../components/ContentBox"
import Profile from "../components/Profile"

const About = () => {
  return (
    <Layout>
      <Content title="About">
        <AboutWrap>
          <Profile />
        </AboutWrap>
      </Content>
    </Layout>
  )
}
const AboutWrap = styled.div`
  margin: 0 auto;
`

export default About
