import axios from "axios"

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM', formType, formValue}
}

export const setImagePreview = (img) => {
    return {type: 'SET_IMAGE_TO_PREVIEW', payload: img}
}

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);

    axios.post('http://localhost:4000/v1/blog/post', data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    .then((res) => {
        console.log('res : ', res);
    })
    .catch((err) => {
        console.log('err : ', err);
    })
}

export const putToAPI = (form, _id) => {
    const data = new FormData();
    data.append('title', form.title)
    data.append('body', form.body)
    data.append('image', form.image)

    axios.put(`http://localhost:4000/v1/blog/post/${_id}`, data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    .then((res) => {
        console.log('res : ', res);
    })
    .catch((err) => {
        console.log('err : ', err);
    })
}