import Link from "next/link"
import React from "react"

import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrap>
      <LinkList />
      <Copy>(c)2024 Made by leechaeng</Copy>
    </FooterWrap>
  )
}

export const LinkList = () => {
  return (
    <LinkLisBox>
      <li>
        <Link href="mailto:cycy8527@gmail.com" rel="noreferrer noopener">
          <a target="_blank" rel="noopener noreferrer">
            Mail
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://chaeyoung2.tistory.com/" rel="noreferrer noopener">
          <a target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </Link>
      </li>
      <li>
        <Link href=" https://github.com/chae-young" rel="noreferrer noopener">
          <a target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Link>
      </li>
    </LinkLisBox>
  )
}
const FooterWrap = styled.footer`
  text-align: center;
  padding: 6rem 0;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  > p {
    font-size: 6rem;
    ${({ theme }) => theme.device.mobileL} {
      font-size: 3rem;
    }
  }
`
const LinkLisBox = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
  }

  ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    column-gap: 10px;
    justify-content: center;
  }
`
const Copy = styled.div`
  margin-top: 3rem;
  /* color: ${({ theme }) => theme.colors.gray}; */
`
export default Footer
