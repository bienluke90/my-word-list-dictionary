/* eslint-disable default-case */
const defaultEntries = [
    {
        id: 0,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Apple"
            },
            {
                type: "german",
                text: "der Apfel"
            },     
            {
                type: "french",
                text: "la Pomme"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 0, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 1,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Watermelon"
            },
            {
                type: "german",
                text: "die Wassermelone"
            },     
            {
                type: "french",
                text: "la Pastèque"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 5, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 2,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Orange"
            },
            {
                type: "german",
                text: "die Orange"
            },     
            {
                type: "french",
                text: "l' Orange"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 10, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 3,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Strawberry"
            },
            {
                type: "german",
                text: "die Erdbeere"
            },     
            {
                type: "french",
                text: "la Fraise"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 15, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 4,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Grape"
            },
            {
                type: "german",
                text: "die Traube"
            },     
            {
                type: "french",
                text: "le Grain de raisin"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 20, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 5,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Cherry"
            },
            {
                type: "german",
                text: "die Kirsche"
            },     
            {
                type: "french",
                text: "la Cerise"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 25, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 6,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Mango"
            },
            {
                type: "german",
                text: "die Mango"
            },     
            {
                type: "french",
                text: "la Mangue"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 30, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 7,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Nectarine"
            },
            {
                type: "german",
                text: "die Nektarine"
            },     
            {
                type: "french",
                text: "la Nectarine"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 35, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 8,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Banana"
            },
            {
                type: "german",
                text: "die Banane"
            },     
            {
                type: "french",
                text: "la Banane"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 40, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 9,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Pomegranade"
            },
            {
                type: "german",
                text: "der Granatapfel"
            },     
            {
                type: "french",
                text: "la Grenade"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 45, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 10,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Raspberry"
            },
            {
                type: "german",
                text: "die Himbeere"
            },     
            {
                type: "french",
                text: "la Framboise"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 50, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 11,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Pineapple"
            },
            {
                type: "german",
                text: "die Ananas"
            },     
            {
                type: "french",
                text: "l' Ananas"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 12, 55, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 12,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Peach"
            },
            {
                type: "german",
                text: "die Pfirsich"
            },     
            {
                type: "french",
                text: "la Pêche"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 13, 0, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 13,
        tagged: "Fruits",
        contents: [
            {
                type: "english",
                text: "Blueberry"
            },
            {
                type: "german",
                text: "die Blaubeere"
            },     
            {
                type: "french",
                text: "la Myrtille"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 13, 5, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 14,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Corn"
            },
            {
                type: "german",
                text: "der Mais"
            },     
            {
                type: "french",
                text: "le Blé"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 0, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 15,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Mushroom"
            },
            {
                type: "german",
                text: "der Champignon"
            },     
            {
                type: "french",
                text: "le Champignon"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 5, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 16,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Broccoli"
            },
            {
                type: "german",
                text: "das Brokkoli"
            },     
            {
                type: "french",
                text: "le Brocoli"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 10, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 17,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Cucumber"
            },
            {
                type: "german",
                text: "die Gurke"
            },     
            {
                type: "french",
                text: "le Concombre"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 15, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 18,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Carrot"
            },
            {
                type: "german",
                text: "die Karotte"
            },     
            {
                type: "french",
                text: "la Carotte"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 20, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 19,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Tamato"
            },
            {
                type: "german",
                text: "die Tomate"
            },     
            {
                type: "french",
                text: "la Tomate"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 25, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 20,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Pumpkin"
            },
            {
                type: "german",
                text: "der Kürbis"
            },     
            {
                type: "french",
                text: "la Citrouille"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 30, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 21,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Cabbage"
            },
            {
                type: "german",
                text: "der Kohl"
            },     
            {
                type: "french",
                text: "le Chou"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 35, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 22,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Potato"
            },
            {
                type: "german",
                text: "die Kartoffel"
            },     
            {
                type: "french",
                text: "la Patate"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 40, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 23,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Onion"
            },
            {
                type: "german",
                text: "die Zwiebel"
            },     
            {
                type: "french",
                text: "l' Oignon"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 45, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 24,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Pepper"
            },
            {
                type: "german",
                text: "der Pfeffer"
            },     
            {
                type: "french",
                text: "le Poivre"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 50, 0),
        selected: false,
        contentShowed: 0
    },
    {
        id: 25,
        tagged: "Vegetables",
        contents: [
            {
                type: "english",
                text: "Beetroot"
            },
            {
                type: "german",
                text: "die rote Bete"
            },     
            {
                type: "french",
                text: "la Betterave"
            },          
        ],
        timeAdded: new Date(2020, 1, 24, 14, 55, 0),
        selected: false,
        contentShowed: 0
    },
]

const savedEntries = []

if(!localStorage.length) {
    for(let i = 0; i < defaultEntries.length; i++) {
        localStorage.setItem(defaultEntries[i].id, JSON.stringify(defaultEntries[i]))
    }
}

if(localStorage.length) {
    for(let i = 0; i < localStorage.length; i++) {
        savedEntries.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}

const savedTags = Array.from(new Set(savedEntries.map(e => e.tagged)))

const initState = {
    tags: savedTags,
    everEntry: defaultEntries.length,
    entries: savedEntries.sort((a, b) => a.id < b.id ? 1 : -1 ),
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

        case 'REMOVE_SELECTED':
            let withRemovedTag = [], withRemoved = [], remainingTags = []
            
            if(state.showTagEntries.length) {
                withRemovedTag = state.showTagEntries.map(t => {
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
                    }
                }).filter(e => e !== undefined)
            }

            if(state.entries.length) {
                withRemoved = state.entries.filter(e => {
                    if (e.selected) {
                        localStorage.removeItem(e.id)
                    }
                    return !e.selected
                })
                remainingTags = Array.from(new Set(withRemoved.map(e => e.tagged)))
            }

            return {
                ...state,
                tags: remainingTags,
                showTagEntries: withRemovedTag,
                entries: withRemoved
            }

        case 'RESET_ALL':
            const resetAll = state.entries.map(e => {
                if(e.selected) {
                    e.contentShowed = 0
                }
                return e
            })
            return {
                ...state,
                entries: resetAll
            } 
        case 'FLIP_CARD':
            const entriesWithFlipped = state.entries.map(e => {
                console.log()
                if (e.id === action.payload.whichOne) {
                    if((e.contents.length === 0 && action.payload.direction < 0) || 
                       (e.contents.length - 1 === e.contentShowed && action.payload.direction > 0)) {
                            return e
                    }     
                    e.contentShowed = e.contentShowed + action.payload.direction
                }
                return e
            })

            return {
                ...state,
                entries: entriesWithFlipped
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

        case 'ADD_NEW_ENTRY':
            const newEntry = {
                id: state.everEntry,
                tagged: action.payload.tag,
                contents: action.payload.contents,
                timeAdded: new Date().toString(),
                selected: false,
                contentShowed: 0
            }

            localStorage.setItem(state.everEntry, JSON.stringify(newEntry))
            
            return {
                ...state,
                tags: state.tags.includes(action.payload.tag) ? state.tags : [...state.tags, action.payload.tag],
                everEntry: state.everEntry + 1,
                entries: [newEntry, ...state.entries]
            }

        default:
            return state
    }
}

export default mainReducer