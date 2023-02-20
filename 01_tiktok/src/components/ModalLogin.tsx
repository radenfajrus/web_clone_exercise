import Border from '@/elements/Border'
import Button from '@/elements/Button'
import Flex from '@/elements/Flex'
import { useUserStore } from '@/stores'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ShareHover from './Post/ShareHover'

import { QrCodeIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import facebook from '@/assets/icons/facebook.svg'
import twitter from '@/assets/icons/twitter.svg'
import google from '@/assets/icons/google.svg'
import line from '@/assets/icons/line.svg'
import kakaotalk from '@/assets/icons/kakaotalk.svg'
import apple from '@/assets/icons/apple.svg'
import instagram from '@/assets/icons/instagram.svg'
import Scrollbar from '@/elements/Scrollbar'
import { XMarkIcon } from '@heroicons/react/24/outline'

let share_list = [
  {icon:<QrCodeIcon/>,name:"Use QR code"},
  {icon:<UserIcon/>,name:"Use phone / email /username"},
  {icon:<img src={facebook}/>,name:"Continue with Facebook"},
  {icon:<img src={google}/>,name:"Continue with Google"},
  {icon:<img src={line}/>,name:"Continue with LINE"},
  {icon:<img src={twitter}/>,name:"Continue with Twitter"},
  {icon:<img src={kakaotalk}/>,name:"Continue with KakaoTalk"},
  {icon:<img src={apple}/>,name:"Continue with Apple"},
  {icon:<img src={instagram}/>,name:"Continue with Instagram"},
]

const ModalLogin = () => {
  let isLoginModal = useUserStore((state:any)=>state.isLoginModal);
  let toggleLoginModal = useUserStore((state:any)=>state.toggleLoginModal);

  useEffect(()=>{
    let scrollableDiv = document?.getElementById("logintotiktokscroll");
    scrollableDiv?.scrollTo({
      top: 0,
  });
  },[isLoginModal])

  return (
    <Container className={isLoginModal?'active':""}>
        <Blur onClick={()=>toggleLoginModal(false)}></Blur>
        <LoginWrapper>
          <LoginContainer className={isLoginModal?'active':""}>
            <StickyTop>
              <FloatCloseButton onClick={()=>toggleLoginModal(false)}>
                <XMarkIcon/>
              </FloatCloseButton>
            </StickyTop>
            <ScrollableDiv id="logintotiktokscroll">
              <p>Log in to TikTok</p>
              {share_list.map((d,index)=>{
                return (
                <LoginButton key={index}>
                    {d.icon}
                    <label>{d.name}</label>
                </LoginButton>
                )
              })}
            </ScrollableDiv>
            <StickyBottom>
              <span>Don’t have an account?</span><a href="#">Sign up</a>
            </StickyBottom>
          </LoginContainer>
        </LoginWrapper>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c_center};
  position: fixed;
  visibility:hidden;
  transition: background-color 0.3s cubic-bezier(0.4, 0.14, 0.3, 1) 0s;
  background-color: transparent;
  &.active{
    visibility:visible;
    background-color: #00000080;
  }
  z-index:1001;
`
const Blur = styled.div`
  position: absolute;
  display:flex;
`
const LoginWrapper = styled.div`
  ${Flex.flex_c_center};
  position: relative;
  width: 100%;
  height: 100%;
  width: 483px;
`
const LoginContainer = styled.div` 
  ${Flex.flex_c_center};
  position:relative;
  overflow:hidden;
  background-color: var(--color1);
  width: 483px;
  height: 80%;
  max-height: 650px;
  transform: scale(0.1); 
  opacity: 0.2; 

  transition: all 0.3s cubic-bezier(0.4, 0.14, 0.3, 1) 0s;
  &.active{
    transform: scale(1);
    opacity: 1; 
  }
  border-radius:12px;
`

const StickyTop = styled.div` 
  height: 48px;
`
const FloatCloseButton = styled.div`
  ${Flex.flex_c_center};
  position: absolute;
  width: auto;
  height: auto;
  right:0;
  top:0;
  padding: 8px 8px;
  margin: 16px 12px;
  background-color: var(--gray1);
  border-radius: 100%;
  svg{
    width:24px;
    height:24px;
  }
  :hover{
    cursor: pointer;
  }

`
const ScrollableDiv = styled.div`
  ${Flex.flex_c};
  ${Scrollbar.medium_gray};
  overflow: overlay;
  padding: 16px 48px;
  gap:16px;
  p{
    font-size:2em;
    font-weight:600;
    margin-bottom:0px;
  }
`
const LoginButton = styled.div`
  ${Flex.flex_r};
  height: auto;
  padding: 12px 16px;
  border: 1px solid var(--gray2);
  img, svg{
    width:22px;
  }
  label{
    ${Flex.flex_r_center};
    width:100%;
    cursor: pointer;
    text-align: center;
  }
  cursor: pointer;
`
const StickyBottom = styled.div` 
  ${Flex.flex_r_center};
  height: 64px;
  gap: 4px;
  font-size: 0.95em;
  border: 1px solid var(--gray2);
  span{
    font-weight: 100;
    color: var(--gray4);
  }
  a{
    color: var(--color3);
  }
`
export default ModalLogin