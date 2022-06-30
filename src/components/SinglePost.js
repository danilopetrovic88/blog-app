import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AddComment from '../pages/AddComment'
import PostService from '../service/PostService'
import useFormatedDate from '../hooks/useFormatedDate'
import format from 'date-fns/format'

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

        const fetchComments = async () => {
          const { id: _, ...restData } = await PostService.get(id);

          setComments([...restData.comments]);
        };

        if (id) {
          fetchPost();
        }

        if (comments) {
          fetchComments();
        }
      }, [id, comments]);

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
             { comments.map((comment) => (
              <li key={comment.id} className="list-group-item">{comment.text}</li>
             )) }
           </ul>
           <Link to={`/edit/${id}`} className='btn btn-warning'>Edit Post</Link>
        </div>
        <div className='card-footer'>
            {/* Created at: { useFormatedDate(singlePost.createdAt.split('T'), 'YYYY-MM-DD HH:mm:ss') } */}
        </div>
    </div>
    <AddComment id={id} />
    </div>
  )
}

export default SinglePost