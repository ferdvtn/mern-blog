import React from 'react'
import './link.scss'

const Link = ({ value, onClick}) => {
    return (
        <div className='link-wrapper'>
            <p onClick={ onClick } >{ value }</p>
        </div>
    )
}

export default Link
