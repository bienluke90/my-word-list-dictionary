/* eslint-disable default-case */
const defaultEntries = [
    {
        id: 0,
        tagged: "english-polish",
        contents: [
            {
                type: "polish",
                text: "To jest kiełbasa i ogórki. Musztarda i majonez."
            },
            {
                type: "english",
                text: "This is sausage and cucumbers. Mustard and mayonaisse."
            },        
        ],
        timeAdded: new Date(2020, 1, 6, 5, 24, 18),
        selected: false,
        expanded: false
    },
    {
        id: 1,
        tagged: "english-polish",
        contents: [
            {
                type: "polish",
                text: "Jesteś Bogiem"
            },
            {
                type: "english",
                text: "You are god"
            },        
        ],
        timeAdded: new Date(2020, 1, 6, 5, 34, 18),
        selected: false,
        expanded: false
    },
    {
        id: 2,
        tagged: "english-polish-german",
        contents: [
            {
                type: "polish",
                text: "Jestem dobry"
            },
            {
                type: "english",
                text: "You are good"
            }, 
            {
                type: "german",
                text: "Ich bin gut"
            }       
        ],
        timeAdded: new Date(2020, 1, 6, 5, 42, 18),
        selected: false,
        expanded: false
    },
    {
        id: 3,
        tagged: "english-polish-german",
        contents: [
            {
                type: "polish",
                text: "Kocham słodycze"
            },
            {
                type: "english",
                text: "I love sweets"
            }, 
            {
                type: "german",
                text: "Ich liebe zucker"
            }       
        ],
        timeAdded: new Date(2020, 1, 6, 6, 32, 18),
        selected: false,
        expanded: false
    },
    {
        id: 4,
        tagged: "english-polish-german",
        contents: [
            {
                type: "polish",
                text: "Kocham cię"
            },
            {
                type: "english",
                text: "I love you"
            }, 
            {
                type: "german",
                text: "Ich liebe dich"
            }       
        ],
        timeAdded: new Date(2020, 1, 23, 6, 32, 18),
        selected: false,
        expanded: false
    },
    {
        id: 5,
        tagged: "english-polish-german",
        contents: [
            {
                type: "polish",
                text: "Ja jestem"
            },
            {
                type: "english",
                text: "I'm"
            }, 
            {
                type: "german",
                text: "Ich bin"
            }       
        ],
        timeAdded: new Date(2020, 1, 16, 6, 32, 18),
        selected: false,
        expanded: false
    },
    {
        id: 6,
        tagged: "english-polish-german",
        contents: [
            {
                type: "polish",
                text: "On"
            },
            {
                type: "english",
                text: "He"
            }, 
            {
                type: "german",
                text: "Er"
            }       
        ],
        timeAdded: new Date(2020, 1, 8, 6, 32, 18),
        selected: false,
        expanded: false
    },
    {
        id: 7,
        tagged: "english-polish",
        contents: [
            {
                type: "polish",
                text: "Dobra zupa"
            },
            {
                type: "english",
                text: "Good soup"
            },        
        ],
        timeAdded: new Date(2020, 2, 6, 5, 34, 18),
        selected: false,
        expanded: false
    },
]

