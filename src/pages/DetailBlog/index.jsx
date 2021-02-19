import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailblog.scss'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className='detailblog-wrapper'>
            <img src={ registerBg } alt='img-cover' className="img-cover"/>
            <Gap height={20} />
            <p className='title'>Title</p>
            <Gap height={2} />
            <p className='meta'>Author. 2021, July 12</p>
            <Gap height={20} />
            <p className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit provident iusto, laudantium laboriosam quisquam vitae, ratione dignissimos molestiae ipsam ab culpa ipsa ipsum aliquid harum nobis cum sit, veritatis rem?</p>
            <Gap height={30} />
            <Link value='Kembali' onClick={ () => history.push('/') } />
        </div>
    )
}

export default DetailBlog
