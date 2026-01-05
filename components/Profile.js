import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import Content from "../components/ContentBox"
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
                사용자 경험과 코드 효율을 동시에 고려하는 프론트엔드 개발자
                이채영입니다. 😊
              </h2>
              <p>
                재사용성과 유지보수성을 고려한 코드를 작성하는것을 즐기며, 팀
                전체의 개발 생산성을 높이는것을 지향합니다. 공통 훅과 컴포넌트를
                활용해 반복되는 로직을 추상화하여 중복코드 60% 감소, 팀 단위로
                재사용 가능한 구조를 설계한 경험이 있습니다. <br />
                안정적이고 유지보수하기 쉬운 코드를 통해, 더 나은 서비스를
                만들어가는 것을 목표로 하고있습니다.
              </p>
            </div>

            <MoreBtn href="/profile.pdf" text="프로필 보기" />
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
