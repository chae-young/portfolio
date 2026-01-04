import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import ContentBox from "../ContentBox"
import TwoColumnLayout from "../TwoColumnLayout"

const CAREER_DATA = [
  {
    id: 1,
    status: true,
    year: "2025.05 - 재직중",
    company: "디플루이드",
    description: [
      "React 기반 신규 서비스 구축 프로젝트 리딩, 핵심 기능 개발 구현",
      "대기업(LG Uplus) 클라이언트 웹서비스 운영 담당, Vue.js 기반 레거시 시스템 개선 및 신규 기능 개발",
    ],
  },
  {
    id: 2,
    status: true,
    year: "2025.05 - 재직중",
    company: "디플루이드",
    description: [
      "React 기반 신규 서비스 구축 프로젝트 리딩, 핵심 기능 개발 구현",
      "대기업(LG Uplus) 클라이언트 웹서비스 운영 담당, Vue.js 기반 레거시 시스템 개선 및 신규 기능 개발",
    ],
  },
  {
    id: 3,
    status: true,
    year: "2025.05 - 재직중",
    company: "디플루이드",
    description: [
      "React 기반 신규 서비스 구축 프로젝트 리딩, 핵심 기능 개발 구현",
      "대기업(LG Uplus) 클라이언트 웹서비스 운영 담당, Vue.js 기반 레거시 시스템 개선 및 신규 기능 개발",
    ],
  },
  {
    id: 4,
    status: true,
    year: "2025.05 - 재직중",
    company: "디플루이드",
    description: [
      "React 기반 신규 서비스 구축 프로젝트 리딩, 핵심 기능 개발 구현",
      "대기업(LG Uplus) 클라이언트 웹서비스 운영 담당, Vue.js 기반 레거시 시스템 개선 및 신규 기능 개발",
    ],
  },
  {
    id: 5,
    status: true,
    year: "2025.05 - 재직중",
    company: "디플루이드",
    description: [
      "React 기반 신규 서비스 구축 프로젝트 리딩, 핵심 기능 개발 구현",
      "대기업(LG Uplus) 클라이언트 웹서비스 운영 담당, Vue.js 기반 레거시 시스템 개선 및 신규 기능 개발",
    ],
  },
]

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
                <CareerItem
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
                  <CareerDescription>
                    {career.description.map((item, idx) => (
                      <li key={item.id}>{item}</li>
                    ))}
                  </CareerDescription>
                </CareerItem>
              ))}
            </div>
          }
        />
      </ContentBox>
    </article>
  )
}

const CareerItem = styled(motion.div)`
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }
`

const CareerStatus = styled.span`
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

const CareerDescription = styled.ul`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  li {
    position: relative;
    padding: 0 0 1.5rem 1.5rem;

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
  }
`

export default Career
