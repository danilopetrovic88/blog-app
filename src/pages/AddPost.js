import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PostService from '../service/PostService';

const AddPost = () => {

    const [newPost, setNewPost] = useState({
        title: '',
        text: ''
    })

    const {id} = useParams();

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(id) {
            await PostService.edit(id, newPost)
        } else {
            await PostService.add(newPost)
        }

        

        history.push('/posts')
    }

    // const resetForm = () => {
    //     setNewPost({
    //         title: '',
    //         text: ''
    //     })
    // }

    useEffect(() => {
        const fetchPost = async () => {
          const { id: _, ...restData } = await PostService.get(id);
    
          setNewPost({ ...restData });
        };
    
        if (id) {
          fetchPost();
        }
      }, [id]);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                <h1 className='m-4'>Add New Post</h1>
               <form onSubmit={handleSubmit}>
                   <input value={newPost.title} required min='2' onChange={({ target }) => setNewPost({...newPost, title: target.value})} type='text' placeholder='title' className='form-control' name='title' /><br />
                   <input value={newPost.text} max='300' onChange={({ target }) => setNewPost({...newPost, text: target.value})} type='text' placeholder='text' className='form-control' name='text' /><br />
                   <button type='submit' className='btn btn-success'>Add</button>
                   <button type='reset' className='btn btn-warning'>Reset</button>
               </form>
            </div>
        </div>
    </div>
  )
}

export default AddPost