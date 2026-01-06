import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface MoreBtnProps {
  href: string
  text: string
}

const MoreBtn = ({ href, text }: MoreBtnProps) => {
  return (
    <MoreBtnWrap>
      <Link href={href} target="_blank">
        {text}
      </Link>
    </MoreBtnWrap>
  )
}
const MoreBtnWrap = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 20px;
  /* border: 1px solid #000; */
  background-color: #6c6c6c;
  overflow: hidden;
  margin-top: 4rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    opacity: 0;
    background-color: #000;
    transition: all 0.5s ease;
  }
  &:hover::after {
    opacity: 1;
    width: 100%;
  }

  > a {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 1.4rem;
  }

  ${({ theme }) => theme.device.desktop} {
    > a {
      font-size: 2rem;
    }
  }
`
export default MoreBtn
