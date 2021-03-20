import React from 'react'
import './textarea.scss'

const Textarea = ({ name, placeholder, ...rest }) => {
    return (
        <div className='textarea-wrapper'>
            <textarea name={ name } placeholder={ placeholder } {...rest}></textarea>
        </div>
    )
}

export default Textarea
