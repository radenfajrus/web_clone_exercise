import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Scrollbar from "@/elements/Scrollbar";
import ModalLogin from "@/components/ModalLogin";
import { useModalStore } from "@/stores";

const HomeLayout = ({ children }: any ) => {
  let [isToolsOpen, toggleToolsOpen] = useState(false)
  let [currentToolsOpen, setToolsOpen] = useState("")

  return (
    <Container>
      <HeaderContainer>
        <Header maxWidth="1150"></Header>
      </HeaderContainer>
      <MainContainer>
        <SidebarContainer>
          <SidebarContainerFixed>
            <SidebarScroll>
              <Sidebar></Sidebar>
            </SidebarScroll>
            <SidebarScrollLid  id="scrollbar_thin" />
          </SidebarContainerFixed>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </MainContainer>
      <ModalLogin></ModalLogin>
    </Container>
  );
}

const Container = styled.div`
  ${Scrollbar.medium_gray}
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 4px;
  position: relative;
  z-index:10;

`
const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  height: 60px;
  background-color: var(--color1);
  justify-content:space-around;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  z-index:100;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  max-width: 1150px;
  padding-top: 60px;
`
const SidebarContainer = styled.div`
  position: relative;
  width: auto;
`
const SidebarContainerFixed = styled.div`
  position: fixed;
  display: flex;
  width: 356px;
  height: calc(100% - 60px);
  overflow-y: hidden;
  :hover{
    overflow-y: visible;
    #scrollbar_thin {
      opacity: 0;
    }
  }
`

const SidebarScroll = styled.div`
  ${Scrollbar.thin_gray}
`
const SidebarScrollLid = styled.div`
  position: absolute;
  opacity: 1;
  background:  var(--color1);
  /* background:  red; */
  height: 100%;  
  top: 0;
  right: 0;
  width: 6px;
  transition: all .5s;
  -webkit-transition: all .5s;
`


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background:  var(--color1);
  /* background-color:blue; */
  max-width: 692px;
  padding: 28px 0px;
  margin: 0px 16px;
`


HomeLayout.displayName = "/src/layouts/HomeLayout.tsx";

export default HomeLayout;
