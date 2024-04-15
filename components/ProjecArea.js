import React from "react"

import styled from "styled-components"
import ProjectList from "./Projects/ProjectList"

const ProjectArea = () => {
  return (
    <ProjectWrap>
      <ProjectList />
    </ProjectWrap>
  )
}

const ProjectWrap = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 2em;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;

  ${({ theme }) => theme.device.desktop} {
  }
`
export default ProjectArea
