import { CareerProject } from 'data/index'
import React from 'react'
import styled from "styled-components"
import CareerDesc from '../CareerDesc'

interface CarrerItem {
    project: CareerProject
}

export default function CareerItem({project}: CarrerItem) {
  return (
    <li>
        <ProjectIntro>
            <h4>{project.name}</h4>
            <p>{project.date}</p>
        </ProjectIntro>
        <ProjectSkill>
            <dt>사용기술</dt>
            <dd>{project.skill}</dd>
        </ProjectSkill>
        <CareerDesc desc={project.desc}/>
    </li>
  )
}
const ProjectIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
      font-size: 2.4rem;
      font-weight: 800;
      color: #fff;
    }
  p {
    font-size: 16px;

  }
`
const ProjectSkill = styled.div`
    font-size: 1.8rem;
    color: #dcdcdc;
`