const initState = {
    tags: ["english-polish", "english-polish-german"],
    everEntry: defaultEntries.length,
    entries: [
        ...defaultEntries
    ],
    showTagEntries: [],
    addNewModalOpened: false,
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SHOW_ALL':
            let changedEntries3 = []
            if (state.entries.length > 0) {
                changedEntries3 = state.entries.map(e => { 
                    e.selected = false
                    return e
                })
            }
            return {
                ...state,
                showTagEntries: [],
                entries: changedEntries3 ? changedEntries3.sort((a, b) => a.id < b.id) : state.entries.sort((a, b) => a.id < b.id)
            }
        case 'SHOW_TAG':
            let unselectedEntries = [];

            // Deselect if some tags are selected
            if (state.showTagEntries.length === 0) {
                unselectedEntries = state.entries.map(e => { 
                    e.selected = false
                    return e
                })
            } else {
                unselectedEntries = state.entries
            }

            // If tag is NOT DISPLAYED
            if (! state.showTagEntries.filter(e => e.tag === action.payload.tag).length) {
                const entriesToShow = unselectedEntries.filter(e => e.tagged === action.payload.tag)
                return {
                    ...state,
                    showTagEntries: [
                        ...state.showTagEntries,
                        {
                            tag: action.payload.tag,
                            entries: entriesToShow
                        }
                    ]
                }
            // If tag is already being DISPLAYED
            } else {
                const notWithTag = state.showTagEntries.map(f => {
                    const a = f.entries.map(e => {
                        if (f.tag === action.payload.tag) {
                            e.selected = false
                        }
                        return e
                    })
                    const b = f.tag
                    return {
                        entries: a,
                        tag: b
                    }
                }).filter(e => e.tag !== action.payload.tag)
                
                return {
                    ...state,
                    showTagEntries: [
                        ...notWithTag
                    ],
                    entries: notWithTag === 0 ? unselectedEntries : state.entries
                }
            }

        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [...state.entries, action.payload.entry],
                everEntry: state.everEntry + 1
            }
        case 'REMOVE_SELECTED':
            let withRemoved = [], withRemoved2 = [], removeTags = []
            
            if(state.showTagEntries.length) {
                withRemoved = state.showTagEntries.map(t => {
                    let returnedTag = t.tag
                    let returnedEntries = t.entries.map(e => {
                        if (e.selected) {
                            return undefined
                        }
                        return e
                    }).filter(e => e !== undefined)

                    if(returnedEntries.length) {
                        return {
                            tag: returnedTag,
                            entries: returnedEntries
                        }
                    } else {
                        removeTags = returnedTag
                        return undefined
                    }
                }).filter(e => e !== undefined)
            }

            if(state.entries.length) {
                withRemoved2 = state.entries.filter(e => !e.selected)
            }

            return {
                ...state,
                tags: state.tags.filter(t => removeTags !== t),
                showTagEntries: withRemoved,
                entries: withRemoved2
            }

        case 'REMOVE_ALL':
            return {
                ...state,
                entries: [],
                selectedEntries: 0,
                showTagEntries: []
            }
        case 'EXPAND_ONE': 
            const updatedExpand = state.entries.map(e => {
                if (action.payload.id === e.id) {
                    e.expanded = !action.payload.expanded
                } 
                return e
            })

            return {
                ...state,
                entries: updatedExpand
            }
        case 'EXPAND_ALL':
            const expandedAll = state.entries.map(e => {
                if(e.selected) {
                    e.expanded = true
                }
                return e
            })
            return {
                ...state,
                entries: expandedAll
            }
        case 'COLLAPSE_ALL':
            const collapseAll = state.entries.map(e => {
                if(e.selected) {
                    e.expanded = false
                }
                return e
            })
            return {
                ...state,
                entries: collapseAll
            }  
        case 'SELECT_ONE':
            let updatedSelectTag = [], updatedSelect = []
            if (state.showTagEntries.length) {
                updatedSelectTag = state.showTagEntries.map(t => {
                    t.entries.map(e => {
                        if (action.payload.id === e.id && t.tag === action.payload.tag) {
                            e.selected = !action.payload.selected
                        }
                        return e 
                    })
                    return t
                })
            } else {
                updatedSelect = state.entries.map(e => {
                    if (action.payload.id === e.id) {
                        e.selected = !action.payload.selected
                    } 
                    return e
                })
            }

            return {
                ...state,
                entries: updatedSelect.length ? updatedSelect : state.entries,
                showTagEntries: updatedSelectTag.length ? updatedSelectTag : state.showTagEntries
            }
        case 'SELECT_ALL':
            let changedTagEntries = [], changedEntries = []
            if(state.showTagEntries.length > 0) {
                changedTagEntries = state.showTagEntries.map(f => {
                    const a = f.entries.map(e => {
                        e.selected = true
                        return e
                    })
                    const b = f.tag
                    return {
                        entries: a,
                        tag: b
                    }
                })
            } else if (state.entries.length > 0) {
                changedEntries = state.entries.map(e => { 
                    e.selected = true
                    return e
                })
            }

            return {
                ...state,
                entries: changedEntries.length ? changedEntries : state.entries,
                showTagEntries: changedTagEntries.length ? changedTagEntries : [] 
            }
            
        case 'DESELECT_ALL': 
            let changedTagEntries2 = [], changedEntries2 = []
            if(state.showTagEntries.length > 0) {
                changedTagEntries2 = state.showTagEntries.map(f => {
                    const a = f.entries.map(e => {
                        e.selected = false
                        return e
                    })
                    const b = f.tag
                    return {
                        entries: a,
                        tag: b
                    }
                })
            } else if (state.entries.length > 0) {
                changedEntries2 = state.entries.map(e => { 
                    e.selected = false
                    return e
                })
            }

            return {
                ...state,
                entries: changedEntries2.length ? changedEntries2 : state.entries,
                showTagEntries: changedTagEntries2.length ? changedTagEntries2 : [] 
            }

        case 'OPEN_ADD_NEW_MODAL':
            return {
                ...state,
                addNewModalOpened: !state.addNewModalOpened
            }

        default:
            return state
    }
}

export default mainReducer