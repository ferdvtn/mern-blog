import React from 'react'
import './textarea.scss'

const Textarea = ({ name, placeholder }) => {
    return (
        <div className='textarea-wrapper'>
            <textarea name={ name } placeholder={ placeholder }></textarea>
        </div>
    )
}

export default Textarea
