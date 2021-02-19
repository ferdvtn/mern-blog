import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className='blogpost-wrapper' onClick={ () => history.push('/detail-blog') }>
            <img src={ registerBg } alt="thumbnail"/>
            <div className="blogpost-desc">
                <p className="title">Titlenya</p>
                <p className="date">2021, July 12</p>
                <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis molestiae illum tempore cum, esse sed cupiditate modi. Blanditiis est voluptatum maxime eaque quia eligendi aliquam placeat corporis commodi laboriosam.
                </p>
            </div>
            blog itemsss
        </div>
    )
}

export default BlogItem
