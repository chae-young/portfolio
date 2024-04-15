import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const WavyText = ({ text, ftSize, mFtSize }) => {
  const letters = Array.from(text)

  const Mparent = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0 },
    }),
  }

  const Mchild = {
    visible: {
      opacity: 1,
      y: 0,
      trasition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      trasition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <Title
      variants={Mparent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      $ftSize={ftSize}
      $mFtSize={mFtSize}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={Mchild}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Title>
  )
}

const Title = styled(motion.h2)`
  display: flex;
  overflow: hidden;
  font-size: ${(props) => props.$mFtSize}rem;
  font-family: ${({ theme }) => theme.fonts.subEng};

  ${({ theme }) => theme.device.desktop} {
    font-size: ${(props) => props.$ftSize}rem;
  }
`

export default WavyText
