import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../service/PostService'

const SinglePost = () => {
    const {id} = useParams()

    const singlePost = PostService.get(id);

  return (
    <div className='card'>
        <div className='card-header'>
            {singlePost.title}
        </div>
        <div className='card-body'>
            {singlePost.text}
        </div>
    </div>
  )
}

export default SinglePost