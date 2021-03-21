import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { Gap, Link } from '../../components'
import { getDetail } from '../../config/redux/action/getDetailBlogAction'
import './detailblog.scss'

const DetailBlog = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();

    const _id = props.match.params.id;
    useEffect(() => {
        dispatch(getDetail(_id))
    }, [dispatch, _id])
    const {data} = useSelector(state => state.getDetailBlogReducer)
    const {author, title, body, image, createdAt} = data; 
    if (author) {
        return (
            <div className='detailblog-wrapper'>
                <img src={`http://localhost:4000/${image}`} alt='img-cover' className="img-cover"/>
                <Gap height={20} />
                <p className='title'>{title}</p>
                <Gap height={2} />
                <p className='meta'>{author.name}, {createdAt}</p>
                <Gap height={20} />
                <p className='content'>{body}</p>
                <Gap height={30} />
                <Link value='Kembali' onClick={ () => history.push('/') } />
            </div>
        )
    } else {
        return (
            <div className='detailblog-wrapper'>
                <h1>Loading ...</h1>
            </div>
        )
        
    }
}

export default withRouter(DetailBlog)
