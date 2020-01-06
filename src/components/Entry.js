import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme'
import {connect} from 'react-redux'
import {selectOne as selectOneAction} from '../actions'
import { render } from '@testing-library/react'

const StyledEntry = styled.div`
    display: inline-block;
    position: relative;
    margin: 5px 10px;
    width: calc(100% - 15px);
    border: 2px solid ${theme.default_body_text_color};
    border-radius: 4px;
    ${({selected}) => selected && `box-shadow: 1px 1px 15px ${theme.special_colors.notify}`}
    @media screen and (min-width: ${theme.device.sm}) {
        width: calc(50% - 20px);
    }
    @media screen and (min-width: ${theme.device.md}) {
        width: calc(33.33% - 20px);
    }
`

const StyleAddedAt = styled.small`
    padding: 5px;
`

const StyledParagraph = styled.p`
    width: 100%;
    
`

const SelectButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 55px;
    height: 20px;
    border: none;
    border-radius: 3px;
`

const LineType = styled.span`
    display: block;
    background-color: rgba(0, 0, 30, 0.15);
    padding: 10px 70px 10px 10px;
    &:nth-child(2n) {
        background-color: rgba(0, 0, 30, 0.25);
    }
`

class Entry extends React.Component {

    render() {

        const {id, entries, selectOne} = this.props

        const entryData = entries[id]
    
        const   lineTypes = entryData.contents.map(e => <LineType key={e.id}><b>{e.type}</b>: {e.text}</LineType>),
                oneLine = (<LineType><b>{entryData.contents[0].type}</b>: {entryData.contents[0].text.substring(0, 20).concat('...')}</LineType>)

        return (  
            <StyledEntry selected={entryData.selected}>
                <StyleAddedAt>Added: {entryData.timeAdded.toLocaleString()}</StyleAddedAt> 
                <StyledParagraph>
                    {entryData.expanded ? lineTypes : oneLine}
                    <SelectButton onClick={() => selectOne(entryData)}>[Select]</SelectButton>
                </StyledParagraph>
            </StyledEntry>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectOne: (data) => dispatch(selectOneAction(data))
})

const mapStateToProps = state => {
    const {entries} = state
    return {entries}
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry)