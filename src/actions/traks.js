var mockApiData = [
    {
        'id': 1,
        'name': 'Enter Sanman 1'
    },
    {
        'id': 2,
        'name': 'Enter Sanman 2'
    },
    {
        'id': 3,
        'name': 'Enter Sanman 3'
    },
    {
        'id': 4,
        'name': 'Enter Sanman 4'
    }
]

export const getTraks = () => dispatch => {
    setTimeout(() => {
    console.log('I got traks')
    dispatch({type: 'FETCH_TRAKS_SUCCESS', payload: mockApiData})
    }, 2000)
}