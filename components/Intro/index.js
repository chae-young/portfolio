import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import FloatingBox from "../FloatingBox"

const Intro = () => {
  return (
    <>
      <MainText
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
      >
        welcome!
      </MainText>

      <MainSubText
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
      >
        UI/UX Publisher
      </MainSubText>
      <MainDesc
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      >
        <p>
          UI/UX를 설계하는 퍼블리셔 이채영입니다 <br />
          다양한 환경에서 UI를 개발하고 설계하는것을 좋아해요. <br />
        </p>
        <FloatingBox>
          <Heart>
            <img src="./images/icon-heart.png" alt="하트" />
          </Heart>
        </FloatingBox>
      </MainDesc>
    </>
  )
}

const MainText = styled(motion.div)`
  font-size: 19.5vw;
  font-weight: 800;
  ${({ theme }) => theme.device.desktop} {
    font-size: 13vw;
  }
`

const MainSubText = styled(motion.div)`
  font-size: 7rem;
  text-indent: -2rem;
  letter-spacing: -0.1rem;
  font-family: ${({ theme }) => theme.fonts.subEng};
  margin-top: -60px;
  padding-left: 2rem;
  ${({ theme }) => theme.device.mobileL} {
    font-size: 3rem;
    margin-top: 0;
    font-size: 3rem;
  }
`

const MainDesc = styled(motion.div)`
  font-size: 1.4rem;
  margin-top: 10px;
  text-align: center;

  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
    margin-top: 7rem;
    text-align: left;
  }
`

const Heart = styled.div`
  margin: 2em auto 0;
  width: 60px;
  height: 60px;

  > img {
    object-fit: cover;
    width: 100%;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 100px;
    height: 100px;
    margin: 2em 0 0;
  }
`

export default Intro
