import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from '../../atoms'
import './header.scss'


const Header = () => {
    const history = useHistory()
    return (
        <div className='header-wrapper'>
            <p className="header-title">MERN Blog Apps</p>
            <div className="header-links">
                <Link value='Logout' onClick={ () => history.push('/login') } />
            </div>
        </div>
    )
}

export default Header
