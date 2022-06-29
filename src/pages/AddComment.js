import React, { useState } from 'react'
import PostService from '../service/PostService'

const AddComment = ({id}) => {
    const [newComment, setNewComment] = useState({
        text: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        PostService.addComment(newComment, id)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h4 className='m-2'>Add Comment</h4>
               <form onSubmit={handleSubmit}>
                   <input 
                   value={newComment.text} 
                   max='300' 
                   onChange={({ target }) => setNewComment({...newComment, text: target.value})} 
                   type='text' 
                   placeholder='text' 
                   className='form-control' 
                   name='text' 
                   /><br />
                   <button type='submit' className='btn btn-success'>Add</button>
               </form>
            </div>
        </div>
    </div>
  )
}

export default AddComment