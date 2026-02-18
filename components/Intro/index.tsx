"use client"

import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import FloatingBox from "../FloatingBox"

const Intro = () => {
  return (
    <IntroContainer id="intro">
      <IntroInner>
        <BackgroundGradient>
          <GradientCircle1
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <GradientCircle2
            animate={{ scale: [1, 2, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </BackgroundGradient>

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
          Frontend Developer
        </MainSubText>
        <MainDesc
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          <p>
            UI/UX 이해도가 높은 프론트엔드 개발자 이채영 입니다. <br />
            안정적이고 유지보수하기 쉬운 코드를 통해, 더 나은 서비스를
            만들어가는 것을 목표로 합니다.
          </p>
          <FloatingBox>
            <Heart>
              <img src="./images/icon-heart.png" alt="하트" />
            </Heart>
          </FloatingBox>
        </MainDesc>
      </IntroInner>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  box-sizing: border-box;
  ${({ theme }) => theme.device.desktop} {
  }
`
const IntroInner = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  width: 100%;
  padding: 0 2rem;

  ${({ theme }) => theme.device.desktop} {
    padding: 0 6rem;
  }
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`

const GradientCircle1 = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(200, 150, 255, 0.6),
    rgba(255, 150, 200, 0.4),
    transparent
  );
  filter: blur(80px);
  bottom: 0%;
  left: -10%;

  ${({ theme }) => theme.device.desktop} {
    bottom: 5%;
    left: -5%;
    width: 300px;
    height: 300px;
  }
`

const GradientCircle2 = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 40% 40%,
    rgba(100, 150, 255, 0.6),
    rgba(255, 80, 100, 0.4),
    transparent
  );
  filter: blur(100px);
  top: 0%;
  right: -10%;

  ${({ theme }) => theme.device.desktop} {
    top: -30%;
    right: -20%;
    width: 700px;
    height: 700px;
  }
`

const MainText = styled(motion.div)`
  font-size: 19.5vw;
  font-weight: 600;
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
  margin-top: 40px;

  > p {
    word-break: keep-all;
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
    margin-top: 7rem;
  }
`

const Heart = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 40px;

  > img {
    object-fit: cover;
    width: 100%;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 60px;
    height: 60px;
    margin: 2em 0 0;
  }
`

export default Intro
