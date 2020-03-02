import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Actions from './Actions.js'
import Entry from './Entry.js'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    padding-top: 60px;
    padding-bottom: 60px;
`

const EntryWrapper = styled.div`
    padding: 10px 20px;
`

const AllEntriesHeading = styled.h1`
    font-weight: normal;
    padding: 10px 30px;
    margin: 0 0;
    u {
        font-weight: bold;
    }
`

const EntryHeading = styled.h2`
    font-weight: normal;
    padding: 10px;
    u {
        font-weight: bold;
    }
`

class Dashboard extends React.Component {

    timer = 0

    state = {
        scrollPosition: 0
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {  
        if(this.timer) {
            return
        }
        this.timer = setTimeout(() => {
            const position = window.pageYOffset
            this.timer = 0
            this.setState({
                scrollPosition: position
            }) 
        }, 350)
    }

    render() {
        const {entries, showTagEntries} = this.props

        let entryList = []

        if (showTagEntries.length > 0) {
            entryList = showTagEntries.map((t, i) => {
                if (t.tag && t.entries.length) {
                    return (
                        <EntryWrapper key={i}>
                            <EntryHeading>Category: <u>#{t.tag}</u></EntryHeading>
                            <br />
                            {t.entries.map((e, i) => <Entry key={i} tag={t.tag} {...e} /> )}
                            <br />
                        </EntryWrapper>
                    )
                }
            })
        } else if (entries.length) {
            entryList = entries.map((e, i) => <Entry key={i} {...e} /> )
        }

        return (
            <DashboardWrapper>
                <Actions position={this.state.scrollPosition} />
                {showTagEntries.length ? null : <AllEntriesHeading>All entries from <u>all categories</u>, sorted chronologically:</AllEntriesHeading>}
                {showTagEntries.length ? entryList : <EntryWrapper>{entryList}</EntryWrapper> }
            </DashboardWrapper>
        )
        
    }
}

const mapStateToProps = state => {
    const {entries, showTagEntries} = state
    return {entries, showTagEntries}
}

Dashboard.propTypes = {
    entries: PropTypes.array.isRequired,
    showTagEntries: PropTypes.array.isRequired
}

Actions.propTypes = {
    position: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Dashboard)