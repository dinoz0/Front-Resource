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
        const response = await axios.get(`https://localhost:7196/swagger/comment?resourceId=${resourceId}`);
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
      setErrorMsg('Le commentaire doit faire  entre 10 et 7000 caractères ');
      return;
    }
    const commentData = { content: newComment, resourceId };
    try {
      const response = await axios.post('/api/comment', commentData);
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error(error);
      setErrorMsg("Echec d'ajout du commentaire");
    }
  };

  const handleCommentDelete = async (commentId) => {
    const confirmDelete = window.confirm('Confirmer la suppresion?');
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`/api/comment/${commentId}`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error(error);
      setErrorMsg('Suppression échoué');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      {errorMsg && <p className='text-danger'>{errorMsg}</p>}
      {comments.length === 0 && <p>Aucun commentaires</p>}
      {comments.length > 0 && (
        <ul className='list-group'>
          {comments.map((comment) => (
            <li className='list-group-item' key={comment.id}>
              {comment.user.username} - {new Date(comment.date).toLocaleString()}<br />
              {comment.content}
              {currentUser.role === 'Moderateur' || currentUser.role === 'Administrateur' ? (
                <button
                  type='button'
                  className='btn btn-sm btn-danger float-right'
                  onClick={() => handleCommentDelete(comment.id)}
                >
                  Supprimer
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleCommentSubmit}>
          <textarea
            id='new-comment'
            className='form-control'
            rows='3'
            value={newComment}
            placeholder="Ajouter un commentaire"
            onChange={(e) => setNewComment(e.target.value)}
          />

        <button type='submit' className='btn btn-primary'>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
