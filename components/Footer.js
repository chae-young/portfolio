import React from "react"

import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrap>
      <p>@lee chaeyoung</p>
      <MailLink>
        <a href="mailto:leechaeng2222@gmail.com">leechaeng2222@gmail.com</a>
      </MailLink>
      <LinkList>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Github</a>
        </li>
      </LinkList>
      <Copy>© 2021. All Rights Reserved.</Copy>
    </FooterWrap>
  )
}
const FooterWrap = styled.footer`
  padding: 12rem 6rem;
  ${({ theme }) => theme.device.mobileL} {
    padding: 10rem 2rem;
  }
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  > p {
    font-size: 6rem;
    ${({ theme }) => theme.device.mobileL} {
      font-size: 3rem;
    }
  }
`
const LinkList = styled.ul`
  display: flex;
  margin-top: 2rem;
  > li {
    + li {
      margin-left: 1rem;
    }
    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`
const MailLink = styled.div`
  > a {
    display: block;
    margin-top: 4rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.4rem;
  }
`
const Copy = styled.div`
  margin-top: 10rem;
  color: ${({ theme }) => theme.colors.gray};
`
export default Footer
