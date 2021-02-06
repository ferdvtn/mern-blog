import React from 'react'
import './button.scss'

const Button = ({ value }) => {
    return (
        <div className='button-wrapper'>
            <button>{ value }</button>
        </div>
    )
}

export default Button
