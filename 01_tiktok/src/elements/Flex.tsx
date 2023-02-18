import styled from 'styled-components'

let flex_r = () => {
    return `
        display: flex;
        flex-direction: row;
        align-items: center;
    `
}
let flex_c = () => {
    return `
        display: flex;
        flex-direction: column;
        align-items: center;
    `
}
let flex_r_center = () => {
    return `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
    `
}
let flex_c_center = () => {
    return `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    `
}
let flex_r_spacebetween = () => {
    return `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    `
}
let flex_c_spacebetween = () => {
    return `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
    `
}

export default {
    flex_r,flex_c,
    flex_r_center,flex_c_center,
    flex_r_spacebetween,flex_c_spacebetween,
}