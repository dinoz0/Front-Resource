import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Connexion.css';

const LoginComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    axios.get(`https://localhost:7196/api/User/${name}/${password}`)
      .then(response => {
        console.log(response.data);
        if (response.data) {
          console.log("Vous êtes connecté !");
        }
      })
      .catch(error => {
  if (error.response && error.response.status === 404) {
    setError("Pseudo ou mot de passe incorrect");
  } else {
    console.log("Erreur de connexion", error);
    setError("Une erreur est survenue, veuillez réessayer plus tard");
  }
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
                  value={name}
                  onChange={e => setName(e.target.value)}
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
              <button type='submit' className='btn btn-primary' onClick={() => setError("")}>
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
