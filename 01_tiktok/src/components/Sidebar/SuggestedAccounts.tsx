import Flex from '@/elements/Flex'
import Label from '@/elements/Label'
import { randAvatar,randNumber  } from '@ngneat/falso';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {CheckBadgeIcon} from "@heroicons/react/24/solid"
import AccountHover from './AccountHover'
import {useDebounce, useDebounceOnEnter} from '@/elements/Debounce'
import { useQuery } from 'react-query'

let accounts_init = [
  {"id":"riaricis","name":"Ria Ricis","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"pojoksatu.id","name":"Pojoksatu.id Official","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"ditanganu","name":"DitaKerang🌊","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"vidhia_r","name":"🐇Vidhi_R🐇","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"cahyanirynn","name":"Cahyaniryn","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"adi.syahreza","name":"Adi Syahreza","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"fujiiian","name":"Fujiiian","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"shopee_id","name":"Shopee Indonesia","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"siscakohl","name":"Sisca Kohl","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"resep_debm","name":"@resep_inspirasi_debm","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"regitamasri","name":"Re🧚🏻‍♀️| IG : regitamsr","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"sitianggunn_30","name":"Angguncantik","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"cheryantoinette","name":"Cheryl Antoinette","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"emilmario69","name":"emilmario","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"raffi_nagita","name":"RaffiNagita1717","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"popobarbiegirl","name":"Popo🦄🌈🌹🦋🌸","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"anggun_supriadi91","name":"anggun✨","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"radarbandung","name":"Radar Bandung","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"iben_ma","name":"Iben M.A.Iben M.A.","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"officialradarsukabumi","name":"radarsukabumi.com","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"bobacott","name":"bobacot🧋","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"officialinews","name":"OfficialiNews","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"lalitahutami","name":"Lita🐣","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"akashellahi","name":"Akash Elahi","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"williesalim","name":"WILLIE SALIM","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"attahalilintar","name":"Atta Halilintar","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"azkhategar391","name":"Tegar","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":false},
  {"id":"radar_bekasi","name":"Radar Bekasi","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
  {"id":"saalhaerid","name":"Saal","img":`${randAvatar()}?random=${randNumber()}`,"is_verified":true},
]

const user_default = {
  id:"default",
  username:"default",
  img:`${randAvatar()}?random=${randNumber()}`,
  is_verified:true,
  is_followed: false,
  followers : `${Math.round((Math.random()*1000))/10}M`,
  likes : `${Math.round((Math.random()*10000))/10}M`,
}

const getAccountDetail = (id:string) => {
  let users = accounts_init.filter((d)=>d.id==id)
  let user:any = {};
  if(users.length) {
    user = users[0]
  }else{
    user = user_default
  }
  user["is_followed"] = false;
  user["followers"] = `${Math.round((Math.random()*1000))/10}M`;
  user["likes"] = `${Math.round((Math.random()*10000))/10}M`;
  
  return user;
}


const SuggestedAccounts = () => {
  const [isExpanded,toggleExpanded] = useState(false)
  const [accounts, setAccounts] = useState(accounts_init)
  const [accountIdHover, setAccountHover] = useState("")
  const [accountHoverDetail, setAccountHoverDetail] = useState(user_default)

  const debouncedAccountIdHover = useDebounce(accountIdHover,600)
  const accountAPI = useQuery(
    ['account_detail', debouncedAccountIdHover], 
    async () => {
      // const { data } = await axios(`#?name=${debouncedSearchText}`);
      let user_id = debouncedAccountIdHover.trim()
      let user = getAccountDetail(user_id)
      setAccountHoverDetail(user)
    }
  )
  useEffect(()=>{
    if(accountIdHover){
      accountAPI.refetch()
    }
  },[debouncedAccountIdHover])

  let handleExpand = (e:any,value:boolean) =>{
    toggleExpanded(value)
  }

  return (
    <Container>
      <Title>Suggested Accounts</Title>
      {accounts.filter((data,index)=> ((isExpanded))?true:index<=5 ).map((data,index) => {
        return (
          <div key={index}>
            <div onMouseEnter={() => setAccountHover(data.id)} onMouseLeave={() => setAccountHover("")}>
            <Account >
              <img loading="lazy" src={data.img}></img>
              <label>
                <div id="usernameblock">
                  <span id="username">{data.name}</span>
                  <span id="verified">{data.is_verified?<CheckBadgeIcon/>:""}</span>
                </div>
                <span id="userid">{data.id}</span>
              </label>
            </Account>
            {(debouncedAccountIdHover==data.id)?<AccountHover data={accountHoverDetail}/>:""}
            </div>
          </div>
        )
      })}
      <Expand onClick={(e)=> handleExpand(e,!isExpanded)}>{(isExpanded)?"See less":"See all"}</Expand>
    </Container>
  )
}

const Container = styled.div`
  ${Flex.flex_c()}
  height:fit-content;
  font-size: 0.9rem;
`
const Expand = styled.div`
  padding: 8px 8px;
  font-weight: 200;
  color: var(--color3);
  :hover{
    cursor: pointer;
  }
  height: auto;
`
const Title = styled.div`
  ${Label.title()}
  height: auto;
`
const Account = styled.div`
  ${Flex.flex_r()}
  position: relative;
  font-weight: 600;
  line-height: 1.2;

  height: 50px;
  border-radius: 4px;
  img{
    padding: 8px 8px;
    height: 32px;
    width: 32px;
    border-radius:24px;
  }
  #usernameblock{
    ${Flex.flex_r}
    #username{}
    #verified{
      svg{
        color:rgb(32, 213, 236);
        width: 16px;
      }
    }
  }
  label{
    ${Flex.flex_c()}
    align-items: flex-start;
    padding: 0px 8px;
    #userid{
      font-size: 0.9em;
      color: var(--gray3);
    }
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    cursor: pointer;
    background-color: var(--gray1);
  }
`
export default SuggestedAccounts