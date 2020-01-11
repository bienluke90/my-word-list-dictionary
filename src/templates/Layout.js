import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import bookIcon from '../assets/book-icon.png'
import {LogoImage, LogoTitle} from './LogoImageTitle.js'
import StyledHeader from './Header.js'
import {StyledNavigation, NavIcon, NavList, ListItem} from './HeaderNavigation.js'
import Dashboard from '../components/Dashboard.js'
import {connect} from 'react-redux'
import {showAll as showAllAction} from '../actions'
import {showTag as showTagAction} from '../actions'
import {deselectAll as deselectAllAction} from '../actions'
import AddNewModal from '../components/AddNewModal.js'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    padding: 0 ${theme.gutterWidth};

    @media screen and (min-width: ${theme.device.md}) {
        max-width: ${theme.device.md};
    }

    @media screen and (min-width: ${theme.device.xl}) {
        max-width: ${theme.device.xl};
    }
`

const MainContent = styled.main`
    position: absolute;
    top: calc(${theme.header_mobile_height} + ${theme.gutterWidth});
    left: 0;
    z-index: 9;
    background-color: ${theme.default_content_background};
    width: 100%;
    min-height: 100vh;
    ${({navOpened}) => navOpened && `
        ::after {
                content: " a";
                display: block;
                position: fixed;
                top: ${theme.header_mobile_height};
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 998;
                background-color: rgba(50,80,100,0.75);
            }
    `}
    @media screen and (min-width: ${theme.device.md}) {
        top: calc(${theme.header_desktop_height} + ${theme.gutterWidth});
    }
`

class Layout extends React.Component {

    state = {
        navOpened: false,
        addNewOpened: false,
    }

    handleNavicon = () => {
        this.setState({
            navOpened: !this.state.navOpened
        })
    }

    handleClick = (e) => {
        const cords = e.target.getBoundingClientRect()
        if(e.clientX < cords.width && e.clientY < cords.height) {
            this.handleNavicon()
        }
    }

    render() {
        const {tags, showTag, showAll, showTagEntries} = this.props, 
              {navOpened} = this.state,
              selectedTags = showTagEntries.map(e => e.tag)

        const listItems = tags.map((l, i) => (
            <ListItem key={i} 
                      selected={selectedTags.includes(l)} 
                      onClick={() => showTag(l)}>
                <b>#{l}</b>
            </ListItem>
         ))

        return (
            <>
                <div onClick={this.state.navOpened ? this.handleClick : null}>
                    <StyledHeader>  
                        <MainContainer>
                            <LogoImage src={bookIcon} alt="Dictionary Icon Logo"/>
                            <LogoTitle> <span>My Word <br />List & Dictionary</span></LogoTitle>
                            <StyledNavigation>
                                <NavIcon navOpened={navOpened} onClick={this.handleNavicon}>
                                </NavIcon>
                                <NavList navOpened={navOpened}>
                                    <ListItem selected={!showTagEntries.length} onClick={() => showAll()}>
                                        <b>#ALL TAGS</b>
                                    </ListItem>
                                    {listItems}
                                </NavList>
                            </StyledNavigation>
                        </MainContainer>
                    </StyledHeader>
                    <MainContainer>
                        <MainContent navOpened={navOpened}>
                            <Dashboard />
                        </MainContent>
                    </MainContainer>
                </div>
                <AddNewModal />
            </>
        )
    }
}

const mapStateToProps = state => {
    const {tags, showTagEntries} = state
    return {tags, showTagEntries}
}

const mapDispatchToProps = dispatch => ({
    showAll: () => dispatch(showAllAction()),
    showTag: (tag) => dispatch(showTagAction(tag)),
    deselectAll: () => dispatch(deselectAllAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)