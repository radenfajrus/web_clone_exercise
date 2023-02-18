import React from 'react'
import styled from 'styled-components'
import createffect from '@/assets/icons/createeffect.svg'
import Flex from '@/elements/Flex'

const CreateEffect = ({style}:any) => {
  return (
    <Container style={style}>
        <img src={createffect} />
        <Hover>
            Create Effects 
        </Hover>
    </Container>
  )
}

const Container = styled.div`
    ${Flex.flex_r_center}
    position: relative;
    width: 24px;
    padding: 0px 20px;
    :hover{
        cursor: pointer;
        div{
            opacity: 1;
            display: block;
        }
    }
`
const Hover = styled.div`
    position: fixed;
    opacity: 0;
    display: none;
    color: var(--color1);
    background-color: var(--gray4);
    border-radius: 8px;
    width: auto;
    height: auto;
    top: ${60-5}px;
    padding: 4px 8px;

    :after{
        border: 8px solid transparent;
        border-bottom-color: var(--gray4);
        top: -15px;
        content: '';
        height: 0px;
        width: 0px;
        left: 0;
        right: 0;
        margin: 0 auto;
        position: absolute;
    }
`
export default CreateEffect