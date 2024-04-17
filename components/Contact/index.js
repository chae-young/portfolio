import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import styled, { css } from "styled-components"
import Link from "next/link"
import WavyText from "../WavyText"
import FloatingBox from "../FloatingBox"

const Icon = css`
  width: 7rem;
  height: 7rem;
  ${({ theme }) => theme.device.desktop} {
    width: 20rem;
    height: 20rem;
  }
`

const Contact = () => {
  return (
    <ContactWrap>
      <WavyText text="Contact Me!" ftSize={20} mFtSize={6} />
      <ContactInfo>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          viewport={{ once: true, amount: 0 }}
        >
          저에게 궁금한것이 있으신가요? <br />
          어떤 주제든 상관 없어요. 언제든지 편하게 메일로 연락주세요!{`>-<`}
        </motion.p>
        <Link href="mailto:cycy8527@gmail.com">
          <IconWrap
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
            viewport={{ once: true, amount: 0 }}
          >
            <FloatingBox size={Icon}>
              <Image
                src="/images/icon-letter2.png"
                alt="메일"
                layout="fill"
                objectFit="cover"
              />
            </FloatingBox>
            <TextInfo>click!</TextInfo>
          </IconWrap>
        </Link>
      </ContactInfo>
    </ContactWrap>
  )
}

const ContactWrap = styled.section`
  margin: 10em auto;
  padding: 0 2rem;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
`

const ContactInfo = styled.div`
  > p {
    font-size: 1.4rem;
    line-height: 3rem;
  }

  ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      font-size: 2rem;
      line-height: 4rem;
    }
  }
`
const IconWrap = styled(motion.div)`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TextInfo = styled.p`
  text-align: center;
  margin-top: 2em;
  font-size: 1.2rem;
  color: red;
  font-family: ${({ theme }) => theme.fonts.subEng};
`

export default Contact
