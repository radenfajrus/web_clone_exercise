import React from 'react'
import styled from 'styled-components'

import Flex from '@/elements/Flex'
import Button from '@/elements/Button'
import { useUserStore } from '@/stores'

const ButtonLogin = (props:any) => {
  let checkLogin = useUserStore((state:any)=>state.checkLogin);
  
  return (
    <Container style={props.style}  onClick={()=>checkLogin(()=>console.log("user logged in"))}>
        <label>Log In</label>
    </Container>
  )
}

const Container = styled.div`
    ${Flex.flex_r_center()}
    ${Button.button_light()}
    height: 48px;
    width : 100%;
    padding: 0px 28px;
    font-size: 1.2rem;
    font-weight: 600;
`

export default ButtonLogin