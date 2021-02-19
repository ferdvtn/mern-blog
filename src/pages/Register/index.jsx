import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components/'
import './register.scss'

const Register = () => {
    const history = useHistory()
    return (
        <div className='auth-wrapper'>
            <div className="left">
                <img src={ registerBg } alt="register-bg"/>
            </div>
            <div className="right">
                <Input label='Full Name' placeholder='Full Name ...' />
                <Gap height={10} />
                <Input label='Email' placeholder='Email ...' type='email' />
                <Gap height={10} />
                <Input label='Password' placeholder='Password ...' type='password' />
                <Gap height={20} />
                <Button value='Daftar' onClick={ () => history.push('/') } />
                <Gap height={30} />
                <Link value='Kembali ke halaman login' onClick={ () => history.push('/login') } />
            </div>
        </div>
    )
}

export default Register
