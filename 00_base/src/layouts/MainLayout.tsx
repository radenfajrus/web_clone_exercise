import { useState } from "react";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const MainLayout = ({ children }: any ) => {
  let [isToolsOpen, toggleToolsOpen] = useState(false)
  let [currentToolsOpen, setToolsOpen] = useState("")

  return (
    <Container>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <ContentContainer>
        <Header></Header>
        <Divider></Divider>
        {children}
      </ContentContainer>
    </Container>
  );
}

const Sidebar = styled.div`
  display: flex;
`
const Header = styled.div`
  display: flex;
`
const Container = styled.div`
  display: flex;
`
const SidebarContainer = styled.div`
  display: flex;
  width: auto;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Divider = styled.div`
  border-top: 1px solid lightgray;
`

const ToolsContainer = styled.div`
  display: flex;
`

MainLayout.displayName = "/src/layouts/MainLayout.tsx";

export default MainLayout;
