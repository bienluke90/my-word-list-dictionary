import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import {lighten} from 'polished'

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

const Actions = () => {
    return (
        <ActionsBox>
            <Button>Add New</Button>
            <Button>Select All</Button>
            <Button inactive>Expand</Button>
            <Button inactive>Collapse</Button>
            <Button inactive>Delete</Button>
        </ActionsBox>
    )
}

export default Actions