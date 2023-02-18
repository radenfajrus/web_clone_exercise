
import styled from 'styled-components'
import Flex from '@/elements/Flex'
import {
  EllipsisVerticalIcon, 
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid"
import {
  QuestionMarkCircleIcon,
  MoonIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline"
import { useState } from 'react'

let toggleHeight = 60
let toggleWidth = toggleHeight*1.2
let toggleView = `0 0 ${toggleWidth*2} ${toggleHeight}`
let toggleOn = (
  <svg className="slider" width={toggleWidth} height={toggleHeight} viewBox={toggleView} xmlns="http://www.w3.org/2000/svg">
    <line className="switch" y2={toggleHeight/2} x2={toggleWidth+(toggleWidth*0.2)} y1={toggleHeight/2} x1={toggleWidth/2}
          strokeWidth={toggleHeight} stroke="green" strokeLinecap="round"/>
    <line className="knob" y2={toggleHeight/2} x2={toggleWidth*1.2} y1={toggleHeight/2} x1={toggleWidth*1.2} 
          strokeWidth={toggleHeight*0.8} stroke="white" strokeLinecap="round"/>
  </svg>
)
let toggleOff = (
  <svg className="slider" width={toggleWidth} height={toggleHeight} viewBox={toggleView} xmlns="http://www.w3.org/2000/svg">
    <line className="switch" y2={toggleHeight/2} x2={toggleWidth+(toggleWidth*0.2)} y1={toggleHeight/2} x1={toggleWidth/2}
          strokeWidth={toggleHeight} stroke="var(--gray2)" strokeLinecap="round"/>
    <line className="knob" y2={toggleHeight/2} x2={toggleWidth/2} y1={toggleHeight/2} x1={toggleWidth/2} 
          strokeWidth={toggleHeight*0.8} stroke="white" strokeLinecap="round"/>
  </svg>
)

const ThreeDot = ({style}:any) => {
  let [isDarkMode,toggleDarkMode] = useState(false)
  return (
    <Container style={style}>
        <EllipsisVerticalIcon/>
        <Hover aria-expanded="true">
          <Menu>
            <GlobeEuropeAfricaIcon/>
            <label>English</label>
          </Menu>
          <Menu>
            <QuestionMarkCircleIcon/>
            <label>Feedback and help</label>
          </Menu>
          <Menu>
            <ArrowTopRightOnSquareIcon/>
            <label>Keyboard shortcuts</label>
          </Menu>
          <Menu>
            <MoonIcon/>
            <label>DarkMode</label>
            <Toggle id="darkmode" onClick={()=>toggleDarkMode(!isDarkMode)}>
              {(isDarkMode)?toggleOn:toggleOff}
            </Toggle>
          </Menu>
        </Hover>
    </Container>
  )
}

const Container = styled.div`
    ${Flex.flex_r_center}
    svg{
      width: 24px;
    }

    :hover {
      cursor: pointer;
      div[aria-expanded="true"]{
        transition: all 0s cubic-bezier(.57,.21,.69,1.25);
        visibility: visible;
        opacity: 1;
      }
    }
    :not(:hover) {
      div[aria-expanded="true"]{
        transition: all 0.3s cubic-bezier(.57,.21,.69,1.25) 0.3s;
        visibility: hidden;
        opacity: 0;
      }
    }
`
const Menu = styled.div`
  ${Flex.flex_r()}
  align-items: center;
  padding: 10px 8px;
  svg {
    padding: 0px 4px;
    width:24px;
  }
  label {
    padding: 0px 4px;
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    cursor: pointer;
    background-color: var(--gray1);
  }
`

const Toggle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: ${toggleWidth}px;
  height: ${toggleHeight}px;
  svg{
    width: ${toggleWidth}px;
  }
`

const Hover = styled.div`
    position: fixed;
    color: var(--color2);
    background-color: var(--color1);
    border-radius: 8px;
    width: 225px;
    margin-right:170px;
    height: auto;
    top: ${60-5}px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid var(--gray1);
    box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.3);


    :before{
        border: 8px solid transparent;
        border-bottom-color: var(--gray1);
        top: -16px;
        content: '';
        height: 0px;
        width: 0px;
        left:  75%;
        right: 0;
        margin: 0 auto;
        position: absolute;
    }
    :after{
        border: 8px solid transparent;
        border-bottom-color: var(--color1);
        top: -15px;
        content: '';
        height: 0px;
        width: 0px;
        left: 75%;
        right: 0;
        margin: 0 auto;
        position: absolute;
    }
`
export default ThreeDot