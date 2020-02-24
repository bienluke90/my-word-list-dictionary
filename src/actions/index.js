const showAll = () => {
    return {
        type: 'SHOW_ALL'
    }
}

const showTag = (tag) => {
    return {
        type: 'SHOW_TAG',
        payload: {
            tag
        }
    }
}

const openAddNewModal = () => {
    return {
        type: 'OPEN_ADD_NEW_MODAL'
    }
}

const addEntry = (id, entryTags, entryContents) => {
    return {
        type: 'ADD_ENTRY',
        payload: {
            entry: {
                id,
                contents: [...entryContents],
                tags: [...entryTags],
                timeAdded: new Date().toLocaleString()
            }
        }
    }
}

const removeSelected = () => {
    return {
        type: 'REMOVE_SELECTED',
    }
}

const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
}


const selectOne = (selected, id, tag) => {
    return {
        type: 'SELECT_ONE',
        payload: {
            selected,
            id,
            tag
        }
    }
}

const selectAll = () => {
    return {
        type: 'SELECT_ALL'
    }
}

const resetAll = () => {
    return {
        type: 'RESET_ALL'
    }
}

const flipCard = (whichOne, direction) => {
    return {
        type: 'FLIP_CARD',
        payload: {
            whichOne,
            direction
        }
    }
}

const deselectAll = () => {
    return {
        type: 'DESELECT_ALL'
    }
}

const addNewEntry = (contents, tag) => {
    return {
        type: 'ADD_NEW_ENTRY',
        payload: {
            contents,
            tag
        }
    }
}

export {
     showAll,
     showTag,
     addEntry,
     removeAll,
     removeSelected,
     selectOne,
     selectAll,
     deselectAll,
     openAddNewModal,
     flipCard,
     resetAll,
     addNewEntry
}