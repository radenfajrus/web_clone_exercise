import React, { useEffect, useState } from 'react'

import embed from '@/assets/icons/embed.svg'
import send from '@/assets/icons/send.svg'
import facebook from '@/assets/icons/facebook.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'
import copylink from '@/assets/icons/copylink.svg'
import twitter from '@/assets/icons/twitter.svg'
import linkedin from '@/assets/icons/linkedin.svg'
import reddit from '@/assets/icons/reddit.svg'
import telegram from '@/assets/icons/telegram.svg'
import email from '@/assets/icons/email.svg'
import line from '@/assets/icons/line.svg'
import pinterest from '@/assets/icons/pinterest.svg'
import styled from 'styled-components'
import Flex from '@/elements/Flex'
import Border from '@/elements/Border'
import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Scrollbar from '@/elements/Scrollbar'

let share_list = [
  {icon:<img src={embed}/>,name:"Embed"},
  {icon:<img src={send}/>,name:"Send to friends"},
  {icon:<img src={facebook}/>,name:"Share to Facebook"},
  {icon:<img src={whatsapp}/>,name:"Share to WhatsApp"},
  {icon:<img src={copylink}/>,name:"Copy link"},
  {icon:<img src={twitter}/>,name:"Share to Twitter"},
  {icon:<img src={linkedin}/>,name:"Share to Linkedin"},
  {icon:<img src={reddit}/>,name:"Share to Reddit"},
  {icon:<img src={telegram}/>,name:"Share to Telegram"},
  {icon:<img src={email}/>,name:"Share to Email"},
  {icon:<img src={line}/>,name:"Share to Line"},
  {icon:<img src={pinterest}/>,name:"Share to Pinterest"},
]

const ShareHover = () => {
const [isShareHoverExpand, setShareHoverExpand] = useState(false)
  return (
    <ShareContainer>
        {share_list.filter((d,index) => (!isShareHoverExpand && index>=5)?false:true ).map((d,index)=>{
            return (
            <ShareList key={index}>
                {d.icon}
                <label>{d.name}</label>
            </ShareList>
            )
        })}
        {(!isShareHoverExpand) && <Expand onClick={()=>setShareHoverExpand(true)}><ChevronDownIcon></ChevronDownIcon></Expand>}
    </ShareContainer>
  )
}

const ShareContainer = styled.div`
  ${Flex.flex_c}
  ${Border.medium_gray}
  ${Scrollbar.thin_gray}
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  font-size: 1.1rem;
  max-height: 500px;
  :before{
    border: 12px solid transparent;
    border-top-color: var(--gray1);
    bottom: -25px;
    content: '';
    height: 0px;
    width: 0px;
    left: 0;
    right: 190px;
    margin: 0 auto;
    position: absolute;
  }
  :after{
    border: 12px solid transparent;
    border-top-color: var(--color1);
    bottom: -23px;
    content: '';
    height: 0px;
    width: 0px;
    left: 0;
    right: 190px;
    margin: 0 auto;
    position: absolute;
  }
`
const ShareList = styled.div`
  ${Flex.flex_r}
  padding: 12px 20px;
  gap: 12px;
  svg{
    width:24px;
    height:24px;
  }
  :hover{
    background-color: var(--gray1);
  }
  label{
    color: black;
  }
`
const Expand = styled.div`
  ${Flex.flex_r_center}
  :hover{
    background-color: var(--gray1);
  }
  svg{
      height:24px;
  }
`
export default ShareHover