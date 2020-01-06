import React from 'react'
import { connect } from 'react-redux'
import Actions from './Actions.js'
import Entry from './Entry.js'
import TagTitle from './TagTitle.js'
import styled from 'styled-components'
import theme from '../styles/mainTheme.js'

const EntryWrapper = styled.div`
    padding: 10px;
`

const EntryHeading = styled.h2`
    font-weight: normal;
    padding: 10px 20px;
    u {
        font-weight: bold;
    }
`

class Dashboard extends React.Component {

    state = {
        showTags: [...this.props.selectedTags, "english-polish", "german-english", "learning", "blabla", "english-german", "english-polish-german"]
    }
    
    render() {
        const {entries} = this.props,
              {showTags} = this.state

        let entryList = []

        entryList = !showTags.length && entries.map((e, i) => <Entry key={i} id={e.id} /> )
        
        if (showTags.length > 0) {
            let entryListTemp = {}
            for(let i of showTags) {
                entryListTemp[i] = [...entries.filter(e => {
                    return e.tags.includes(i)
                })]
            }

            entryList = showTags.map((t, i) => {
                if (entryListTemp[t].length) {
                    return (
                        <EntryWrapper key={i}>
                            <EntryHeading>Tag: <u>#{t}</u></EntryHeading>
                            <br />
                            {entryListTemp[t].map((e, i) => <Entry key={i} id={e.id} /> )}
                            <br />
                        </EntryWrapper>
                    )
                }
            })
        }

        return (
            <>
                <Actions />
                <EntryHeading>
                    All entries from: <u>All tags</u>
                </EntryHeading>
                <EntryWrapper>
                    {entryList}
                </EntryWrapper>
            </>
        )
        
    }
}

const mapStateToProps = state => {
    const {entries, selectedTags} = state
    return {entries, selectedTags}
}

export default connect(mapStateToProps)(Dashboard)