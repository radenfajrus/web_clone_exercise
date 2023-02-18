import React from 'react'
import styled from 'styled-components'
import logo from '@/assets/logo.png'
import Search from './Header/Search'

import Flex from '@/elements/Flex'
import ButtonUpload from './Header/ButtonUpload'
import ButtonLogin from './Header/ButtonLogin'
import CreateEffect from './Header/CreateEffect'
import ThreeDot from './Header/ThreeDot'
import { useNavigate } from 'react-router-dom'


const Header = ({maxWidth}:any) => {
  let navigate = useNavigate()
  return (
    <Container style={{maxWidth:(maxWidth)?maxWidth+"px":"none"}}>
      <LogoContainer>
        <img src={logo} onClick={()=>navigate("/")}></img>
      </LogoContainer>
      <SearchContainer>
        <Search></Search>
      </SearchContainer>
      <ButtonContainer>
        <ButtonUpload style={{margin: "0px 8px"}}></ButtonUpload>
        <ButtonLogin style={{margin: "0px 9px"}}></ButtonLogin>
        <CreateEffect style={{margin: "0px 2px"}}></CreateEffect>
        <ThreeDot style={{margin: "0px 8px 0px 2px"}}></ThreeDot>
      </ButtonContainer>

    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_r_spacebetween()}
  box-sizing: border-box;
  padding: 8px 8px 8px 8px;
`
const LogoContainer = styled.div`
  margin-top: 12px;
  margin-left: 12px;
  width: auto;
  min-width: 300px;
  img{
    max-height: 32px;
    :hover{
      cursor: pointer;
    }
  }
`
const SearchContainer = styled.div`
  width: auto;
  min-width: 200px;
  flex: 0 1 auto;
`
const ButtonContainer = styled.div`
  ${Flex.flex_r_center()}
  flex: 0 0 auto;
  justify-content: end;
  width: auto;
  min-width: 200px;
`
export default Header