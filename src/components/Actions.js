import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import {lighten} from 'polished'
import {connect} from 'react-redux'
import {removeSelected as removeSelectedAction} from '../actions'
import {selectAll as selectAllAction} from '../actions'
import {deselectAll as deselectAllAction} from '../actions'
import { PropTypes } from 'prop-types'

const ActionsBox = styled.div`
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
    border-radius: 3px;
    padding: 8px 12px;
    margin: 5px 5px;
    white-space: nowrap;
    &:hover {
        ${({inactive}) => !inactive && `background-color: ${lighten(0.3, theme.default_button_background)}`};
        transition: 0.5s background-color;
    }
`

const Actions = ({showTagEntries, removeSelected, selectAll, deselectAll, entries}) => {
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

    console.log('l:' + l + ' k:' + k + ' j:' + j + ' entries.length:' + entries.length)



    return (
        <ActionsBox>
            <Button>Add New</Button>
            <Button onClick={(entries.length === j || l === k)  ? (() => deselectAll()) : (() => selectAll()) }>
                {(entries.length === j || l === k) ? 'Deselect' : 'Select'} All
            </Button>
            <Button inactive>Expand</Button>
            <Button inactive>Collapse</Button>
            <Button inactive={!(j || k)} onClick={(j || k) && (() => removeSelected())}>Delete</Button>
        </ActionsBox>
    )
}

const mapDispatchToProps = dispatch => ({
    removeSelected: () => dispatch(removeSelectedAction()),
    selectAll: () => dispatch(selectAllAction()),
    deselectAll: () => dispatch(deselectAllAction())
})

const mapStateToProps = state => {
    const {showTagEntries, entries} = state
    return {showTagEntries, entries}
}

Actions.propTypes = {
    selectedEntries: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)