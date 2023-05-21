import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Connexion.css';
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /*const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');*/
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {

    const storedToken = localStorage.getItem('token');

    if (storedToken) {

      setToken(storedToken);

    }

  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    const model = {
      username: username,
      PasswordHash: password,

    };

    axios.post('https://localhost:7196/api/User/login', model)
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
         setToken(response.data.token);
        }
      })
      .catch(error => {
        console.log(error);
        setError("E-mail ou mot de passe incorrect");
      });
  };
useEffect(() => {

    if (token) {

      localStorage.setItem('token', token);

    }

  }, [token]);
  return (

    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <form onSubmit={handleFormSubmit}>
              {error && <div className='alert alert-danger'>{error}</div>}
              <div className='form-group'>
                <label htmlFor='username'>E-mail</label>
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


              <button type='submit' className='btn btn-primary' onClick={() => setError("")}>
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
      <Link to={"/inscription"}>
        Pas de compte? Inscrivez vous
      </Link>
    </div>
  );
};

export default LoginComponent;
