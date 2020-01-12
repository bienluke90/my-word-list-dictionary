import styled from 'styled-components'
import theme from '../styles/mainTheme.js'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    height: ${theme.header_mobile_height};
    background-color: ${theme.default_header_background};
    color: ${theme.default_header_text_color};
    align-items: bottom;
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.device.md}) {
        height: ${theme.header_desktop_height};
    }
`

export default StyledHeader