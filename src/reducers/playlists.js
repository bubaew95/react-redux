const initialState = [
    'my Home Playlist',
    'My Work PlayList'
]


export default function playList(state = initialState, action) {
    if(action.type == 'ADD_PLAYLIST') {
        return [...state, action.payload]
    } else if(action.type == 'DELETE_PLAYLIST') {
        return [...state, action.payload]
    }
    return state
}