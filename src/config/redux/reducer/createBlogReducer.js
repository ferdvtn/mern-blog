const initState = {
    form: {
        title: '',
        body: '',
        image: ''
    },
    imageToPreview: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FORM':
            state = {
                ...state,
                form: {
                    ...state.form,
                    [action.formType]: action.formValue
                }
            }
            break;

        case 'SET_IMAGE_TO_PREVIEW':
            state = {
                ...state,
                imageToPreview: action.payload
            }
            break;
    
        default:
            break;
    }
    
    return state;
}

export default reducer;