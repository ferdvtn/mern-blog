import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './home.scss'

const Home = () => {
    const {dataBlog, pagination} = useSelector(state => state.homeReducer)
    // const {nickname} = useSelector(state => state.globalReducer)
    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setDataBlog(counter))
    }, [dispatch, counter])
    const history = useHistory()

    const previous = () => {
        setCounter((counter - 1) < 1 ? pagination.totalPage : counter - 1);
    }

    const next = () => {
        setCounter((counter + 1) > pagination.totalPage ? 1 : counter + 1);
    }

    const onDeleteHandler =(_id) => {
        confirmAlert({
        title: 'Confirm to delete',
        message: 'Apakah anda yakin ingin menghapus data ini ?',
        buttons: [{
                label: 'Ya',
                onClick: () => {
                    axios.delete(`http://localhost:4000/v1/blog/post/${_id}`)
                    .then((res) => {
                        dispatch(setDataBlog(counter))
                    })
                    .catch((err) => {
                        console.log('err', err);
                    })
                }
            },
            {
                label: 'Tidak',
                onClick: () => console.log('tidak')
            }
        ]
        });
    }

    return (
        <div className='home-wrapper'>
            <div className="btn-create">
                <Button value='+ Create' onClick={ () => history.push('/create-blog') } />
            </div>
            {/* <p>{ nickname }</p> */}
            <Gap height={15} />
            <div className="post-wrapper">
                {
                    dataBlog.map(blog => {
                        return <BlogItem 
                                key={blog._id}
                                title={blog.title} 
                                body={blog.body}
                                image={blog.image}
                                date={blog.createdAt}
                                author={blog.author.name}
                                _id={blog._id}
                                onDelete={onDeleteHandler}
                            />
                    })
                }
            </div>
            <Gap height={30} />
            <div className="pagination-wrapper">
                <Button value='previous' onClick={previous} />
                <Gap width={20} />
                <p className="label-page">{pagination.currentPage} / {pagination.totalPage}</p>
                <Gap width={20} />
                <Button value='next' onClick={next} />
            </div>
        </div>
    )
}

export default Home