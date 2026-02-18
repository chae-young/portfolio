"use client"

import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import ContentBox from "../ContentBox"
import TwoColumnLayout from "../TwoColumnLayout"
import { CAREER_DATA } from "data/index"
import CareerItem from "./CareerItem"
import { Carrot } from "lucide-react"


const Career = () => {
  return (
    <article>
      <ContentBox title="Career">
        <TwoColumnLayout
          left={
            <p>
              다양한 프로젝트를 경험하며
              <br />
              개발 역량을 넓혀가고 있습니다.
            </p>
          }
          right={
            <div>
              {CAREER_DATA.map((career) => (
                <CareerCon
                  key={career.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CareerStatus $status={career.status}>
                    {career.year}
                  </CareerStatus>
                  <CareerCompany>{career.company}</CareerCompany>
                  <CareerCompanyInfo>{career.companyInfo}</CareerCompanyInfo>
                  <CareerProjects>
                    {career.projects.map((project, idx) => (
                      <CareerItem project={project} key={idx}/>
                    ))}
                  </CareerProjects>
                </CareerCon>
              ))}
            </div>
          }
        />
      </ContentBox>
    </article>
  )
}

const CareerCon = styled(motion.div)`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 120px;
  }
`

const CareerStatus = styled.span<{ $status: Boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 14px;
  margin-bottom: 8px;

  &::before {
    content: "";
    display: flex;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ $status, theme }) =>
      $status ? theme.colors.purple : theme.colors.gray};
  }

  ${({ theme }) => theme.device.desktop} {
    gap: 1.5rem;
    &::before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

const CareerCompany = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px 0;

  ${({ theme }) => theme.device.desktop} {
    font-size: 2.6rem;
  }
`
const CareerCompanyInfo = styled.p`
  margin-bottom: 2rem;
  font-size: 1.6rem;

  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
  }
`
const CareerProjects = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  font-size: 1.4rem;
  /* color: #d1d1d1; */
  margin: 0;
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    /* padding: 0 0 1.5rem 1.5rem; */

    /* &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 1rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray};
    } */
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
  }
`



export default Career
