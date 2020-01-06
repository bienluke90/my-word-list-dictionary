import styled from 'styled-components'
import navIcon from '../assets/navicon.svg'
import cancelIcon from '../assets/cancelicon.svg'
import goIcon from '../assets/goicon.svg'
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
        display: none;
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
    
    ${({navOpened}) => navOpened && `
        transform: translateX(0);
        transition: 0.5s transform;
    `}

    @media screen and (min-width: ${theme.device.md}) {
        transition: 0 none;
        background-color: transparent;
        position: static;
        display: flex;
        height: 100%;
        align-items: center;
        transform: none;
        ${({navOpened}) => navOpened && `
            transform: translateX(0);
        `}
    }
`

const ListItem = styled.li`
    padding: 10px 15px;
    list-style-type: none;
    border-bottom: 1px solid rgba(75,75,125,0.5);
    background-image: url(${goIcon});
    background-repeat: no-repeat;
    background-position: 90% center;
    background-size: 30px 30px;
    
    &:hover {
            background-color: rgba(75,75,125,0.5);
        }

    @media screen and (min-width: ${theme.device.md}) { 
        display: inline-block;
        width: 230px;
        border: 2px solid rgba(75,75,75,0.3);
        background-image: linear-gradient(0deg, rgba(125,125,125,0.75) 20%, rgba(180,180,180,0.75) 100%);
        background-size: 100% 100%;
        text-shadow: 1px 1px rgba(175,175,175,0.75);
        box-shadow: 3px 3px 10px 10px rgba(0,0,0,0.15) inset;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        margin: 10px; 
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