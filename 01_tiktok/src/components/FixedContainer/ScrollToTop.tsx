import Button from '@/elements/Button';
import Flex from '@/elements/Flex';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {BarsArrowUpIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, XMarkIcon} from "@heroicons/react/24/outline"

const ScrollToTop = () => {
    let [scrollPos, setScrollPos] = useState(0)
    let scrollableDiv = document?.getElementById("root")?.getElementsByTagName("div")[0];
    useEffect(()=>{
        scrollableDiv = document?.getElementById("root")?.getElementsByTagName("div")[0];
        const scroll = (e:any)=>{
        let val = e.target.scrollTop
        setScrollPos(val)
        }
        scrollableDiv?.addEventListener("scroll",scroll)
        return () => {
        scrollableDiv?.removeEventListener("scroll",scroll)
        }
    },[])

    const scrollToTop = (e:any) => { 
        scrollableDiv?.scroll({top:0,behavior:'smooth'});
    }
  return (
    <Container onClick={scrollToTop} className={(scrollPos)?"active":""}>
      <BarsArrowUpIcon/>
    </Container>    
  )
}

const Container = styled.div`
  ${Flex.flex_r_center()}
  ${Button.button_dark()}
  position: relative;
  padding: 8px;
  border-radius: 40px;
  height:auto;
  width:auto;
  transition: all 0.3s ease-in;
  margin-bottom:-42px;
  svg{
    width: 16px;
    height: 16px;
    color: var(--color1);
  }
  &.active{
    margin-bottom:0px;
  }
`
export default ScrollToTop