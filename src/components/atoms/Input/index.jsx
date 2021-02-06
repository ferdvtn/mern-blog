import React from 'react'
import './input.scss'

const Input = ({ label, placeholder, ...rest}) => {
    return (
        <div className='input-wrapper'>
            <label>{ label }</label>
            <input placeholder={ placeholder } { ...rest } />
        </div>
    )
}

export default Input
