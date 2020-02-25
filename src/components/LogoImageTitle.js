import styled from 'styled-components'
import theme from '../styles/mainTheme.js'

const LogoImage = styled.img`
    height: ${theme.header_mobile_height};
    width: ${theme.header_mobile_height};
    margin-right: 15px;
    height: 45px;
    width: 64px;
    @media screen and (min-width: ${theme.device.md}) {
        height: 90px;
        width: 128px;
    }
`

const LogoTitle = styled.p`
    display: inline-block;
    align-items: center;
    font-size: 14px;
    font-weight: bold;

    @media screen and (min-width: ${theme.device.md}) {
        font-size: 24px;
        display: block;
    }
`

export {LogoImage, LogoTitle}