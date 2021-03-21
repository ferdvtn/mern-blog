const initState = {
    data: {}
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_DATA_DETAIL':
            state = {
                ...state,
                data: action.payload
            }
            break;
    
        default:
            break;
    }

    return state;
}

export default reducer;