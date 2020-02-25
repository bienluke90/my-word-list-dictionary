import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../styles/mainTheme.js'
import cancelicon from '../assets/cancelicon.svg'
import dropdownicon from '../assets/dropdownicon.svg'
import {connect} from 'react-redux'
import {openAddNewModal as openAddNewModalAction} from '../actions'
import {addNewEntry as addNewEntryAction} from '../actions'


const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999999999;
    background-color: rgba(50,80,100,0.75);
    overflow-y: scroll;
    ${({opened}) => !opened && `
        top: 0;
        left: -100%;
    `}

`
const Modal = styled.div`
    position: relative;
    background-color: ${theme.default_content_background};
    width: 95%;
    min-height: 95%;
    top: 2.5%;
    left: 2.5%;
    z-index: 9999999999;
    @media screen and (min-width: ${theme.device.sm}) {
        width: 90%;
        min-height: 300px;
        top: 5%;
        left: 5%;
    }
    @media screen and (min-width: ${theme.device.sm}) {
        width: 90%;
        min-height: 300px;
        top: 5%;
        left: 5%;
    }
    @media screen and (min-width: ${theme.device.md}) {
        width: 70%;
        min-height: 300px;
        top: 10%;
        left: 15%;
    }
    @media screen and (min-width: ${theme.device.xl}) {
        width: 50%;
        min-height: 300px;
        top: 10%;
        left: 25%;
    }
`

const Form = styled.form`
    margin: ${theme.gutterWidth};
    height: calc(100% - ${theme.gutterWidth});
    width: calc(100% - ${theme.gutterWidth});
    padding: ${theme.gutterWidth};
`

const ModalHeader = styled.h2`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${theme.gutterWidth} 30px;
    background-color: rgba(0, 0, 0, 0.15);
`

const Label = styled.label`
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;

`

const LabelTitle = styled.p`
    display: inline-block;
    color: #222 !important;
    font-weight: bold;
    text-align: left;
    letter-spacing: 1px;
    padding: 0 20px 5px 0;
    margin-left: 5px;
    margin-bottom: 0;
    width: auto;
    height: 20px;

    @media screen and (min-width: ${theme.device.sm}) {
        font-size: 12px;
    }
    @media screen and (min-width: ${theme.device.md}) {
        font-size: 13px;
    }
    @media screen and (min-width: ${theme.device.xl}) {
        font-size: 15px;
    }
`

const Input = styled.input`
    display: inline-block;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    border: 2px solid #777;
    border-radius: 4px;
    color: black;
    font-size: 1.7rem;
    transition: border 0.3s;

    &:focus {
        border: 2px solid #000;
    }

    @media screen and (min-width: ${theme.device.sm}) {
        width: 80%;
    }
    @media screen and (min-width: ${theme.device.md}) {
        width: 50%;
    }
    @media screen and (min-width: ${theme.device.sm}) {
        width: 30%;
        ${({longertext}) => longertext && `
            width: 50%;
        `}
    }
`

const LabelButton = styled.button`
    border: 2px solid #777;
    background-color: #fff;
    border-radius: 4px;
    font-weight: bold;
    display: inline-block;
    color: #666;
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.6rem;
    margin-right: 5px;
    transition: border 0.4s, color 0.4s;
    cursor: pointer;
    &:hover, &:focus, &:active {
        border: 2px solid black;
        color: #000;
    }
`

const CloseIcon = styled.div`
    display: block;
    text-indent: -3000rem;
    background-image: url(${cancelicon});
    background-repeat: no-repeat;
    background-size: 25px 25px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid black;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    margin: 0 0 0 auto;
`

const ErrorMsg = styled.span`
    display: block;
    color: red;
    font-size: 16px;
    margin-bottom: 15px;
