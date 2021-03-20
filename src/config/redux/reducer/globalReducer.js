const initGlobalState = {
    nickname : 'Fer'
}

const globalReducer = (state = initGlobalState, action) => {
    switch (action.type) {
        case 'UPDATE_NAMA':
            state = {
                ...state,
                nickname: action.payload
            }
            break;
    
        default:
            break;
    }

    return state;
}

export default globalReducer;