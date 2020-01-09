import React from 'react'
import { connect } from 'react-redux'
import Actions from './Actions.js'
import Entry from './Entry.js'
import styled from 'styled-components'

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

    render() {
        const {entries, showTagEntries} = this.props

        let entryList = []

        if (showTagEntries.length > 0) {
            entryList = showTagEntries.map((t, i) => {
                if (t.tag && t.entries.length) {
                    return (
                        <EntryWrapper key={i}>
                            <EntryHeading>Tag: <u>#{t.tag}</u></EntryHeading>
                            <br />
                            {t.entries.map((e, i) => <Entry key={i} {...e} /> )}
                            <br />
                        </EntryWrapper>
                    )
                }
            })
        } else if (entries.length) {
            entryList = entries.map((e, i) => <Entry key={i} {...e} /> )
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
    const {entries, showTagEntries} = state
    return {entries, showTagEntries}
}

export default connect(mapStateToProps)(Dashboard)