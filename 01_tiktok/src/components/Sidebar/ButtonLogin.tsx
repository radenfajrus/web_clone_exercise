import React from 'react'
import styled from 'styled-components'

import Flex from '@/elements/Flex'
import Button from '@/elements/Button'

const ButtonLogin = (props:any) => {
  return (
    <Container style={props.style}>
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