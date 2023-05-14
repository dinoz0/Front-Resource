import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Connexion.css';
import { Link } from 'react-router-dom'

const ForgotPasswordComponent = () => {
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setErrorMsg("Veuillez entrer votre adresse email");
      return;
    }

    const model = {
      email: username
    };

    axios.post('https://localhost:7196/api/User/forgotpassword', model)
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          console.log("Email envoyé !");
          setSuccessMsg("Un email a été envoyé avec des instructions pour réinitialiser votre mot de passe.");
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMsg("Adresse email non trouvée");
      });
  };

  return (

    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <form onSubmit={handleFormSubmit}>
              {errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}
              {successMsg && <div className='alert alert-success'>{successMsg}</div>}
              <div className='form-group'>
                <label htmlFor='username'>Adresse mail</label>
                <input
                  type='email'
                  className='form-control'
                  id='username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              <button type='submit' className='btn btn-primary'>
                Renvoyer le mot de passe
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

export default ForgotPasswordComponent;
