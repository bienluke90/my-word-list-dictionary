import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme'
import {connect} from 'react-redux'
import {selectOne as selectOneAction} from '../actions'
import {expandOne as expandOneAction} from '../actions'
import accepticon from '../assets/accepticon.svg'
import dropdownicon from '../assets/dropdownicon.svg'
import collapseicon from '../assets/collapseicon.svg'

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
    display: block;
    padding: 5px 50px 5px 10px;
    min-height: 43px;
`

const StyledParagraph = styled.p`
    width: 100%;
`

const SelectButton = styled.button`
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
    height: 25px;
    border-radius: 15%;
    border: 1px solid #555;
    cursor: pointer;
    ${({selected}) => selected && `
        box-shadow: 1px 1px 10px ${theme.special_colors.notify};
        background-image: url(${accepticon});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    `}
`

const ExpandButton = styled.button`
    display: block;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 25px;
    height: 25px;
    border-radius: 15%;
    border: 1px solid #555;
    background-image: url(${dropdownicon});
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position: center center;
    cursor: pointer;
    ${({active}) => active && `
        background-image: url(${collapseicon}) !important;
    `}
`

const LineType = styled.span`
    display: block;
    background-color: rgba(0, 0, 30, 0.15);
    padding: 10px 50px 10px 10px;
    &:nth-child(2n) {
        background-color: rgba(0, 0, 30, 0.25);
    }
`

class Entry extends React.Component {

    render() {

        const {selectOne, id, selected, timeAdded, expanded, contents, notByTags, tagged, tag, expandOne} = this.props
        const lineTypes = contents.map((e, i) => <LineType key={i}><b>{e.type}</b>: {e.text}</LineType>),
            oneLine = (<LineType>
                <b>{contents[0].type}: </b>
                {contents[0].text.length > 25 ? contents[0].text.substring(0, 30).concat('...') : contents[0].text}
                <br/>
            </LineType>)
           
            return (  
                <StyledEntry selected={selected}>
                    <StyleAddedAt>
                        Added: {timeAdded.toLocaleString()}
                        <br/>
                        {notByTags && <span>Tag: <b>{tagged}</b></span>}
                        <SelectButton selected={selected} onClick={() => selectOne(selected, id, tag)}> </SelectButton>
                    </StyleAddedAt> 
                    <StyledParagraph>
                        {expanded ? lineTypes : oneLine}
                        <ExpandButton active={expanded} onClick={() => expandOne(expanded, id)}> </ExpandButton>
                    </StyledParagraph>
                </StyledEntry>
            )

    }
}

const mapDispatchToProps = dispatch => ({
    selectOne: (selected, id, inTag) => dispatch(selectOneAction(selected, id, inTag)),
    expandOne: (expanded, id) => dispatch(expandOneAction(expanded, id)),
})


export default connect(null, mapDispatchToProps)(Entry)