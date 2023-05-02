import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Connexion.css';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    axios.get(`https://localhost:7196/swagger/User?username=${username}&password=${password}`)
      .then(response => {
        if (response.status === 200 && response.data.length > 0) {
          console.log("Vous êtes connecté !");
        } else {
          setError("Pseudo ou mot de passe incorrect");
        }
      })
      .catch(error => {
        console.log("Erreur de connexion", error);
        setError("Une erreur est survenue, veuillez réessayer plus tard");
      });
  };

  return (
    <div>
      <Navbar />
      <div className='container uniqueContainer'>
        <div className='row'>
          <div className='col-xs-12'>
            <form onSubmit={handleFormSubmit}>
              {error && <div className='alert alert-danger'>{error}</div>}
              <div className='form-group'>
                <label htmlFor='username'>Pseudo</label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Mot de passe </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
