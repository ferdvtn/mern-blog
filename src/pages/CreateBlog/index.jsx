import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Gap, Input, Textarea, Upload } from '../../components'
import { postToAPI, setForm, setImagePreview } from '../../config/redux/action'
import './createblog.scss'

const CreateBlog = () => {
    const {form, imageToPreview} = useSelector(state => state.createBlogReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const imageHandler = (e) => {
        const objImg = e.target.files[0];
        dispatch(setForm('image', objImg));
        dispatch(setImagePreview(URL.createObjectURL(objImg)));
    }
    const onSubmit = () => {
        postToAPI(form);
    }

    return (
        <div className='createblog-wrapper'>
            <div className="action-button">
                <Button value='+ Simpan' onClick={onSubmit} />
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

export default CreateBlog
