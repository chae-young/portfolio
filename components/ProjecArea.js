import React from "react"

import styled from "styled-components"
import ProjectList from "./Projects/ProjectList"
import MoreBtn from "./MoreBtn"

const ProjectArea = () => {
  return (
    <ProjectWrap>
      <ProjectList />
      <MoreBtn
        href="https://fixed-rubidium-143.notion.site/50cd5ae595cf4cd1acde55014d02e661?pvs=4"
        text="주요 프로젝트 더 보기"
      />
    </ProjectWrap>
  )
}

const ProjectWrap = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 2em;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  text-align: center;

  ${({ theme }) => theme.device.desktop} {
  }
`
export default ProjectArea
