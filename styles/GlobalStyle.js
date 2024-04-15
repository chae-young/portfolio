/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

// ${reset};
const GlobalStyle = createGlobalStyle`
${reset};
    html,body{

        padding: 0;
        margin: 0;
        font-family:-apple-system, "Manrope", "Noto Sans KR","Playfair Display", BlinkMacSystemFont,  Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";   
        font-size:10px;
    };
    body{
        line-height: 1.5;
        background:rgb(255,255,255);        
    }
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        background:none;
        border:0;
        padding:0;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration:none;
        color:rgb(0,0,0);
    }
    li{
        list-style:none;
    }

`
export default GlobalStyle