`

const Select = styled.select`
    display: inline-block;
    width: 70%;
    height: 3rem;
    margin: 0 10px 10px 0;
    border: 2px solid #777;
    border-radius: 4px;
    color: black;
    font-size: 1.7rem;
    transition: border 0.3s;
    background-color: white;
    appearance: none;
    background-image: url(${dropdownicon});
    background-position: 98% center;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    cursor: pointer;

    &:focus {
        border: 2px solid #000;
    }

    @media screen and (min-width: ${theme.device.sm}) {
        width: 80%;
    }
    @media screen and (min-width: ${theme.device.md}) {
        width: 50%;
    }
    @media screen and (min-width: ${theme.device.sm}) {
        width: 30%;
    }
`

const Pill = styled.div`
    position: relative;
    display: inline-block;
    font-size: 14px;
    margin: 0 5px 5px 0;
    padding: 0 40px 0 10px;
    background-color: black;
    color: ${theme.default_content_background};
    border-radius: 4px;
    border: 2px solid black;
    @media screen and (min-width: ${theme.device.xl}) {
        font-size: 16px;
    }
`

const PillButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 30px;
    border: none;
    background-color: ${theme.default_content_background};
    background-image: url(${cancelicon});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12px 12px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    @media screen and (min-width: ${theme.device.md}) {
        background-size: 15px 15px;
    }

`

class AddNewModal extends React.Component {

    languages = [
        "English",
        "German",
        "Polish",
        "French",
        "Spanish",
        "Russian"
    ]

    state = {
        contents: [],
        tagBeingAdded: '',
        tagBeingAddedError: '',
        langBeingAdded: this.languages[0],
        langBeingAddedErrorDuplicate: '',
        notFilledUpError: '',
        languages: [],
        isOpened: true
    }

    errorMsgs = {
        tagToAdd: 'This field must have at least 3 letters',
        alreadyAdded: 'This language is already added',
        notFilledTranslations: 'All language fields must be filled'
    }

    handleTagInputChange = (e) => {
        this.setState({
            tagBeingAdded: e.target.value,
            tagBeingAddedError: this.state.tagBeingAdded.length < 3 ? this.state.tagBeingAddedError : ''
        })
    }

    handleTagInputBlur = () => {
        if (this.state.tagBeingAdded.length > 2) {
            this.setState({
                tagBeingAddedError: ''
            }) 
            return true       
        } else {
            this.setState({
                tagBeingAddedError: this.errorMsgs.tagToAdd
            })  
            return null
        }
    }

    handleLanguageSelectChange = (e) => {
        this.setState({
            langBeingAdded: e.target.value,
            langBeingAddedErrorDuplicate: ''
        })
    }

    handleAddLanguageButton = (e) => {
        const select = document.getElementById('add-new-lang-select'),
              strSel = select.options[select.selectedIndex].value

        e.preventDefault()
        if (this.state.languages.includes(this.state.langBeingAdded)) {
            this.setState({
                langBeingAddedErrorDuplicate: this.errorMsgs.alreadyAdded
            })
            return
        }
        
        this.setState({
            languages: [...this.state.languages, this.state.langBeingAdded],
            contents: [
                ...this.state.contents,
                {
                    type: strSel,
                    text: ''
                }
            ]      
        })
    }

    handleLangInputChange = (e, which) => {
        this.setState({
            contents: [
                ...this.state.contents.filter(c => c.type !== which),
                {
                    type: which,
                    text: e.target.value
                }
            ]
        })
    }

    handleLangRemove = (e, which) => {
        e.preventDefault()
        this.setState({
            languages: this.state.languages.filter(l => l !== which),
            contents: this.state.contents.filter(c => c.type !== which)
        })
    }

    handleAddEntryButton = (e) => {
        e.preventDefault()
        if (!this.handleTagInputBlur()) {
            return null
        }
        const filledContents = this.state.contents.filter(e => e && e.text).length === this.state.contents.length
        if (filledContents) {

            this.props.addNewEntry(this.state.contents, this.state.tagBeingAdded)
            
            this.setState({
                contents: [],
                tagBeingAdded: '',
                tagBeingAddedError: '',
                langBeingAdded: this.languages[0],
                langBeingAddedErrorDuplicate: '',
                notFilledUpError: '',
                languages: [],
                isOpened: false
            })
        }
        if (!filledContents) {
            this.setState({
                notFilledUpError: this.errorMsgs.notFilledTranslations
            })
        }
       
    }

