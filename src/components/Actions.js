import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import {lighten} from 'polished'
import {connect} from 'react-redux'
import {removeSelected as removeSelectedAction, showTag} from '../actions'
import {selectAll as selectAllAction} from '../actions'
import {deselectAll as deselectAllAction} from '../actions'
import {openAddNewModal as openAddNewModalAction} from '../actions'
import {expandAll as expandAllAction} from '../actions'
import {collapseAll as collapseAllAction} from '../actions'
import plusicon from '../assets/plusicon.svg'
import selectallicon from '../assets/selectallicon.svg'
import expandicon from '../assets/expandicon.svg'
import collapseicon from '../assets/collapse-icon.svg'
import trashicon from '../assets/trashicon.svg'
import { PropTypes } from 'prop-types'

const ActionsBox = styled.div`

    background-image: linear-gradient(0deg, rgba(125,125,125,0.75) 20%, rgba(180,180,180,0.75) 100%);
    background-size: 100% 100%;
    width: 100%;
    min-height: 50px;
    padding: 0 ${theme.gutterWidth};
    ${({position}) => position > parseInt(theme.header_desktop_height) && `
        position: fixed;
        left: 50%;
        top: ${theme.header_mobile_height};
        z-index: 9999999999999999999999999;
        transform: translateX(-50%);
        width: 100%;
        background-color: ${theme.default_body_background};
        padding: 0;

    `}
    @media screen and (min-width: ${theme.device.md}) {
        display: flex;
        align-items: center;
    }
` 

const Button = styled.button`
    background-color: ${theme.default_button_background};
    ${({inactive}) => inactive && `background-color: ${theme.default_button_background__inactive}`};
    ${({inactive}) => !inactive && `cursor: pointer`};
    color: ${theme.default_button_text_color};
    ${({inactive}) => inactive && `color: ${lighten(0.3, theme.default_button_text_color)}`};
    font-size: inherit;
    border: 2px solid ${theme.default_button_text_color};
    ${({inactive}) => inactive && `border: 2px solid ${lighten(0.3, theme.default_button_text_color)}`};
    min-height: 4rem;
    line-height: 2rem;
    border-radius: 3px;
    padding: 8px 12px;
    margin: 5px 5px;
    white-space: nowrap;
    background-position: 8px 6px;
    background-repeat: no-repeat;

    ${({position}) => position > parseInt(theme.header_desktop_height) && `
        text-indent: -1000rem;
        width: 20px;
        padding: 0;
    `}

    &:hover {
        ${({inactive}) => !inactive && `background-color: ${lighten(0.3, theme.default_button_background)}`};
        transition: 0.5s background-color;
    }

    ${({alternative}) => alternative && `
        background-position: 6px -69px;
    `
    }
    ${({inactive}) => inactive && `
        background-position: 6px -69px;
    `
    } 
    ${({type}) => type === 'addnew' && `
        padding-left: 4rem;
        background-position: 6px center;
        background-image: url(${plusicon});

    `}
    ${({type}) => type === 'selectall' && `
        padding-left: 4rem;
        background-image: url(${selectallicon});

    `}
    ${({type}) => type === 'expand' && `
        padding-left: 4rem;
        background-image: url(${expandicon});
    `}
    ${({type}) => type === 'collapse' && `
        padding-left: 4rem;
        background-image: url(${collapseicon});
    `}
    ${({type}) => type === 'delete' && `
        padding-left: 3.5rem;
        background-image: url(${trashicon});
    `}
`

const Actions = ({showTagEntries, removeSelected, selectAll, deselectAll, entries, openAddNewModal, expandAll, collapseAll, position}) => {

    // Check how many selected in order to show inactive buttons
    let j = 0, k = 0, l,
        e = 0, te = 0, c = 0, tc = 0, inactiveExpand, inactiveCollapse



    if(showTagEntries.length) {
         l = 0
        for (let i of showTagEntries) {
            for (let h = 0; h < i.entries.length; h++) {
                i.entries[h].selected && k++
                l++
            }
        }
    } else {
        for (let i of entries) {
            i.selected && j++
        }        
    }

    // Check how many is expanded or/and collapsed  
    if (!showTagEntries.length) {
        for (let i of entries) {
            i.expanded && i.selected && e++
            !i.expanded && i.selected && c++
        }
    } else {
        for (let i of showTagEntries) {
            for (let h of i.entries) {
                h.expanded && h.selected && te++
                !h.expanded && h.selected && tc++
            }
        }
    }

    inactiveExpand = !(c || tc)
    inactiveCollapse = !(e || te)

    return (
        <ActionsBox position={position}>
            <Button position={position} type="addnew" onClick={() => openAddNewModal()}>Add New</Button>
            <Button position={position} alternative={(entries.length === j || l === k)}
                    type="selectall" 
                    onClick={(entries.length === j || l === k)  ? (() => deselectAll()) : (() => selectAll()) }
            >
                {(entries.length === j || l === k) ? 'Deselect' : 'Select'} All
            </Button>
            <Button position={position} type="expand" inactive={inactiveExpand} onClick={!inactiveExpand && (() => expandAll())}>Expand</Button>
            <Button position={position} type="collapse" inactive={inactiveCollapse} onClick={!inactiveCollapse && (() => collapseAll())}>Collapse</Button>
            <Button position={position} type="delete" inactive={!(j || k)} onClick={(j || k) && (() => removeSelected())}>Delete</Button>
        </ActionsBox>
    )
}

const mapDispatchToProps = dispatch => ({
    removeSelected: () => dispatch(removeSelectedAction()),
    selectAll: () => dispatch(selectAllAction()),
    deselectAll: () => dispatch(deselectAllAction()),
    openAddNewModal: () => dispatch(openAddNewModalAction()),
    expandAll: () => dispatch(expandAllAction()),
    collapseAll: () => dispatch(collapseAllAction()),
})

const mapStateToProps = state => {
    const {showTagEntries, entries} = state
    return {showTagEntries, entries}
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)