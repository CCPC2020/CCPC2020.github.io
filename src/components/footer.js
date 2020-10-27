import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Config from "../config/"
import ContentWrapper from "../styles/ContentWrapper"
import Logo from "./logo"

import alcuk from './footer_alcuk.png';
import startlink from './startlink-logo-white.png';

const { footerLinks } = Config

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 10rem;
      display: flex;
      justify-content: space-between;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
      }
    }
    .screenshot {
      width: 100%;
      max-width: 25rem;
      height: 15rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      transition: all 0.3s ease-out;
      &:hover {
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 18.75rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
`

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <Link to="/" aria-label="home">
        <Logo color="white" size="1.5rem" />
      </Link>
      {/*<div className="footer-links">*/}
      {/*  {footerLinks.map(({ name, url }, key) => (*/}
      {/*    <StyledLink key={key} to={url}>{name}</StyledLink>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*<img className="screenshot" src={alcuk}/>*/}
      {/*<img className="screenshot" src={startlink}/>*/}
    </StyledContentWrapper>
  </StyledFooter>
)

export default Footer
