import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { DiHtml53DEffects } from "react-icons/di";

import { Container, Span, NavLeft, NavCenter, NavRight, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <NavLeft>
      <Link href="/">
        <a style={{display:'flex',alignItems:'center',color:'white', marginBottom:20}}>
          <DiHtml53DEffects size ="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </NavLeft>
    <NavCenter>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </NavCenter>
    <NavRight>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </NavRight>
  </Container>
);

export default Header;
