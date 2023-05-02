import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Comment.css';

const CommentSection = ({ resourceId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comment?resourceId=${resourceId}`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
        setErrorMsg("Impossible d'afficher les commentaires");
      }
    };
    fetchComments();
  }, [resourceId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.length < 10 || newComment.length > 10000) {
      setErrorMsg('Le commentaire doit faire entre  10 et  10000 caractères ');
      return;
    }
    const commentData = { content: newComment, resourceId };
    try {
      const response = await axios.post('/api/comment', commentData);
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error(error);
      setErrorMsg('Ajout de commentarie échoué ');
    }
  };

  return (
    <div>
      <h3>Commentaires </h3>
      {errorMsg && <p className='text-danger'>{errorMsg}</p>}
      {comments.length === 0 && <p>Aucun commentaires</p>}
      {comments.length > 0 && (
        <ul className='list-group'>
          {comments.map(comment => (
            <li className='list-group-item' key={comment.id}>
              {comment.user.username} - {new Date(comment.date).toLocaleString()}<br />
              {comment.content}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleCommentSubmit}>
        <div className='form-group'>
          <textarea
            id='new-comment'
            className='form-control'
            rows='4'
            value={newComment}
            placeholder="Ajouter  un commentaire"
            onChange={e => setNewComment(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>Ajouter</button>
      </form>
    </div>
  );
};

export default CommentSection;
