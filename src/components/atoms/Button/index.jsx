import React from 'react'
import './button.scss'

const Button = ({ value, ...rest }) => {
    return <button className='button-wrapper' {...rest} >{ value }</button>
}

export default Button
