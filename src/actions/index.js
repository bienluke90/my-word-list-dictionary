const showAll = () => {
    return {
        type: 'SHOW_ALL'
    }
}

const showTag = (tag) => {
    return {
        type: 'SHOW_TAG',
        payload: {
            tag: tag
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
                id: id,
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


const selectOne = (data, id) => {
    return {
        type: 'SELECT_ONE',
        payload: {
            selected: data,
            id: id
        }
    }
}

const selectAll = () => {
    return {
        type: 'SELECT_ALL'
    }
}

const deselectAll = () => {
    return {
        type: 'DESELECT_ALL'
    }
}

export {showAll, showTag, addEntry, removeAll, removeSelected, selectOne, selectAll, deselectAll, openAddNewModal}