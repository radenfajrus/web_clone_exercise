import Flex from '@/elements/Flex'
import React from 'react'
import styled from 'styled-components'

import ShortcutInfo from '@/components/FixedContainer/ShortcutInfo'
import GetTikTokInfo from '@/components/FixedContainer/GetTiktokInfo'
import ScrollToTop from '@/components/FixedContainer/ScrollToTop'

const FixedContainer = () => {
  return (
    <Container>
        <ShortcutInfo></ShortcutInfo>
        <GetTikTokInfo></GetTikTokInfo>
        <ScrollToTop></ScrollToTop>
    </Container>
  )
}
const Container = styled.div`
  ${Flex.flex_c()}
  position: fixed;
  bottom: 0;
  right: 0;
  align-items: flex-end;
  padding: 8px 20px;
  height:auto;
  width:auto;
  gap: 12px;
`


export default FixedContainer