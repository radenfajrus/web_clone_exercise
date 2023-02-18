import Flex from '@/elements/Flex'
import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';

import styled from 'styled-components'
import {XCircleIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { faker } from '@faker-js/faker'
import axios from 'axios';
import {useDebounce} from '@/elements/Debounce'
import Label from '@/elements/Label';
import Border from '@/elements/Border';
import Scrollbar from '@/elements/Scrollbar';

let searchText_init = "messi"
let keywords_init = [
  "messi argentina 2022",
  "messi",
  "messi tadi malam",
  "messi edit",
  "messi jedag jedug",
  "messi skill",
  "messi world cup 2022",
  "messi vs ronaldo",
]
let accounts_init = [
  {"id":"𝘼𝙡𝙥𝙝𝙖 ⚡️","name":"messifan.30","img":faker.image.avatar()},
  {"id":"Meissieeee","name":"itsmeissie","img":faker.image.avatar()},
]

const Search = () => {
  let [searchText,setSearchText] = useState(searchText_init)
  let [keywords,setKeywords] = useState(keywords_init)
  let [accounts,setAccounts] = useState(accounts_init)
  let [isFocus,toggleFocus] = useState(false)
  
  const debouncedSearchText = useDebounce(searchText, 200);
  const searchAPI = useQuery(
    ['search', debouncedSearchText], 
    async () => {
      // const { data } = await axios(`#?name=${debouncedSearchText}`);
      let text = debouncedSearchText.trim()
      if( (String(text).length>3) && searchText_init.startsWith(String(text) ) ){
        setKeywords(keywords_init)
        setAccounts(accounts_init)
      }else{
        setKeywords([])
        setAccounts([])
      }
    }
  )
  useEffect(()=>{
    searchAPI.refetch()
  },[debouncedSearchText])

  return (
    <Container>
      <SearchForm>
        <input onBlur={(e)=>toggleFocus(false)}  onFocus={(e)=>toggleFocus(true)} type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search accounts and videos'></input>
        <CancelButton>
          {(searchText.length)?<XCircleIcon onClick={(e)=>setSearchText("")}/>:""}
        </CancelButton>
        <Divider></Divider>
        <SearchButton>
            <MagnifyingGlassIcon/>
        </SearchButton>
      </SearchForm>
      {((keywords.length || accounts.length) && isFocus && !searchAPI.isLoading)?(
        <SearchResult>
          {(keywords.length)?(
          <KeywordList>
            {keywords.map((data,index) => {
              return (
                <Keyword key={index}>
                  <MagnifyingGlassIcon/>
                  <label>{data}</label>
                </Keyword>
              )
            })}
          </KeywordList>):""}
          {(accounts.length)?(<>
          <AccountTitle>Accounts</AccountTitle>
          <AccountList>
            {accounts.map((data,index) => {
              return (
                <Account key={index}>
                  <img width={40} style={{borderRadius:24}} loading="lazy" src={data.img}></img>
                  <label>
                    <span id="userid">{data.id}</span>
                    <span id="username">{data.name}</span>
                  </label>
                </Account>
              )
            })}
          </AccountList></>):""}
          <ViewAllResult>View all result for "{debouncedSearchText}"</ViewAllResult>
        </SearchResult>
      ):""}
    </Container>
  )
}


const Container = styled.div`
  position: relative; 
`
const SearchForm = styled.form`
  ${Flex.flex_r()}
  height: 100%;
  background-color: var(--gray1);
  border-radius: 24px;
  overflow: hidden;
  input{
    width: 252px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--gray4);
    caret-color: var(--color3);
    border: none;
    outline: none;
    font-size: 1rem;
  }
`
const CancelButton = styled.div`
  ${Flex.flex_r_center()}
  width: auto;
  padding: 0 12px;
  color: var(--gray3);
  svg {
      width: 18px;
      :hover{
          cursor: pointer;
      }
  }
`
const Divider = styled.div`
  width: 1px;
  background-color: var(--gray2);
  height: 60%;
`
const SearchButton = styled.div`
  ${Flex.flex_r_center()}
  width: auto;
  padding: 0 12px;
  color: var(--gray4);
  border-radius:  0px 24px 24px 0px;
  svg {
      width: 22px;
  }
  :hover{
    cursor: pointer;
      background-color: var(--gray2);
  }
  /* :after{
    border: 1px solid transparent;
    border-left-color: var(--gray2);
    content : "";
    position: absolute;
    right   : 40px;
    top    : 15%;
    z-index: 100;
    width  : 1px;
    height : 70%;  
  } */
`

const SearchResult = styled.div`
  ${Flex.flex_c()}
  ${Border.thin_gray}
  ${Scrollbar.medium_gray}
  position: absolute;
  height: auto;
  padding-top: 8px;
  border-radius:  12px;
  max-height: min((100vh - 96px) - 60px, 1000px);
  overflow-y: auto;
`

const KeywordList = styled.div`
  ${Flex.flex_c()}
  position:relative;
  height: auto;
`
const Keyword = styled.div`
  ${Flex.flex_r()}
  position:relative;
  padding: 8px 12px;
  svg {
    padding: 0px 8px;
    width:14px;
  }
  label {
    padding: 0px 4px;
  }
  :hover {
    cursor: pointer;
    background-color: var(--gray1);
  }
`
const AccountTitle = styled.div`
  ${Label.title()}
`
const AccountList = styled.div`
  ${Flex.flex_c()}
  gap:10px;
`
const Account = styled.div`
  ${Flex.flex_r()}
  padding: 8px 12px;
  img{
    padding: 0px 4px;
  }
  label{
    ${Flex.flex_c()}
    align-items: flex-start;
    padding: 0px 8px;
    #userid{}
    #username{
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
const ViewAllResult = styled.div`
  ${Flex.flex_r()}
  padding: 16px 16px;
  :hover {
    cursor: pointer;
    background-color: var(--gray1);
  }
`

export default Search

