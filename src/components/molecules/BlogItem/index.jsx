import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = (props) => {
    const {title, body, image, date, author} = props
    const history = useHistory()
    return (
        <div className='blogpost-wrapper' onClick={ () => history.push('/detail-blog') }>
            <img src={`http://localhost:4000/${image}`} alt="thumbnail"/>
            <div className="blogpost-desc">
                <p className="title">{title}</p>
                <p className="date">{date} - {author}</p>
                <p className="content">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default BlogItem
