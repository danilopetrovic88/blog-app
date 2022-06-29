import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PostService from '../service/PostService';

const AppPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const data = await PostService.getAll();
    
          setPosts(data);
        };
        fetchPosts();
      }, []);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                { posts.map((post) => (
                    <div className='card'>
                        <div className='card-header'>
                            {post.title}
                        </div>
                        <div className='card-footer'>
                            <Link to={`/posts/${post.id}`} className='btn btn-primary btn-sm'>View post</Link>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default AppPosts