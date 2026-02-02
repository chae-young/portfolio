'use client'

import React from "react"
import Layout from "../../components/Layout"
import Profile from "../../components/Profile"
import styled from "styled-components"

const About = () => {
  return (
    <Layout>
      <AboutSection>
        <Profile />
      </AboutSection>
    </Layout>
  )
}

const AboutSection = styled.div`
  padding: 10rem 2rem;
  max-width: 1400px;
  margin: auto;
  ${({ theme }) => theme.device.desktop} {
    padding: 10rem 6rem;
  }
`

export default About
