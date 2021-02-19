import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components/'

const Login = () => {
    const history = useHistory()
    return (
        <div className='auth-wrapper'>
            <div className="left">
                <img src={ loginBg } alt="login-bg"/>
            </div>
            <div className="right">
                <Input label='Email' placeholder='Email ...' type='email' />
                <Gap height={10} />
                <Input label='Password' placeholder='Password ...' type='password' />
                <Gap height={20} />
                <Button value='Masuk' onClick={ () => history.push('/') } />
                <Gap height={30} />
                <Link value='Belum punya akun ? Daftar disini' onClick={ () => history.push('/register') } />
            </div>
        </div>
    )
}
export default Login
