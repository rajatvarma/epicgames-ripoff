import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
        
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: #111212;
        color: #FFF;
    }

    h1 {
        font-size: 2rem;
        font-family: 'Nexa';
        padding: 1rem 0 !important;
    }

    h2 {
        font-size: 1.6rem;
        font-family: 'Nexa';
        padding: 1rem 0 !important;
    }

    h3 {
        font-size: 1.3rem;
        padding: 1.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 200%;
    }

    a {
        text-decoration: none;
        color: initial;
    }

    button {
        font-family: 'Lato', serif
    }

    input {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
`
export default GlobalStyle