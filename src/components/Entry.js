import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../styles/mainTheme'
import {connect} from 'react-redux'
import {selectOne as selectOneAction} from '../actions'
import {flipCard as flipCardAction} from '../actions'
import accepticon from '../assets/accepticon.svg'
import lefticon from '../assets/left-icon.svg'
import righticon from '../assets/right-icon.svg'

const StyledEntry = styled.div`
    display: inline-block;
    position: relative;
    margin: 5px 10px;
    width: calc(100% - 15px);
    border: 2px solid ${theme.default_body_text_color};
    border-radius: 4px;
    outline: 0 none !important;
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
    font-size: 15px;
    color: #ddd;
    text-align: center;
    padding: 5px 30px 5px 30px;
    min-height: 27px;
    background-color: rgba(0, 0, 10, 0.65);
`

const StyledParagraph = styled.p`
    width: 100%;
`

const SelectButton = styled.button`
    display: block;
    position: absolute;
    right: 10px;
    bottom: 15px;
    width: 20px;
    height: 20px;
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

const CardType = styled.span`
    display: block;
    position: relative;
    text-align: center;
    font-size: 28px;
    padding: 10px 40px 20px 40px;
    background-color: #eee;
    b {
       font-size: 16px;
       text-transform: capitalize;
       text-decoration: underline;
    }
`

const FlipButton = styled.button`
    position: absolute;
    top: 0;
    width: 35px;
    height: 100%;
    border: 0;
    background-color: transparent;
    box-shadow: 0 0 20px 5px rgba(125, 125, 140, 0.12) inset;
    &:nth-of-type(1) {
        left: 0;
    }
    &:nth-of-type(2) {
        right: 0;
    }   
    &:active, &:focus {
        outline: 0;
    }
    ${({left, right}) => (left || right ) && `
        position: absolute;
        background-size: 100% 100%;
        background-repeat: no-repeat; 
        cursor: pointer;  
    `}
    ${({right}) => right && `
        right: 0;
        background-position: center center;
        background-image: url(${righticon});
        box-shadow: -10px 0 20px 5px rgba(125, 125, 140, 0.42) inset;
        
        `}
    ${({left}) => left && `
        left: 0;
        background-position: center center;
        background-image: url(${lefticon});
        box-shadow: 10px 0 20px 5px rgba(125, 125, 140, 0.42) inset;
    `}

`

class Entry extends React.Component {

    render() {

        const {selectOne, id, selected, timeAdded, contents, tagged, tag, contentShowed, flipCard} = this.props
        const card = <CardType>
                        <b>{contents[contentShowed].type}: </b>
                        <br/>
                        {contents[contentShowed].text}
                        <FlipButton left={contentShowed !== 0} onClick={contentShowed !== 0 ? () => flipCard(id, -1) : null}></FlipButton>
                        <FlipButton right={contentShowed !== contents.length - 1} onClick={contentShowed !== contents.length - 1 ? () => flipCard(id, 1) : null}></FlipButton>
                     </CardType>
        const date = new Date(timeAdded)

        return (  
            <StyledEntry selected={selected}>
                <StyledParagraph>
                    {card}
                </StyledParagraph>
                <StyleAddedAt>
                    Added: {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`} 
                    <br/>   
                    <span> <b>Category:</b> {tagged}</span>
                    <SelectButton selected={selected} onClick={() => selectOne(selected, id, tag)}> </SelectButton>
                </StyleAddedAt> 
            </StyledEntry>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    selectOne: (selected, id, inTag) => dispatch(selectOneAction(selected, id, inTag)),
    flipCard: (whichOne, direction) => dispatch(flipCardAction(whichOne, direction))
})


Entry.propTypes = {
    selectOne: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    timeAdded: PropTypes.string.isRequired,
    contents: PropTypes.array.isRequired,
    tagged: PropTypes.string.isRequired,
    contentShowed: PropTypes.number.isRequired,
    flipCard: PropTypes.func.isRequired
}

FlipButton.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    onClick: PropTypes.func
}

StyledEntry.propTypes = {
    selected: PropTypes.bool
}

SelectButton.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Entry)