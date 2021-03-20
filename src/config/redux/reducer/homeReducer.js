const initHomeState = {
    dataBlog : [],
    pagination : {
        currentPage : 1,
        totalPage : 1,
    }
}

const homeReducer = (state = initHomeState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA_BLOG':
            state = {
                ...state,
                dataBlog: action.payload
            }
            break;

        case 'UPDATE_PAGINATION':
            state = {
                ...state,
                pagination: action.payload
            }
            break;

        default:
            break;
    }

    return state;
}

export default homeReducer;