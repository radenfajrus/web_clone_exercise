import Flex from '@/elements/Flex'
import React, { useState } from 'react'
import styled from 'styled-components'

import {BarsArrowUpIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, XMarkIcon} from "@heroicons/react/24/outline"
import Button from '@/elements/Button'
import Border from '@/elements/Border'

const GetTiktokInfo = () => {
  let [isGetTiktok, setGetTiktok] = useState(true)
  return (

    <Container className={(isGetTiktok)?"active":"inactive"}>
    <GetTikTok className={(isGetTiktok)?"active":"inactive"}>
      <InfoLink>
        <ComputerDesktopIcon/>
        <label>Get TikTok for desktop</label>
      </InfoLink>
      <Divider></Divider>
      <InfoLink>
        <DevicePhoneMobileIcon/>
        <label>Get TikTok App</label>
      </InfoLink>
      <CloseButton onClick={()=>setGetTiktok(!isGetTiktok)}>
        <XMarkIcon/>
      </CloseButton>
    </GetTikTok>
    <GetApp className={(isGetTiktok)?"inactive":"active"} onClick={()=>setGetTiktok(!isGetTiktok)}>Get app</GetApp>
  </Container>
  )
}

const Container = styled.div`
  position: relative;    
  display: flex;
  justify-content: end;
  font-weight: 800px;
`

const Divider = styled.div`
  background-color: var(--gray2);
  width: 95%;
  height: 1px;
  margin: 6px 6px;
`


const GetTikTok = styled.div`
  ${Flex.flex_c_spacebetween()}
  ${Border.thin_gray}
  position: relative;
  padding: 8px 0px;
  padding-right: 42px;
  padding-left: 12px;

  svg{
    width:24px;
    flex-shrink: 0;
  }
  label{
    padding: 0px 10px;
    white-space: nowrap;
  }

  width: 274px;

  transition: all 0.3s cubic-bezier(0.4, 0.14, 0.3, 1) 0s;

  &.inactive{
    width:0;
    height:0;
    font-size:0;
    padding: 0;
    margin: 0;
    transform: scale(0,0);
    transform-origin:bottom right;
  }
`
const InfoLink = styled.div`
  ${Flex.flex_r()}
  padding:6px 8px;
  border-radius: 8px;
  :hover{
    cursor: pointer;
    background-color: var(--gray1);
  }
  label{
    :hover{
      cursor: pointer;
    }
  }
`
const CloseButton = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  right:0;
  top:0;
  padding: 16px 16px;
  svg{
    width:24px;
  }
  :hover{
    cursor: pointer;
  }
`

const GetApp = styled.div`
  ${Flex.flex_c_center}
  ${Button.button_gray}
  align-self: flex-end;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 8px;
  :hover{
    background-color:inherit;
  }
  :active{
    background-color:var(--color_btn_gray_active);
  }
  
  width: auto; 

  transition: all 0.3s cubic-bezier(0.4, 0.14, 0.3, 1) 0s;
  transform: scale(1);
  
  &.inactive{
    width:0;
    height:0;
    font-size:0;
    padding: 0;
    margin: 0;
    transform: scale(0);
    transform-origin:bottom right;
  }
`


export default GetTiktokInfo