import React from 'react'
import { useHistory } from 'react-router-dom'
import './blogitem.scss'

const BlogItem = (props) => {
    const {title, body, image, date, author, _id, onDelete} = props
    const history = useHistory()
    return (
        <div className='blogpost-wrapper' onClick={ () => history.push(`/detail-blog/${_id}`) }>
            <img src={`http://localhost:4000/${image}`} alt="thumbnail"/>
            <div className="blogpost-desc">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="action-wrapper">
                        <p className="edit" onClick={(e) => {
                            e.stopPropagation();
                            history.push(`/create-blog/${_id}`)} 
                        } >Edit</p>
                        <p className="delete" onClick={(e) => {
                            e.stopPropagation();
                            onDelete(_id)}
                        }
                         >Delete</p>
                    </div>
                </div>
                <p className="date">{date} - {author}</p>
                <p className="content">
                    {body}
                </p>
            </div>
        </div>
    )
}

export default BlogItem
