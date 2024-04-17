import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import MoreBtn from "./MoreBtn"

const Profile = () => {
  return (
    <article>
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
          <h2>
            안녕하세요! <br />
            UI/UX를 설계하는 퍼블리셔 이채영입니다 😊
          </h2>
          <p>
            퍼블리싱이 능숙하고 웹 에이전시와 이커머스 플랫폼에 근무하며 다양한
            UI 경험을 쌓아 왔습니다. 웹 표준을 고려한 시맨틱 마크업부터 반응형
            웹/적응형 웹까지 마크업하고 스타일링해요. <br />
            프론트엔드 기술에도 관심을 가지고 있어 다양한 환경에서 UI 개발을 할
            수 있습니다! <br />
            <br />
            코드를 그려나갈 때 사용자의 입장에서 생각합니다! 사용자에게 일관된
            UI를 그려내고 기억에 남는 UX를 제공하는 것이 목표입니다.
          </p>

          <MoreBtn
            href="https://fixed-rubidium-143.notion.site/UI-UI-UX-Publisher-7e3eedf08cbf4539ba2922f45079e937?pvs=4"
            text="더 보기"
          />
        </ProfileInfo>
      </ProfileWrap>
    </article>
  )
}

const ProfileWrap = styled.div`
  margin: 0 auto 5em;
  ${({ theme }) => theme.device.desktop} {
    display: grid;
    grid-template: auto / 40% 60%;
    gap: 20px;
    padding: 0 6rem;
    max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  }
`
const ProfileImg = styled(motion.div)``
const ProfileInfo = styled(motion.section)`
  padding: 0 2rem;
  margin-top: 2em;
  font-size: 1.4rem;

  > p {
    margin-top: 2em;
    line-height: 26px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
    margin: 0;
    > p {
      line-height: 40px;
    }
  }
`

export default Profile
