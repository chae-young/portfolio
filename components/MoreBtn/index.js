import React from "react"
import Link from "next/link"
import styled from "styled-components"

const MoreBtn = ({ href }) => {
  return (
    <MoreBtnWrap>
      <Link href={href}>더 보기</Link>
    </MoreBtnWrap>
  )
}
const MoreBtnWrap = styled.div`
  position: relative;
  margin-top: 4em;
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 20px;
  /* border: 1px solid #000; */
  background-color: #6c6c6c;
  overflow: hidden;

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
  }
`
export default MoreBtn
