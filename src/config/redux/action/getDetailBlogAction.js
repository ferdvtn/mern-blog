import axios from "axios";

export const getDetail = (_id) => (dispatch) => {
    axios.get(`http://localhost:4000/v1/blog/post/${_id}`)
    .then((res) => {
        dispatch({type: 'SET_DATA_DETAIL', payload: res.data.data})
    })
    .catch((err) => {
        console.log(err);
    })
}