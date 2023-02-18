import styled from 'styled-components'

let thin_gray = () => {
    return `
    background-color: var(--color1);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 6%) 0px 2px 8px;
    border: 1px solid rgba(22, 24, 35, 0.03);
    `
}
let medium_gray = () => {
    return `
    background-color: white;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 12%) 0px 4px 16px;
    border: 1px solid rgba(22, 24, 35, 0.03);
    
    `
}


export default {
    thin_gray,
    medium_gray,
}