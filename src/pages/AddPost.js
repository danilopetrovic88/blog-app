import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import PostService from '../service/PostService';

const AddPost = () => {

    const [newPost, setNewPost] = useState({
        title: '',
        text: ''
    })

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await PostService.add(newPost)

        history.push('/posts')
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                <h1 className='m-4'>Add New Post</h1>
               <form onSubmit={handleSubmit}>
                   <input onChange={({ target }) => setNewPost({...newPost, title: target.value})} type='text' placeholder='title' className='form-control' name='title' /><br />
                   <input onChange={({ target }) => setNewPost({...newPost, text: target.value})} type='text' placeholder='text' className='form-control' name='text' /><br />
                   <button className='btn btn-success'>Add</button>
               </form>
            </div>
        </div>
    </div>
  )
}

export default AddPost