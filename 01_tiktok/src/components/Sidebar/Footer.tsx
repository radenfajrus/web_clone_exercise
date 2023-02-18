import Flex from '@/elements/Flex'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (

    <Container>
    <FooterBlock>
      <FooterBlockText>About</FooterBlockText>
      <FooterBlockText>Newsroom</FooterBlockText>
      <FooterBlockText>Contact</FooterBlockText>
      <FooterBlockText>Careers</FooterBlockText>
      <FooterBlockText>ByteDance</FooterBlockText>
    </FooterBlock>
    <FooterBlock>
      <FooterBlockText>TikTok for Good</FooterBlockText>
      <FooterBlockText>Advertise</FooterBlockText>
      <FooterBlockText>Developers</FooterBlockText>
      <FooterBlockText>Transparency</FooterBlockText>
      <FooterBlockText>TikTok Rewards</FooterBlockText>
      <FooterBlockText>TikTok Browse</FooterBlockText>
      <FooterBlockText>TikTok Embeds</FooterBlockText>
    </FooterBlock>
    <FooterBlock>
      <FooterBlockText>Help</FooterBlockText>
      <FooterBlockText>Safety</FooterBlockText>
      <FooterBlockText>Terms</FooterBlockText>
      <FooterBlockText>Privacy</FooterBlockText>
      <FooterBlockText>Creator Portal</FooterBlockText>
      <FooterBlockText>Community Guideline</FooterBlockText>
    </FooterBlock>
    <FooterBlock>
      <span>© 2023 TikTok</span>
    </FooterBlock>
  </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c()}
  height:auto;
  color: var(--gray2);
  font-size: 0.75rem;
  line-height: 1.8;
`
const FooterBlock = styled.div`
  display: inline-block;
  overflow-wrap: break-word;
  padding: 6px;

  span{
    color: var(--gray3)
  }
`
const FooterBlockText = styled.a`
  white-space: nowrap;
  padding: 0px 4px;
  font-weight: 400;
  color: var(--gray3);
  :hover{
    cursor: pointer;
    text-decoration: underline;
    color: var(--gray3);
  }
`
export default Footer