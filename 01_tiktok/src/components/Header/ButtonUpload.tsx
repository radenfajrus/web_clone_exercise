import React from 'react'
import styled from 'styled-components'

import {PlusIcon} from "@heroicons/react/24/solid"
import Flex from '@/elements/Flex'
import Button from '@/elements/Button'
import { useUserStore } from '@/stores'

const ButtonUpload = (props:any) => {
  let checkLogin = useUserStore((state:any)=>state.checkLogin);

  return (
    <Container style={props.style} onClick={()=>checkLogin(()=>console.log("user logged in"))}>
        <PlusIcon/>
        <label>Upload</label>
    </Container>
  )
}

const Container = styled.div`
    ${Flex.flex_r_center}
    ${Button.button_gray}
    height: 36px;
    padding: 0px 18px 0px 18px;
    gap: 8px;
`

export default ButtonUpload
