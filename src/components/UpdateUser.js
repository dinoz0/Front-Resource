import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './UpdateUser.css';





const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Récupération des données de l'utilisateur depuis l'API
    axios.get(`https://localhost:7196/swagger/User/${userId}`)
      .then(response => {
        setUser(response.data);
        setName(response.data.name);
        setFirstname(response.data.firstname);
        setBirthday(response.data.birthday);
        setPhonenumber(response.data.phonenumber);
        setEmail(response.data.email);
      })
      .catch(error => console.log(error));
  }, [userId]);

  const handleUpdate = event => {
    event.preventDefault();
    // Envoi des données modifiées de l'utilisateur à l'API
    const updatedUser = { ...user, name, firstname, birthday, phonenumber, email };
    axios.put(`https://localhost:7196/swagger/User/${userId}`, updatedUser)
      .then(response => {
        setUser(response.data);
        setShowConfirmation(false);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = () => {
    // Affichage de la popup de confirmation
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    // Suppression de l'utilisateur dans la BDD via l'API
    axios.delete(`https://localhost:7196/swagger/User/${userId}`)
      .then(response => {
        console.log('User deleted successfully!');
        // Redirection vers la page d'accueil ou autre
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Profil de {user.name} {user.firstname}</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" className="form-control" id="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Date de naissance</label>
          <input type="date" className="form-control" id="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Numéro de téléphone</label>
          <input type="text" className="form-control" id="phonenumber" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
      <button className='btn btn-danger' onClick={handleDelete}>Supprimer le compte</button>

    </div>
    );
  };
export default UserProfile;
