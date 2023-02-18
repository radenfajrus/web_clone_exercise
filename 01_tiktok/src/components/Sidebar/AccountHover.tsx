import Border from '@/elements/Border'
import Button from '@/elements/Button'
import Flex from '@/elements/Flex'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import styled from 'styled-components'

const AccountHover = ({data}:any) => {
  const [isFollowed, toggleFollowed] = useState(data.is_followed)

  let follow = () =>{
    toggleFollowed(true)
  }
  let unfollow = () =>{
    toggleFollowed(false)
  }

  return (
  <Container>
      <Top>
        <img loading="lazy" src={data.img}></img>
        {(isFollowed)?(
            <FollowedButton onClick={unfollow}>Followed</FollowedButton>
        ):(
            <FollowButton onClick={follow}>Follow</FollowButton>
        )
        }
      </Top>
      <Mid>
        <div id="usernameblock">
            <span id="username">{data.name}</span>
            <span id="verified">{data.is_verified?<CheckBadgeIcon/>:""}</span>
        </div>
        <span id="userid">{data.id}</span>

      </Mid>
      <Bot>
        <div>{data.followers} <label>Followers</label></div>
        <div>{data.likes} <label>Likes</label></div>
      </Bot>
  </Container>
  )
}

const Container = styled.div`
    ${Flex.flex_c_spacebetween}
    ${Border.medium_gray}
    position: absolute;
    height: fit-content;
    width: 320px;
    z-index: 1000;


    padding: 20px;
    margin-left: -10px;

    color: var(--color2);
    
    font-size: 1rem;
    gap: 8px;
`
const Top = styled.div`
    ${Flex.flex_r_spacebetween}
    img{
        height: 48px;
        width: 48px;
        border-radius: 48px;
        :hover {
        cursor: pointer;
        }
    }
`
const FollowButton = styled.div`
    ${Flex.flex_r_center}
    ${Button.button_dark}
    height: 36px;
    max-width: 100px;
    font-size: 1rem;
`
const FollowedButton = styled.div`
    ${Flex.flex_r_center}
    ${Button.button_gray_disabled}
    height: 36px;
    max-width: 100px;
    font-size: 1rem;
`
const Mid = styled.div`
    ${Flex.flex_c}
    font-size: 1em;
    align-items: flex-start;

    #usernameblock{
        ${Flex.flex_r}
        #username{}
        #verified{
        svg{
            color:rgb(32, 213, 236);
            width: 16px;
        }
        }
    }
    #userid{
      font-size: 0.9em;
      font-weight: 200;
    }
    :hover {
      cursor: pointer;
    }
`
const Bot = styled.div`
    ${Flex.flex_r_spacebetween}
    justify-content: space-around;
    font-size: 1.05em;
    div{
        ${Flex.flex_r}
    }

    label{
        padding: 0px 4px;
        font-weight: 200;
        color: var(--gray4);
    }
`
export default AccountHover