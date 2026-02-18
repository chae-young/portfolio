import { CareerProjectDesc } from 'data/index'
import React from 'react'
import styled from "styled-components"

interface CareerDesc {
    desc: CareerProjectDesc[]
}

export default function CareerDesc({desc}: CareerDesc) {
  return (
    <>
        {desc.map((item, idx) => 
            <ProjectDescBox>
            <strong>{item.title}</strong>
            {item.detail && item.detail.length > 0 && (
                <ul>
                {item.detail.map((content, i) => (
                    <li key={i}>{content}</li>
                ))}
                </ul>
            )}
            </ProjectDescBox>)
        }
    </>
  )
}
const ProjectDescBox = styled.div`
  position: relative;
  padding: 0 0 0 1.5rem;
  color: #dcdcdc;
  word-break: keep-all;

  
  ul > li{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0 0 1.5rem;
  }

  strong::before,
  ul > li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  ul > li::before{
    background-color: transparent;
    border: 1px solid;
  }

  ${({ theme }) => theme.device.desktop} {
    line-height: 2.4rem;
    strong::before,
    ul > li::before {
        top: 0.5rem;
    }

  }
`