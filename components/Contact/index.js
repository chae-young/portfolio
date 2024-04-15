import React from "react"
import Image from "next/image"
import styled from "styled-components"
import WavyText from "../WavyText"

const Contact = () => {
  return (
    <ContactWrap>
      <WavyText text="Contact Me!" ftSize={20} mFtSize={6} />
      <Image
        src="/images/icon-letter2.png"
        alt="메일"
        width={100}
        height={100}
      />
    </ContactWrap>
  )
}

const ContactWrap = styled.section`
  margin: 10em auto;
  padding: 0 2rem;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
`

export default Contact
