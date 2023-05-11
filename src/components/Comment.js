import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Comment.css';

const CommentSection = ({ resourceId, currentUser }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://localhost:7196/api/Comment?resourceId=2`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
        setErrorMsg('Erreur de chargement des commentaires');
      }
    };
    fetchComments();
  }, [resourceId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.length < 10 || newComment.length > 7000) {
      setErrorMsg('Le commentaire doit faire entre 10 et 7000 caractères');
      return;
    }
    if (!currentUser) {
      setErrorMsg('Veuillez vous connecter pour ajouter un commentaire');
      return;
    }
    if (!resourceId) {
      setErrorMsg('Erreur de chargement de la page');
      return;
    }
    const commentData = { content: newComment, resourceId, user: { id: currentUser.id, username: currentUser.username } };
    try {
      const response = await axios.post('https://localhost:7196/api/Comment', commentData);
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error(error);
      setErrorMsg("Echec d'ajout du commentaire");
    }
  };

  const handleCommentDelete = async (commentId) => {
    const confirmDelete = window.confirm('Confirmer la suppression?');
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`https://localhost:7196/api/Comment/${commentId}`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error(error);
      setErrorMsg('Suppression échouée');
    }
  };

  return (
    <div>
      <h3>Commentaires </h3>
      {errorMsg && <p className='text-danger'>{errorMsg}</p>}
      {comments.length === 0 && <p>Aucun commentaire</p>}
      {comments.length > 0 && (
        <ul className='list-group'>
          {comments.map((comment) => (
            <li className='list-group-item' key={comment.id}>
              {comment.user.username} - {new Date(comment.date).toLocaleString()}<br />
              {comment.content}
              {currentUser && currentUser.id === comment.user.id && (
                <button className='btn btn-danger btn-sm float-right' onClick={() => handleCommentDelete(comment.id)}>
                  Supprimer
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleCommentSubmit}>
   <div className='form-group'>
   <label htmlFor='new-comment'>Ajouter un commentaire:</label>
<textarea
  className='form-control'
  id='new-comment'
  rows='3'
  value={newComment}
  onChange={(e) => setNewComment(e.target.value)}
></textarea>
</div>
<button type='submit' className='btn btn-primary'>
Ajouter
</button>
</form>
</div>
);
};

export default CommentSection;
