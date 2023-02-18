import styled from 'styled-components'

let button_gray = () => {
    return `
        white-space: nowrap;
        border: 1px solid var(--gray2);
        background-color: var(--color_btn_gray);
        color: var(--text_btn_gray);
        border-radius: 4px;
        svg{
            width:20px;
        }
        label:hover{
            cursor: pointer;
        }
        :hover{
            cursor: pointer;
            background-color: var(--color_btn_gray_hover);
        }
    `
}
let button_gray_disabled = () => {
    return `
        white-space: nowrap;
        border: 1px solid var(--gray1);
        background-color: var(--gray1);
        color: var(--gray3);
        border-radius: 4px;
        svg{
            width:20px;
        }
        label:hover{
            cursor: pointer;
        }
        :hover{
            cursor: pointer;
            background: var(--color_btn_gray_hover);
        }
        :active{
            cursor: pointer;
            background: var(--color_btn_gray_active);
        }
    `
}
let button_light = () => {
    return `
        white-space: nowrap;
        border: 1px solid var(--text_btn_light);
        background-color: var(--color_btn_light);
        color: var(--text_btn_light);
        border-radius: 4px;
        svg{
            width:20px;
        }
        label:hover{
            cursor: pointer;
        }
        :hover{
            cursor: pointer;
            background: var(--color_btn_light_hover);
        }
        :active{
            cursor: pointer;
            background: var(--color_btn_light_active);
        }
    `
}
let button_dark = () => {
    return `
        white-space: nowrap;
        border: none;
        background-color: var(--color_btn_dark);
        color: var(--text_btn_dark);
        border-radius: 4px;
        svg{
            width:20px;
        }
        label:hover{
            cursor: pointer;
        }
        :hover{
            cursor: pointer;
            background: var(--color_btn_dark_hover);
        }
        :active{
            cursor: pointer;
            background: var(--color_btn_dark_active);
        }
    `
}

export default {
    button_gray,
    button_light,
    button_dark,
    button_gray_disabled,
}