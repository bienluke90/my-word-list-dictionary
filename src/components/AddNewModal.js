import React from 'react'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'
import cancelicon from '../assets/cancelicon.svg'
import {connect} from 'react-redux'
import {openAddNewModal as openAddNewModalAction} from '../actions'


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
    width: 100%;
    padding: ${theme.gutterWidth};
    background-color: rgba(0, 0, 0, 0.15);
`

const Label = styled.label`
    display: inline-block;
    width: 100%;

`

const LabelTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    color: #222 !important;
    text-align: center;
    letter-spacing: 1px;
    padding: 0 20px 20px 5px;
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #333;
    width: auto;
    height: 20px;

    @media screen and (min-width: ${theme.device.sm}) {
        font-size: ${theme.font_size.xs}
    }
    @media screen and (min-width: ${theme.device.md}) {
        font-size: ${theme.font_size.sm}
    }
    @media screen and (min-width: ${theme.device.xl}) {
        font-size: ${theme.font_size.sm}
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
    margin-left: 5px;
    transition: border 0.4s, color 0.4s;
    cursor: pointer;
    &:hover {
        border: 2px solid black;
        color: #000;
    }
`

const CloseIcon = styled.div`
    display: block;
    float: right;
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
    margin: 0;
`

const ErrorMsg = styled.span`
    color: red;
    font-size: 16px;
`

class AddNewModal extends React.Component {

    state = {
        tags: [],
        contents: {

        },
        tagBeingAdded: '',
        tagBeingAddedError: '',
        isOpened: true
    }

    errorMsgs = {
        tagToAdd: 'This field must have at least 3 letters'
    }

    handleTagInputChange = (e) => {
        this.setState({
            tagBeingAdded: e.target.value
        })
    }

    handleTagButtonClick = (e) => {
        e.preventDefault()
        if (this.state.tagBeingAdded.length > 2) {
            this.setState((prevState) => ({
                tagBeingAddedError: '',
                tags: [...prevState.tags, prevState.tagBeingAdded]
            }))        
        } else {
            this.setState({
                tagBeingAddedError: this.errorMsgs.tagToAdd
            })  
        }
    }

    handleCloseModalButton = () => {
        this.setState({
            isOpened: false,
            tagBeingAdded: '',
            tags: [],
            tagBeingAddedError: ''
        })
    }

    render() {
        const {addNewModalOpened, openAddNewModal} = this.props
        return (
            <ModalContainer opened={addNewModalOpened}>
                <Modal>
                    <ModalHeader>Add new entry <CloseIcon onClick={() => openAddNewModal()}>Close</CloseIcon> </ModalHeader>
                    <Form>
                        <Label htmlFor="add-new-tag-button">
                            <LabelTitle>Add tag to entry: </LabelTitle>
                            <br />
                            <Input autocomplete="off" 
                                   onChange={this.handleTagInputChange} 
                                   id="add-new-tag-button" 
                                   type="text"
                            />
                            <LabelButton onClick={this.handleTagButtonClick}>Add</LabelButton>
                            <br />

                            {console.log()}
                            {this.state.tagBeingAddedError.length ? <ErrorMsg>{this.state.tagBeingAddedError}</ErrorMsg> : null}
                        </Label>

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
    openAddNewModal: () => dispatch(openAddNewModalAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewModal)