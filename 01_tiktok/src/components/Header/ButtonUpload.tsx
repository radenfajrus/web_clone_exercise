import React from 'react'
import styled from 'styled-components'

import {PlusIcon} from "@heroicons/react/24/solid"
import Flex from '@/elements/Flex'
import Button from '@/elements/Button'

const ButtonUpload = (props:any) => {
  return (
    <Container style={props.style}>
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