"use client"

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
                UI/UX 이해도가 높은 프론트엔드 개발자 이채영 입니다.
                😊
              </h2>
              <p>
                4년간 수십개의 프로젝트를 거치며 디자인 의도를 코드로 옮기는 과정에서 
                간격, 타이포, 상태 등 디테일한 UI 요소를 정교하게 코드로 익혀왔습니다. 단순히 화면을 구현하는것을 넘어
                개발 단계에서 디자인 가이드에 명시되지 않은 에러케이스나 인터랙션을 선제적으로 발견하고 제안할 수 있습니다. 
                이러한 경험을 바탕으로 재사용 가능한 컴포넌트 구조 설계에도 자연스럽게 관심을 가지게 되었고, 사용자 경험을 해치지 않으면서도 유지보수하기 좋은 코드를 함께 고민하는 개발자로 성장했습니다.
                <br /><br />
                배움을 나누고 기록하는 일을 즐깁니다. 제가 정리한 지식이 방문자들에게 도움이 되는 순간 가장 큰 동기부여와 기쁨을 얻습니다.
              </p>
            </div>

            <MoreBtn
              href="https://tsrvalbpgnmahobyqzrc.supabase.co/storage/v1/object/public/public-pdf/porofile.pdf"
              text="프로필 보기"
            />
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
