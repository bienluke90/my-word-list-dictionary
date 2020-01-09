import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme'
import {connect} from 'react-redux'
import {selectOne as selectOneAction} from '../actions'

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

        const {selectOne, id, selected, timeAdded, expanded, contents} = this.props

        const lineTypes = contents.map((e, i) => <LineType key={i}><b>{e.type}</b>: {e.text}</LineType>),
            oneLine = (<LineType><b>{contents[0].type}</b>: {contents[0].text.substring(0, 20).concat('...')}</LineType>)
           
            return (  
                <StyledEntry selected={selected}>
                    <StyleAddedAt>Added: {timeAdded.toLocaleString()}</StyleAddedAt> 
                    <StyledParagraph>
                        {expanded ? lineTypes : oneLine}
                        <SelectButton onClick={() => selectOne(selected, id)}>[Select]</SelectButton>
                    </StyledParagraph>
                </StyledEntry>
            )

    }
}

const mapDispatchToProps = dispatch => ({
    selectOne: (data, id) => dispatch(selectOneAction(data, id))
})


export default connect(null, mapDispatchToProps)(Entry)