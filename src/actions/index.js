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

const removeEntry = (id) => {
    return {
        type: 'REMOVE_ENTRY',
        payload: {
            id: id
        }
    }
}

const selectOne = (data) => {
    return {
        type: 'SELECT_ONE',
        payload: {
            theOne: data
        }
    }
}

export {addEntry, removeEntry, selectOne}