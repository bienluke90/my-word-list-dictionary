/* eslint-disable default-case */
const defaultEntries = [
    {
        id: 0,
        tags: ["english-polish"],
        contents: [
            {
                type: "polish",
                text: "To jest kiełbasa i ogórki"
            },
            {
                type: "english",
                text: "This is sausage and cucumbers"
            },        
        ],
        timeAdded: new Date(2020, 1, 6, 5, 24, 18),
        selected: false,
        expanded: false
    },
    {
        id: 1,
        tags: ["english-polish", "learning"],
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
        tags: ["english-polish-german", "learning"],
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
        tags: ["english-polish-german"],
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
        tags: ["english-polish-german"],
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
        timeAdded: new Date(2020, 1, 6, 6, 32, 18),
        selected: false,
        expanded: false
    }
]

const initState = {
    tags: [],
    everEntry: defaultEntries.length,
    entries: [
        ...defaultEntries
    ],
    selectedTags: []
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [...state.entries, action.payload.entry],
                everEntry: state.everEntry + 1
            }
        case 'REMOVE_ENTRY':
            return {
                ...state,
                entries: [...state.entries].filter(e => e.id !== action.payload.id)
            }
        case 'SELECT_ONE':
            const theOne = action.payload.theOne
            const id = theOne.id
            theOne.selected = !theOne.selected
            return {
                ...state,
                entries: [theOne, ...state.entries.filter(e => e.id !== theOne.id)].sort((a, b) => a.id > b.id)
            }
        default:
            return state
    }
}

export default mainReducer