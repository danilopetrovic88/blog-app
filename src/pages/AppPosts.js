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

      const removePost = async (postId) => {
    
        const data = await PostService.delete(postId);
    
        if (data.count > 0) {
          setPosts(posts.filter((post) => post.id !== postId));
        }
      };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                { posts.map((post) => (
                    <div key={post.id} className='card'>
                        <div className='card-header'>
                            {post.title}
                        </div>
                        <div className='card-footer'>
                            <Link to={`/posts/${post.id}`} className='btn btn-primary btn-sm'>View post</Link>
                        </div>
                        <div className='card-footer'>
                            <button onClick={() => removePost(post.id)} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default AppPosts