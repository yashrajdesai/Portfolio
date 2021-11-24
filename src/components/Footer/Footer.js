import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 9004383791">+91 9004383791</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yashrajdesai30@gmail.com">
          yashrajdesai30@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Eat =&gt; Sleep =&gt; Code =&gt; Repeat</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.linkedin.com/in/yashraj-desai-55a78a1a5/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/yashrajdesai">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://gitlab.com/yashrajdesai30">
          <AiFillGitlab size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
