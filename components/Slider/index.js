import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const Slider = ({ slideArr }) => {
  const duplicatedSlides = [...slideArr, ...slideArr]

  return (
    <SliderWrap>
      <SliderBox
        animate={{
          x: ["-100%", "0%"],
        }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {duplicatedSlides.map((slide, index) => (
          <Slide key={index} slideLeng={slideArr.length}>
            <div>{slide}</div>
          </Slide>
        ))}
      </SliderBox>
    </SliderWrap>
  )
}

const SliderWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 300vw;
  height: 15vw;
  margin: 2em 0;
`
const SliderBox = styled(motion.div)`
  display: flex;
`

const Slide = styled.div`
  flex-shrink: 0;
  width: ${(props) => 300 / props.slideLeng}vw;

  > div {
    display: flex;
    padding: 0 0.2em;
    flex-direction: column;
    height: 100vh;
    font-size: 3rem;
    font-weight: 900;
    word-break: keep-all;
  }

  ${({ theme }) => theme.device.desktop} {
    > div {
      font-size: 8.5vw;
    }
  }
`
Slider.propTypes = {
  slideArr: PropTypes.array.isRequired,
}
export default Slider
