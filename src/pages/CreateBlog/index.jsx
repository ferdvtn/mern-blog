import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../assets'
import { Button, Gap, Input, Textarea, Upload } from '../../components'
import './createblog.scss'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className='createblog-wrapper'>
            <div className="action-button">
                <Button value='+ Simpan' />
                <Gap width={25} />
                <Button value='Kembali' onClick={ () => history.push('/') } />
            </div>
            <Input label='Title' placeholder='Title ...' />
            <Gap height={12} />
            <Upload />
            <Gap height={12} />
            <img src={ registerBg } alt='img-upload' />
            <Gap height={12} />
            <Textarea name='content' placeholder='Body Content ...' />

        </div>
    )
}

export default CreateBlog
