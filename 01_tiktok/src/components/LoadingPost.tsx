import Flex from '@/elements/Flex'
import React from 'react'
import styled from 'styled-components'

const LoadinPost = () => {
  return (
    <Container>
      <svg preserveAspectRatio="none" viewBox="0 0 200 200" width="48" height="48">
        <circle id="c1" className='c1'></circle>
        <circle id="c2" className='c2'></circle>
        <ellipse id="c3" className='c3'></ellipse>
      </svg>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c_center()}
  justify-content: flex-start;
  @keyframes circleResize1{
    0% {
      r: 36px;
      cx: 60px;
    }
    25% {
      r: 43.199999999999996px;
      cx: 100px;
    }
    50% {
      r: 36px;
      cx: 140px;
    }
    75% {
      r: 21.599999999999998px;
      cx: 100px;
    }
    100% {
      r: 36px;
      cx: 60px;
    }
  }
  @keyframes circleResize2{
    0% {
      r: 36px;
      cx: 140px;
    }
    25% {
      r: 21.599999999999998px;
      cx: 100px;
    }
    50% {
      r: 36px;
      cx: 60px;
    }
    75% {
      r: 43.199999999999996px;
      cx: 100px;
    }
    100% {
      r: 36px;
      cx: 140px;
    }
  }
  @keyframes circleResize3{
    0% {
      rx: 0px;
      ry: 0px;
      cx: 96px;
    }
    10% {
      rx: 12px;
      ry: 24px;
      cx: 100px;
    }
    25% {
      rx: 36px;
      ry: 36px;
      cx: 100px;
    }
    40% {
      rx: 12px;
      ry: 24px;
      cx: 100px;
    }
    50% {
      rx: 0px;
      ry: 0px;
      cx: 104px;
    }
    60% {
      rx: 12px;
      ry: 24px;
      cx: 100px;
    }
    75% {
      rx: 36px;
      ry: 36px;
      cx: 100px;
    }
    90% {
      rx: 12px;
      ry: 24px;
      cx: 100px;
    }
    100% {
      rx: 0px;
      ry: 0px;
      cx: 96px;
    }
  }

  .c1{
    stroke-width: 0;
    r: 36px;
    cx: 128px;
    cy: 99px;
    fill: #fe2c55;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(.05, 0, 1, 1);
    animation-iteration-count: infinite;
    animation-name: circleResize1;
  }
  .c2{
    stroke-width: 0;
    r: 36px;
    cx: 60px;
    cy: 99px;
    fill: #3af2ff;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(.05, 0, 1, 1);
    animation-iteration-count: infinite;
    animation-name: circleResize2;
  }
  .c3{
    stroke-width: 0;
    r: 36px;
    cx: 60px;
    cy: 99px;
    fill: #0f0f0f;;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(.05, 0, 1, 1);
    animation-iteration-count: infinite;
    animation-name: circleResize3;
  }
`
export default LoadinPost 