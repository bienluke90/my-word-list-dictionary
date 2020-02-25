import styled from 'styled-components'
import navIcon from '../assets/navicon.svg'
import cancelIcon from '../assets/cancelicon.svg'
import acceptIcon from '../assets/accepticon.svg'
import theme from '../styles/mainTheme.js'
import PropTypes from 'prop-types'

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    height: 100%;
    position: absolute;
    padding: ${theme.gutterWidth};
    top: 0;
    right: 0;
`

const NavIcon = styled.button`
    position: absolute;
    padding: ${theme.gutterWidth};
    background-color: rgba(200, 230, 255, 0.43);
    background-image: url(${navIcon});
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
    border: 2px solid ${theme.default_header_text_color};
    border-radius: 4px;
    cursor: pointer;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: block;
    width: 35px;
    height: 35px;
    padding: 10px 18px;

    ${({navOpened}) => navOpened && `
        background-image: url(${cancelIcon});
    `}

    @media screen and (min-width: ${theme.device.md}) {
       width: 75px;
       height: 65px;
    }
`

const NavList = styled.ul`
    position: fixed;
    top: ${theme.header_mobile_height};
    right: 0;
    height: 100%;
    width: 70%;
    background-color: ${theme.default_nav_background};
    z-index: 99999999;
    transform: translateX(100%);
    overflow-y: scroll;

    ${({navOpened}) => navOpened && `
        transform: translateX(0);
        transition: 0.5s transform;
    `}

    @media screen and (min-width: ${theme.device.md}) {
        width: 50%;
        top: ${theme.header_desktop_height};
        ${({navOpened}) => navOpened && `
            transform: translateX(0);
        `}
    }

    @media screen and (min-width: ${theme.device.xl}) {
        width: 35%;
    }
`

const ListItem = styled.li`
    position: relative;
    padding: 10px 15px;
    list-style-type: none;
    border-bottom: 1px solid rgba(75,75,125,0.5);
    cursor: pointer;
    ${({selected}) => selected && `
      &::after {
        background-image: url(${acceptIcon});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 20px 20px;
    }  
    `}
    &::after {
        content: ' ';
        display: block;
        position: absolute;
        height: 25px;
        width: 25px;
        border-radius: 4px;
        top: 50%;
        right: 20px;
        border: 1px solid ${theme.default_button_text_color};
        transform: translateY(-50%);
    }
    &:hover {
            background-color: rgba(75,75,125,0.5);
        }

`

NavIcon.propTypes = {
    navOpened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

NavList.propTypes = {
    navOpened: PropTypes.bool.isRequired
}

export {StyledNavigation, NavIcon, NavList, ListItem}