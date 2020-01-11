import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import {lighten} from 'polished'
import {connect} from 'react-redux'
import {removeSelected as removeSelectedAction} from '../actions'
import {selectAll as selectAllAction} from '../actions'
import {deselectAll as deselectAllAction} from '../actions'
import {openAddNewModal as openAddNewModalAction} from '../actions'
import {expandAll as expandAllAction} from '../actions'
import {collapseAll as collapseAllAction} from '../actions'
import { PropTypes } from 'prop-types'

const ActionsBox = styled.div`
    display: flex;
    align-items: center;
    background-image: linear-gradient(0deg, rgba(125,125,125,0.75) 20%, rgba(180,180,180,0.75) 100%);
    background-size: 100% 100%;
    width: 100%;
    min-height: 60px;
    padding: 0 ${theme.gutterWidth};
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
    height: 4rem;
    line-height: 2rem;
    border-radius: 3px;
    padding: 8px 12px;
    margin: 5px 5px;
    white-space: nowrap;
    &:hover {
        ${({inactive}) => !inactive && `background-color: ${lighten(0.3, theme.default_button_background)}`};
        transition: 0.5s background-color;
    }
`

const Actions = ({showTagEntries, removeSelected, selectAll, deselectAll, entries, openAddNewModal, expandAll, collapseAll}) => {

    // Check how many selected in order to show inactive buttons
    let j = 0, k = 0, l;
    for (let i of entries) {
        i.selected && j++
    }

    if(showTagEntries.length) {
         l = 0
    }

    for (let i of showTagEntries) {
        for (let h = 0; h < i.entries.length; h++) {
            i.entries[h].selected && k++
            l++
        }
    }

    // Check how there are some expanded or/and collapsed
    let e = 0, te = 0, c = 0, tc = 0
    for (let i of entries) {
        i.expanded && e++
        !i.expanded && c++
    }

    for (let i of showTagEntries) {
        for (let h of i.entries) {
            h.expanded && te++
            !h.expanded && tc++
        }
    }


    alert(e + ' ' + te)

    return (
        <ActionsBox>
            <Button onClick={() => openAddNewModal()}>Add New</Button>
            <Button onClick={(entries.length === j || l === k)  ? (() => deselectAll()) : (() => selectAll()) }>
                {(entries.length === j || l === k) ? 'Deselect' : 'Select'} All
            </Button>
            <Button inactive={(c || tc) && !(j || k)} onClick={(j || k) && (() => expandAll())}>Expand</Button>
            <Button inactive={(!e && !te) && !(j || k)} onClick={(j || k) && (() => collapseAll())}>Collapse</Button>
            <Button inactive={!(j || k)} onClick={(j || k) && (() => removeSelected())}>Delete</Button>
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