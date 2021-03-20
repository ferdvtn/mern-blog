import axios from "axios"

export const setDataBlog = (page) => (dispatch) => {
    axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perpage=2`)
    .then(res => {
        const result = res.data
        dispatch({type: 'UPDATE_DATA_BLOG', payload:result.data})
        dispatch({
            type: 'UPDATE_PAGINATION',
            payload: {
                currentPage: result.page,
                totalPage: Math.ceil(result.total / result.perpage),
            }
        })
    })
    .catch( err => {
        console.log('rows ', err);
    })
}

export const setNickname = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'UPDATE_NAMA', payload: 'Ferdian'});
    }, 3000);
}