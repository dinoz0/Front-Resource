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
    const userData = { username: username, password: password };
    axios.get('https://localhost:7196/swagger/User/', userData)
      .then(response => {
        if (response.status === 200) {
          console.log("Vous etes connecté!");
        }
      })
      .catch(error => {
        console.log("Erreur de conexion ", error);
        setError("Pseudo ou mot de passe incorrect");
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
