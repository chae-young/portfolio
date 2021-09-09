import React from "react"
import Link from "next/link"

import styled from "styled-components"

const Header = () => {
  return (
    <HeaderWrap>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>로고</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="mailto:leechaeng2222@gmail.com">Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrap>
  )
}
const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1rem 6rem;
  box-sizing: border-box;
  ${({ theme }) => theme.device.mobileL} {
    padding: 1rem 2rem;
  }
`
const Nav = styled.nav`
  & ul {
    display: flex;
    > li {
      > a {
        font-size: 1.4rem;
      }
      &:nth-child(1) {
        flex: 1;
      }
      &:nth-child(2) {
        flex: 7;
        ${({ theme }) => theme.device.mobileL} {
          flex: 2;
        }
      }
      &:nth-child(3),
      &:nth-child(4) {
        flex: 1;
        text-align: right;
      }
    }
  }
`
export default Header
