import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Connexion.css';
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    const model = {
      username: username,
      PasswordHash: password,
      name: name,
      firstname: firstname,
      Phonenumber:phonenumber,

      role: {
          id: "1",
          name: "string",

          concurrencyStamp: "string",
          //roleId: 1,
          role_name: "string"
        }
    };

    axios.post('https://localhost:7196/api/User/login', model)
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          console.log("Vous êtes connecté !");
          // Ajoutez ici le code pour stocker le token dans votre application
        }
      })
      .catch(error => {
        console.log(error);
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
              <label htmlFor='name'>Nom</label>
              <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              />
              </div>
              <div className='form-group'>
              <label htmlFor='firstname'>Prénom</label>
              <input
              type='text'
              className='form-control'
              id='firstname'
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              />
              </div>
              <div className='form-group'>
              <label htmlFor='phonenumber'>Téléphone</label>
              <input
              type='phone'
              className='form-control'
              id='phonenumber'
              value={phonenumber}
              onChange={e => setPhonenumber(e.target.value)}
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
      <Link to={"./Inscription"}>
        Pas de compte? Inscrivez vous
      </Link>
    </div>
  );
};

export default LoginComponent;
