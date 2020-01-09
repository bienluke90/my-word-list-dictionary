import { createGlobalStyle } from 'styled-components'
import theme from './mainTheme.js'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
    shape-rendering: crispEdges;
}

html {
    font-size: 10px;
}

body {
    font-family: ${theme.default_font_family}; 
    font-size: 1.5rem;
    background-color: ${theme.default_body_background};
    color: ${theme.default_body_text_color};
    
    @media screen and (min-width: ${theme.device.xs}) {
        font-size: ${theme.font_size.xs};
    }

    @media screen and (min-width: ${theme.device.sm}) {
        font-size: ${theme.font_size.sm};
    }

    @media screen and (min-width: ${theme.device.md}) {
        font-size: ${theme.font_size.md};
    }

    @media screen and (min-width: ${theme.device.xl}) {
        font-size: ${theme.font_size.xl};
    }

}
`
export default GlobalStyle

