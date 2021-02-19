import React from 'react';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss'

const Home = () => {
    const history = useHistory()
    return (
        <div className='home-wrapper'>
            <div className="btn-create">
                <Button value='+ Create' onClick={ () => history.push('/create-blog') } />
            </div>
            <Gap height={15} />
            <div className="post-wrapper">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <Gap height={30} />
            <div className="pagination-wrapper">
                <Button value='previous' />
                <Gap width={30} />
                <Button value='next' />
            </div>
        </div>
    )
}

export default Home