"use client"

import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import Content from "./ContentBox"
import MoreBtn from "./MoreBtn"

const SKILL_DATA = [
  {
    title: 'Frontend Development',
    contents: [
      'React, Next.js, TypeScript 기반 SPA/SSR 애플리케이션 개발',
      'Vue.js, Nuxt 레거시 시스템 운영 및 유지보수 경험',
      'Zustand, Tanstack-query, Vuex 활용'
    ]
  },
  {
    title: 'Styling & UI',
    contents: [
      'Tailwind CSS, SCSS, Styled-Components 다양한 스타일링',
      '반응형 UI, 모바일 퍼스트 구현',
      'Radix UI, Shadcn UI 등 컴포넌트 라이브러리 활용'
    ]
  },
  {
    title: 'Collaboration & Tools',
    contents: [
      'Git/Jira 기반 협업',
      'Figma를 활용한 협업'
    ]
  },
  {
    title: 'AI-Assisted Development',
    contents: [
      'Claude Code, Cursor 활용한 개발',
    ]
  }
]

const Skill = () => {
  return (
    <article>
      <Content title="Skill">
        <SkilList
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {SKILL_DATA.map((data, idx) => 
              <section key={idx}>
              <h3>{data.title}</h3> 
              <ul>
                {data.contents.map((content, idx) => 
                  <li key={idx}>{content}</li>
                )}
              </ul>
              </section>
            )}

        </SkilList>
      </Content>
    </article>
  )
}

const SkilList = styled(motion.div)`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  li {
    position: relative;
    padding-left: 20px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 1rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
    
    flex-direction: row;
    flex-wrap: wrap;

    > section {
      flex:  1 1 40%;
    }
  }
`


export default Skill
