import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AddComment from '../pages/AddComment'
import PostService from '../service/PostService'

const SinglePost = () => {
    const {id} = useParams()
    const [singlePost, setSinglePost] = useState({
      title: '',
      text: ''
    })

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
          const { id: _, ...restData } = await PostService.get(id);

          setSinglePost({...restData});
        };
    
        if (id) {
          fetchPost();
        }
      }, [id]);

      console.log(PostService.getComments(id))

  return (
    <div>
      <div className='card'>
        <div className='card-header'>
            <p className='p-2'>Post title: </p>
            {singlePost.title}
        </div>
        <div className='card-body'>
          <p className='p-2'>Post content: </p>
            {singlePost.text}
           <ul className='list-group'>Comments: 
             {/* {comments.map((comment, index) => (
               <li key={index} className='list-group-item'>{comment.text}</li>
             ))} */}
           </ul>

        </div>
        <div className='card-footer'>
            <Link to={`/edit/${id}`} className='btn btn-warning'>Edit</Link>
        </div>
    </div>
    <AddComment id={id} />
    </div>
  )
}

export default SinglePost