import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import Content from "./ContentBox"
import MoreBtn from "./MoreBtn"

const Profile = () => {
  return (
    <article>
      <Content title="About">
        <ProfileWrap>
          <ProfileImg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src="/images/about/me2.jpg" width="100%" alt="이채영" />
          </ProfileImg>
          <ProfileInfo
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div>
              <h2>
                안녕하세요! <br />
                UI/UX 이해도가 높은 <br />
                React/TypeScript/Next.js 기반의 프론트엔드 개발자 이채영 입니다. 😊
              </h2>
              <p>
                React 기반 신규 서비스 구축 프로젝트를 리딩했으며, Vue.js 레거시 서비스 운영도 경험했습니다.
                4년의 UI 개발 경험을 바탕으로 디자인 의도와 사용자 흐름을 빠르게 파악하고, 
                재사용 가능한 컴포넌트 구조로 구현합니다.
                재사용성과 성능 최적화에 관심을 갖고 합성 컴포넌트 패턴, Tanstack Query 캐싱 전략, 빌드 최적화 등을 적용한 결과 중복 코드 60% 감소, LCP 54% 개선 등을 달성했습니다.
                기술 블로그를 운영하며 지속적으로 학습하고 지식을 공유합니다.
              </p>
            </div>

            <MoreBtn href="https://fixed-rubidium-143.notion.site/2ed6c8ee3c3280fba3bded32fcee1306?source=copy_linkf" text="프로필 보기" />
          </ProfileInfo>
        </ProfileWrap>
      </Content>
    </article>
  )
}

const ProfileWrap = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  width: 100%;

  ${({ theme }) => theme.device.desktop} {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 60px;
  }
`

const ProfileImg = styled(motion.div)`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const ProfileInfo = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2em;
  font-size: 1.4rem;
  overflow-wrap: break-word;

  p {
    margin-top: 2em;
    word-break: keep-all;
    line-height: 26px;
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
    margin: 0;
    p {
      line-height: 40px;
    }
  }
`

export default Profile
