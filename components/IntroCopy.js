import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"

// function modulo(a, b) {
//     return ((a % b) + b) % b;
// }
// const modulo = copy.length % 2;

const copy = "Portfolio".split("")

const IntroCopy = () => (
  <CopyWrap>
    <div>
      {copy.map((letter, i) => (
        <span>
          <Parallax key={i} x={[100 * (i - 3), 50 * i]} tagOuter="figure">
            {letter}
          </Parallax>
        </span>
      ))}
    </div>
  </CopyWrap>
)
const CopyWrap = styled.div`
  display: flex;
  height: 50vh;
  > div {
    display: flex;
  }
  & span {
    justify-content: center;
    font-size: 4rem;
    font-family: "Noto Sans KR";
  }
`
export default IntroCopy
