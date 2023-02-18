import Flex from '@/elements/Flex'
import Label from '@/elements/Label'
import React, { useState } from 'react'
import styled from 'styled-components'

import {BookmarkIcon,HashtagIcon,MusicalNoteIcon} from "@heroicons/react/24/outline"
import { useNavigate } from 'react-router-dom'
import Button from '@/elements/Button'

let data_init = [
  {type:"hashtag",name:"asiknyakuliner",url:"#/tag/asiknyakuliner?lang=en"},
  {type:"hashtag",name:"TikTokTainment",url:"#/tag/TikTokTainment?lang=en"},
  {type:"hashtag",name:"jadi anime",url:"#/tag/jadianime?lang=en"},
  {type:"music",name:"Minal Aidin Wal Faizin - Tasya",url:"#/music/Minal-Aidin-Wal-Faizin-242722204335964160?lang=en"},
  {type:"music",name:"Puasa Yok! - DJ Keblinger$",url:"#/music/Puasa-Yok-7076621336310728706?lang=en"},
  {type:"music",name:"love me like you do - yourfavkorra",url:"#/music/love-me-like-you-do-7063399141954669314?lang=en"},
  {type:"hashtag",name:"serunyaunboxing",url:"#/tag/serunyaunboxing?lang=en"},
  {type:"hashtag",name:"haribu",url:"#/tag/hariibu?lang=en"},
  {type:"music",name:"Ting Ting Ting - Kian.A",url:"#/music/Ting-Ting-Ting-7058428041680177946?lang=en"},
  {type:"music",name:"DJ Maafkan Soibah Ku X Akon Right Now Menumisu Mas",url:"#/DJ-Maafkan-Soibah-Ku-X-Akon-Right-Now-Menimisu-Mas-7064152964058942235?lang=en"},
]

const logos = new Map();
logos.set("hashtag", <HashtagIcon/>);
logos.set("music", <MusicalNoteIcon/>);

const Discover = () => {
  let [data,setData] = useState(data_init)
  let logo = (hashtag:string) => {
    let logo = logos.get(hashtag)
    return (logo)?(logo):<BookmarkIcon/>
  }
  let navigate = useNavigate()
  return (
    <Container>
      <Title>Discover</Title>
      <Block>
        {data.map((d,index)=>{
          return (
          <BlockButton key={index} onClick={()=>navigate(d.url)}>
            {logo(d.type)}
            <span>{d.name}</span>
          </BlockButton>
          )
        })
        }
      </Block>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c()}
  height:auto;
  color: var(--gray3);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.8;
`
const Title = styled.div`
  ${Label.title()}
`
const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 4px 4px;
`
const BlockButton = styled.div`
  ${Button.button_gray}
  height: auto;
  padding: 4px 8px;
  margin: 6px 4px;
  gap:4px;
  border-radius: 12px;

  display: flex;
  width: fit-content;
  max-width: 100%;
  align-items: flex-start;
  transition: all 200ms ease-in-out 0s;

  svg{
    flex-shrink: 0;
    height: 16px;
  }
  span{
    /* position: absolute;
    top:50%;
    transform: translate(0%, -50%); */
    display: inline-block;
    line-height: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
    font-size: 0.9rem;
    font-weight: 200;
    color: var(--gray4);
  }
`
export default Discover