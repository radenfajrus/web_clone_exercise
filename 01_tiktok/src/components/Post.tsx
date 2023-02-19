import Button from '@/elements/Button'
import { useDebounce } from '@/elements/Debounce'
import Flex from '@/elements/Flex'
import { useUserStore } from '@/stores'
import { faker } from '@faker-js/faker'
import { HashtagIcon, MapPinIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCard from './AccountCard'
import PaidPartnership from './Post/PaidPartnership'
import ShareHover from './Post/ShareHover'

let data_default = {
  id:"10.onezero",
  username:"🇸🇬粉狮达人｜生活大爆炸",
  img:faker.image.avatar(),
  is_verified:true,
  is_followed: false,

  place: {
    name: "Compass One · Republic of Singapore",
    url: "#/place/Compass-One-22535796482918321"
  },
  music: {
    name: "Get You - Official Sound Studio",
    url: "#/music/Get-You-6765437512849557505"
  },
  content: `
  #好物分享#健康美食 #绘画 #艺术 #art #drawing #游玩 #减肥 #Cooking #health #新年#chinesefood #上热门话题 #2023 #母婴 #午餐 #lostweight#健康 #生活 #打折 #美食 #中华美食#减肥食谱 #kids #零食 #weightloss #春节 #华人 #新加坡 #一千万粉丝 #homemade #画室#旅行 #户外 #遛娃 @Wah Kao Shop @TikTok Singapore
  `,
  // <video 
  //   class="" 
  //   playsinline="true" 
  //   x5-playsinline="true" 
  //   webkit-playsinline="true" 
  //   tabindex="2" 
  //   mediatype="video" 
  //   src=>
  // </video>
  like_count: 5,
  is_like: false,
  is_paid: true,
  comment_count: 0,
  video: {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037…3200&x-signature=oiJ0I%2Bj3nOsfvZU7si9t3LsSa3k%3D",
    width: 286,
    height: 510, 
    original_width: 1080,
    original_height: 1920,
    url: "https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/ooAQue4SQ7PDnVNBVbeBlWCKgQDwBXrUHjKLIt/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=1194&amp;bt=597&amp;cs=0&amp;ds=3&amp;ft=4fUEKMO_8Zmo0qJzL64jVxuUPpWrKsdm&amp;mime_type=video_mp4&amp;qs=0&amp;rc=NTQ3OjRoOWY4PDk5ZzdpM0BpajppeTg6Zjc4aTMzODgzNEAzX2MtXzMuX14xYWJgNDMuYSNqZGUwcjRnNWtgLS1kLy1zcw%3D%3D&amp;btag=80000&amp;expire=1676653334&amp;l=2023021711014725F46F0EAC1F170DF058&amp;ply_type=2&amp;policy=2&amp;signature=539ae2e8c000d242a889b0b4f1a6745a&amp;tk=tt_chain_token",
  },
  account:{
    id:"10.onezero",
    name:"🇸🇬粉狮达人｜生活大爆炸",
    img:faker.image.avatar(),
    is_verified:true,
    is_followed: false,
    followers : `${Math.round((Math.random()*1000))/10}M`,
    likes : `${Math.round((Math.random()*10000))/10}M`,
    desc : "分享健康美食，新加坡户外游玩、艺术绘画、生活乐趣 healthy food, weight loss, life in singapore, art drawing",
  }
}

const icons = new Map();
icons.set("place", <MapPinIcon fill='#13bd90'/>);
icons.set("hashtag", <HashtagIcon/>);
icons.set("music", <MusicalNoteIcon/>);

const Post = ({data}:any) => {
  data = (data)?data:data_default
  let checkLogin = useUserStore((state:any)=>state.checkLogin);

  const [isHoverProfile, setHoverProfile] = useState(false)
  const debounceddHover = useDebounce(isHoverProfile,600)

  const [isFollowed, toggleFollowed] = useState(data.is_followed)
  
  const [isLiked, setLiked] = useState(data.is_like)
  const [isShareHover, setShareHover] = useState(false)

  const [isSeeMore, seeMore] = useState(1)

  let follow = () =>{
    toggleFollowed(true)
  }
  let unfollow = () =>{
    toggleFollowed(false)
  }
  let parseContent = (text:string) => {
    let list_text = text.trim().split(" ")
    list_text = list_text.map(t=>{
      if(t.startsWith("#")){
        return `<a href="#/tag/${t.substring(1,t.length)}">${t}</a>`;
      }else if(t.startsWith("@")){
        return `<a href="#/${t}">${t}</a>`;
      }else{
        return `<span>${t}</span>`;
      }
    })
    return list_text.join(" ")
  }

  return (
    <Container>
      <Photo>
        <img loading="lazy" src={data.img} onMouseEnter={() => setHoverProfile(true)} onMouseLeave={() => setHoverProfile(false)}></img>
      </Photo>
      <PostContainer>
          <User onMouseEnter={() => setHoverProfile(true)} onMouseLeave={() => setHoverProfile(false)}>
            <a href={data.url}><span id="userid">{data.id}</span> <span id="username">{data.username}</span></a>
          </User>
          <ContentContainer className={(isSeeMore==2)?"expand":""}>
            {(isSeeMore==1) && (<><SeeMoreSpacer/><SeeMore onClick={() => seeMore(2)}>more</SeeMore></>)}
            <Content dangerouslySetInnerHTML={{__html:parseContent(data.content)}}></Content>
            {(isSeeMore==2) && (<SeeLess onClick={() => seeMore(1)}>less</SeeLess>)}
          </ContentContainer>
          {data.is_paid && (<PaidPartnership></PaidPartnership>)}
          <Place>
            {icons.get("place")}
            <a href={data.place.url}>{data.place.name}</a>
          </Place>
          <Music>
            {icons.get("music")}
            <a href={data.music.url}>{data.music.name}</a>
          </Music>
          <VideoWrapper style={{height:data.video.height}}>
            <VideoContainer style={{minWidth:data.video.width,minHeight:data.video.height}}>
              {/* <Thumbnail>
                <img src={data.video.thumbnail}></img>
              </Thumbnail> */}
              {/* <Video></Video> */}
            </VideoContainer>
            <ActionContainer>
              <ActionButtonContainer>
                <ActionButton onClick={()=>checkLogin(()=>setLiked(!isLiked))} className={isLiked?"active":""}>
                <HeartIcon/>
                </ActionButton>
                <label>{data.like_count + (isLiked?1:0)}</label>
              </ActionButtonContainer>
              <ActionButtonContainer>
                <ActionButton className='reverse'  onClick={()=>checkLogin(()=>console.log("user logged in"))}>
                  <ChatBubbleOvalLeftEllipsisIcon/>
                </ActionButton>
                <label>{data.comment_count}</label>
              </ActionButtonContainer>
              <ActionButtonContainer onMouseLeave={()=>setShareHover(false)}>
                <ActionButton onMouseEnter={()=>setShareHover(true)} >
                  <ShareIcon/>
                </ActionButton>
                <label>Share</label>
                { isShareHover && (
                <ShareWrapper>
                  <ShareHover/>
                </ShareWrapper>)}
              </ActionButtonContainer>
            </ActionContainer>
          </VideoWrapper> 
      </PostContainer>
      {debounceddHover &&(
        <AccountCardHoverWrapper  onMouseEnter={() => setHoverProfile(true)} onMouseLeave={() => setHoverProfile(false)}>
          <AccountCard data={data.account} ></AccountCard>
        </AccountCardHoverWrapper>
      )}
      <FollowButtonContainer>
        {(isFollowed)?(<FollowedButton onClick={()=>checkLogin(unfollow)}>Followed</FollowedButton>):(<FollowButton onClick={()=>checkLogin(follow)}>Follow</FollowButton>)}
      </FollowButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_r()}
  align-items: start;
  height:auto;
  width:100%;
  gap: 12px;
  position: relative;
  font-weight: 200;
  border-bottom: 1px solid var(--gray2);
  padding: 20px 0px;
`
const Photo = styled.div`
  width: 56px;
  :hover{
    cursor: pointer;
  }
  img{
    height: 56px;
    width: 56px;
    border-radius: 100%;
  }
`
const PostContainer = styled.div`
  ${Flex.flex_c()}
  align-items: flex-start;
  height:auto;
  width:100%;
  margin-right: 114px;
`

const User = styled.div`
  height:auto;
  width:auto;
  padding: 4px 0px 4px 0px;
  margin-left: -80px;
  padding-left: 80px;
  #userid{
    font-size: 1.1em;
    font-weight: 600;
  }
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

const ContentContainer = styled.div`
  padding: 4px 0px 8px 0px;
  
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-height: 88px;
  &.expand{
    max-height: 100%;
  }
`
const Content = styled.div`
  display: inline;
`
const SeeMoreSpacer = styled.div`
  height: 67px;
  float: right;
  width: 0px;
  margin-top: 0px;
`
const SeeMore = styled.div`
  width: auto;
  float: right;
  clear: both;
  cursor: pointer;
  padding: 0px 12px;
  line-height: 0.6;
  font-weight:600;
`
const SeeLess = styled.div`
  padding: 4px 0px 0px 0px;
  font-weight:600;
  cursor: pointer;
`
const Place = styled.div`
  ${Flex.flex_r}
  height:auto;
  width:auto;
  svg{
    width:20px;
  }
  a{
    padding:0px 4px;
  }
  margin:4px 0px;
`
const Music = styled.div`
  ${Flex.flex_r}
  height:auto;
  width:auto;
  svg{
    width:20px;
  }
  a{
    padding:0px 4px;
  }
  margin:4px 0px;
`


const VideoWrapper = styled.div`
  ${Flex.flex_r}
  gap: 16px;
`
const VideoContainer = styled.div`
  background-color: red;
  border-radius: 12px;
`
const Thumbnail = styled.div`
  z-index:200;
`



const ActionContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: 8px;
  label{
    font-size:0.8em;
    font-weight:600;
    color: var(--gray4);
  }
  margin-left:4px;
  margin-bottom:16px;
`

const ActionButtonContainer = styled.div`
  ${Flex.flex_c_center}
  height:auto;
  width: 48px;
  gap:4px;
  cursor: pointer;
  label{
    cursor: pointer;
  }
  position: relative;
`
const ActionButton = styled.div`
  ${Flex.flex_c_center}
  height:auto;
  padding: 12px;
  border-radius:100%;
  background-color: var(--gray1);
  &.reverse{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  &.active{
    color: var(--color3)
  }
`

const ShareWrapper = styled.div`
  position: absolute;
  bottom:85px;
  left:-30px;
  width: 300px;
  height: auto;
`

const FollowButtonContainer = styled.div`
  position: absolute;
  right:0;
  top: 10px;
  width:fit-content;
`
const FollowButton = styled.div`
  ${Flex.flex_r_center}
  ${Button.button_light}
  max-width: 100px;
  font-size: 1rem;
  font-weight: 400;
  height: auto;
  margin-top: 16px;
  padding: 3px 19px;
`
const FollowedButton = styled.div`
  ${Flex.flex_r_center}
  ${Button.button_gray_disabled}
  max-width: 100px;
  font-size: 1rem;
  font-weight: 400;
  height: auto;
  margin-top: 16px;
  padding: 3px 19px;
`
const AccountCardHoverWrapper = styled.div`
  position: absolute;
  top: 70px;
  height: fit-content;
  width: 320px;
`
export default Post