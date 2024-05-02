import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #1F2229;
        --background2: #2E303C;
        --background-button: #373945;
        --background-button2: #4B4D59;
        --yellow: #FAE800;
        --gray: #BEC2C6;
        --white: #FBFBFB;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--gray);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Popppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .container {
        display: flex;
        flex-direction: row;
    }
`