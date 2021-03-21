import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Gap, Input, Textarea, Upload } from '../../components'
import { getDetail, postToAPI, putToAPI, setForm, setImagePreview } from '../../config/redux/action'
import './createblog.scss'

const CreateBlog = (props) => {
    const {form, imageToPreview} = useSelector(state => state.createBlogReducer);
    const [isUpdate, setIsUpdate] = useState(false);
    const _id = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        if (_id) {
            setIsUpdate(true)
            // dispatch(getDetail(_id))
            axios.get(`http://localhost:4000/v1/blog/post/${_id}`)
            .then((res) => {
                const _detail = res.data.data;
                dispatch(setForm('title', _detail.title))
                dispatch(setForm('body', _detail.body))
                dispatch(setImagePreview(`http://localhost:4000/${_detail.image}`))
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [_id, dispatch])

    const history = useHistory();
    const imageHandler = (e) => {
        const objImg = e.target.files[0];
        dispatch(setForm('image', objImg));
        dispatch(setImagePreview(URL.createObjectURL(objImg)));
    }
    const onSubmit = () => {
        if (isUpdate) {
            putToAPI(form, _id)
        } else {
            postToAPI(form);
        }
    }

    return (
        <div className='createblog-wrapper'>
            <div className="action-button">
                <Button value={isUpdate ? '+ Update' : '+ Simpan'} onClick={onSubmit} />
                <Gap width={25} />
                <Button value='Kembali' onClick={ () => history.push('/') } />
            </div>
            <Input label='Title' placeholder='Title ...' value={form.title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Gap height={12} />
            <Upload onChange={(e) => imageHandler(e)} img={imageToPreview} />
            <Gap height={12} />
            <Textarea name='content' placeholder='Body Content ...' value={form.body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
        </div>
    )
}

export default withRouter(CreateBlog)
