import styled from 'styled-components'

let thin_gray = () => {
    return `
        overflow-y: overlay;
        &::-webkit-scrollbar
        {
        width: 6px;
        background-color: var(--color1);
        }
        &::-webkit-scrollbar-thumb
        {
        overflow:visible;
        border-radius: 10px;
        background-color: var(--gray1);
        }
    `
}
let medium_gray = () => {
    return `
    overflow-y: overlay;
    &::-webkit-scrollbar
    {
      z-index:1000;
      width: 8px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb
    {
      overflow:visible;
      border-radius: 10px;
      background-color: var(--gray1);
    }
    `
}


export default {
    thin_gray,
    medium_gray,
}