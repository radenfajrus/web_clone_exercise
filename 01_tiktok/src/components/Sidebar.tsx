import Flex from '@/elements/Flex'
import React from 'react'
import styled from 'styled-components'

import {
  HomeIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline"

import {
  HomeIcon as HomeIconActive, 
  UsersIcon as UsersIconActive, 
  VideoCameraIcon as VideoCameraIconActive,
} from "@heroicons/react/24/solid"
import { useSidebarStore } from '@/stores'
import ButtonLogin from './Sidebar/ButtonLogin'
import Label from '@/elements/Label'
import Footer from './Sidebar/Footer'
import Discover from './Sidebar/Discover'
import SuggestedAccounts from './Sidebar/SuggestedAccounts'


const Sidebar = () => {
  const selectedMenu = useSidebarStore((state:any) => state.selectedMenu);
  const setMenu = useSidebarStore((state:any) => state.setMenu);

  return (
    <Container>
        <MenuList>
          <Menu onClick={()=>setMenu("/foryou")} className={(selectedMenu=="/foryou"?"active":"")}>
            {(selectedMenu=="/foryou"?<HomeIconActive/>:<HomeIcon/>)}
            <label>For You</label>
          </Menu>
          <Menu onClick={()=>setMenu("/following")} className={(selectedMenu=="/following"?"active":"")}>
            {(selectedMenu=="/following"?<UsersIconActive/>:<UsersIcon/>)}
            <label>Following</label>
          </Menu>
          <Menu onClick={()=>setMenu("/live")} className={(selectedMenu=="/live"?"active":"")}>
            {(selectedMenu=="/live"?<VideoCameraIconActive/>:<VideoCameraIcon/>)}
            <label>LIVE</label>
          </Menu>
        </MenuList>
        <Divider/>
        <Login>
          <label>Log in to follow creators, like videos, and view comments.</label>
          <ButtonLogin></ButtonLogin>
        </Login>
        <Divider/>
        <SuggestedAccounts></SuggestedAccounts>
        <Divider/>
        <Discover></Discover>
        <Divider/>
        <Footer></Footer>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c()}
  padding-top: 20px;
  padding-left: 8px;
  padding-right: 16px;
  height: auto;
`
const Divider = styled.div`
  background-color: var(--gray2);
  width: 95%;
  height: 1px;
  margin: 8px 6px;
`
const MenuList = styled.div`
  ${Flex.flex_c()}
  height: auto;
  font-weight: 600;
`
const Menu = styled.div`
  ${Flex.flex_r()}
  height: 48px;
  font-size: 1.1em;
  gap: 12px;
  padding: 10px;
  border-radius: 4px;
  &.active{
    color: var(--color3);
  }
  svg{
    width: 26px;
  }
  :hover{
    cursor: pointer;
    background-color: var(--gray1);
  }
  label{
    cursor: pointer;
  }
`
const Login = styled.div`
  ${Flex.flex_c()}
  height:auto;
  padding: 12px 0px 16px 8px;
  gap:20px;
  font-weight: 200;
  color: var(--gray3);
`
export default Sidebar