import React from "react"

import Layout from "../components/Layout"
import Content from "../components/ContentBox"
import Profile from "../components/Profile"

const About = () => {
  return (
    <Layout>
      <Content title="About">
        <Profile />
      </Content>
    </Layout>
  )
}

export default About