    handleCloseModalButton = () => {
        this.setState({
            contents: [],
            tagBeingAdded: '',
            tagBeingAddedError: '',
            langBeingAdded: this.languages[0],
            langBeingAddedErrorDuplicate: '',
            notFilledUpError: '',
            languages: []
        })
        this.props.openAddNewModal()
    }

    render() {
        const {addNewModalOpened} = this.props
        const {tagBeingAdded, tagBeingAddedError, langBeingAdded, langBeingAddedErrorDuplicate,
               languages, contents, notFilledUpError} = this.state
        return (
            <ModalContainer opened={addNewModalOpened}>
                <Modal>
                    <ModalHeader>Add new entry <CloseIcon onClick={this.handleCloseModalButton}>Close</CloseIcon> </ModalHeader>
                    <Form>
                        <Label htmlFor="add-new-tag-input">
                            <LabelTitle>Category Name: </LabelTitle>
                            <br />
                            <Input autocomplete="off" 
                                   onChange={this.handleTagInputChange} 
                                   onBlur={this.handleTagInputBlur}
                                   id="add-new-tag-input"
                                   type="text"
                                   value={tagBeingAdded}
                            />
                            <br />
                            {tagBeingAddedError.length ? <ErrorMsg>{tagBeingAddedError}</ErrorMsg> : null} 
                        </Label>
                        <Label htmlFor="add-new-lang-select">
                            <LabelTitle>Select languages: </LabelTitle>
                            <br />
                            <Select onChange={this.handleLanguageSelectChange} 
                                    value={langBeingAdded}
                                    id="add-new-lang-select"
                            >
                                {this.languages.map((l, i) => <option key={i} value={l}>{l}</option>)}
                            </Select>
                            <LabelButton onClick={this.handleAddLanguageButton}>Add</LabelButton>
                            <br/>
                            {langBeingAddedErrorDuplicate.length ? <ErrorMsg>{langBeingAddedErrorDuplicate}</ErrorMsg> : null}
                            {languages.map((l, i) => 
                                <Pill key={i}>
                                    {l}
                                    <PillButton onClick={(e) => this.handleLangRemove(e, l)}> </PillButton>
                                </Pill>
                            )}
                        </Label>
                        {
                            languages.map((l, i) =>
                                <Label key={i} htmlFor={`add-new-lang-${l}`}>
                                    <LabelTitle>Word(s) in: {l} {i === 0 ? '(Primary)' : null}</LabelTitle>
                                    <br />
                                    <Input autocomplete="off"
                                        onChange={(e) => this.handleLangInputChange(e, l)} 
                                        id={`add-new-lang-${l}`}
                                        type="text"
                                        value={contents.filter(c => c.type === l)[0] ? contents.filter(c => c.type === l)[0].text : ''}
                                        longertext
                                    />
                                    <br />                
                                </Label>
                        )}
                        {
                            languages.length >= 2 ? 
                                <LabelButton onClick={this.handleAddEntryButton}>Add</LabelButton> : null
                        }
                        { 
                            notFilledUpError.length ? <ErrorMsg>{notFilledUpError}</ErrorMsg> : null 
                        }    
                    </Form>
                </Modal>
            </ModalContainer>     
        )
    }
}

const mapStateToProps = state => {
    const {addNewModalOpened} = state
    return {addNewModalOpened}
}

const mapDispatchToProps = dispatch => ({
    openAddNewModal: () => dispatch(openAddNewModalAction()),
    addNewEntry: (contents, tag) => dispatch(addNewEntryAction(contents, tag))
})

ModalContainer.propTypes = {
    opened: PropTypes.bool
}

Input.propTypes = {
    longertext: PropTypes.bool
}

AddNewModal.propTypes = {
    addNewModalOpened: PropTypes.bool.isRequired
}

LabelButton.propTypes = {
    onClick: PropTypes.func.isRequired
}



export default connect(mapStateToProps, mapDispatchToProps)(AddNewModal)