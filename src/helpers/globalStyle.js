import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        width: 100%;
        height: 100%;
        font-family: Work Sans, Noto Sans TC;
        -webkit-text-size-adjust: none;
    }

    html {
        font-size: 62.5%;
    }


    body {
        box-sizing: border-box;
    }

    .hamburger-react {
        margin: -12px;
    }

    .read-more-less--more,
    .read-more-less--less {
        color: ${(props) => props.theme.color.purple};      
        border: 1px solid ${(props) => props.theme.color.black};
        width: auto;
        height: auto;
    }

    .lazy-load-image-background  {
        width: auto;
        height: auto;
    }
`;
