
const initialState = [{
    'id': 123,
    'name': 'My suoer track'
}]

export default function playList(state = initialState, action) {
    if(action.type == 'ADD_TRACK') {
        return [...state, action.payload]
    } else if(action.type == 'FETCH_TRAKS_SUCCESS') {
        return  action.payload
    }
    return state
}