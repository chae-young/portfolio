import React from "react"

import Layout from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Content from "../components/ContentBox"

const Projects = () => {
  return (
    <Layout>
      <Content title="Projects">
        <ProjectList />
      </Content>
    </Layout>
  )
}

export default Projects
