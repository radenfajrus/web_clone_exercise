import Flex from '@/elements/Flex'
import styled from 'styled-components'

import {BarsArrowUpIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, XMarkIcon} from "@heroicons/react/24/outline"
import Button from '@/elements/Button'
import { useEffect, useState } from 'react'
import FixedContainer from '@/components/FixedContainer'
import Post from '@/components/Post'
import LoadinPost from '@/components/LoadingPost'


let posts_init: any[]  = [

]
const ForYouPage = () => {
  let [posts, setsPosts] = useState(posts_init)
  document.title = "Watch trending videos for you | TikTok";
  return (
    <Container>
      {posts.map((d)=>{
        return <Post data={d} />
      })}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <LoadinPost></LoadinPost>
      <FixedContainer></FixedContainer>
    </Container>
  )
}


const Container = styled.div`
  ${Flex.flex_c_spacebetween()}
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
`

export default ForYouPage


// https://www.tiktok.com/api/recommend/item_list/?
// aid=1988&
// app_language=en&
// app_name=tiktok_web&
// battery_info=1&
// browser_language=en-US&
// browser_name=Mozilla&
// browser_online=true&
// browser_platform=Win32&
// browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F110.0.0.0%20Safari%2F537.36&
// channel=tiktok_web&
// clientABVersions=70508271%2C70830115%2C70894021%2C70919578%2C70941819%2C70951149%2C70986522%2C71028449%2C70405643%2C70455309&
// cookie_enabled=true&
// count=30&
// device_id=7200712763503543810&
// device_platform=web_pc&
// focus_state=true&
// from_page=fyp&
// history_len=18&
// is_fullscreen=false&
// is_page_visible=true&
// language=en&os=windows&
// priority_region=&
// referer=https%3A%2F%2Fwww.tiktok.com%2F%40tinjugeledek%2Fvideo%2F7196470117717347611%3Flang%3Den&
// region=ID&
// root_referer=https%3A%2F%2Fwww.tiktok.com%2F&
// screen_height=1080&
// screen_width=1920&
// tz_name=Asia%2FJakarta&
// webcast_language=en&
// msToken=gLM0ANl5Hwd38nh_Ijn_7hd57cJJz3uw_YTEYSV9QR7Bp1dRoDYtkpiBIZrA5XkA3_aARthP1bqbnKE3kSLcLFDslfY-6z9vyAHW0CbKHc0CDBhyKXVi1DOYIefQKCAY8ZPYUY02qbe7aeM=&
// X-Bogus=DFSzswVL6bXANcXnShPvKVT8gyY6&
// _signature=_02B4Z6wo000014dNIuQAAIDC2A7NPyy1t3uHTSZAAIJFfa