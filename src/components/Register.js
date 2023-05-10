import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Register.css';

const InscriptionComponent = () => {
const [name, setName] = useState('');
const [firstname, setFirstname] = useState('');
const [birthday, setBirthday] = useState('');
const [phonenumber, setPhonenumber] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');

const handleFormSubmit = (event) => {
event.preventDefault();

// Vérification des champs vides
if (!name || !firstname || !birthday || !phonenumber || !email || !password || !confirmPassword) {
  setError("Tous les champs doivent être remplis");
  return;
}

// Vérification du format du téléphone
if (!/^[0-9]{10}$/.test(phonenumber)) {
  setError("Le format du numéro de téléphone n'est pas valide");
  return;
}

// Vérification du format de l'email
if (!/\S+@\S+.\S+/.test(email)) {
  setError("Le format de l'email n'est pas valide");
  return;
}

// Vérification de la conformité des mots de passe
if (password !== confirmPassword) {
  setError("Les mots de passe ne correspondent pas");
  return;
}

// Vérification de la conformité du mot de passe (minimum 8 caractères, une majuscule, une minuscule et un chiffre)
/*if (!/(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
  setError("Le mot de passe doit contenir minimum 8 caractères, une majuscule, une minuscule et un chiffre");
  return;
}*/

const model = {
name: name,
firstname: firstname,
birthday: birthday,
phonenumber: phonenumber,
email: email,
username:email,
passwordHash: password,
id_role:1,
role: {
    id: "string",
    name: "string",
    normalizedName: "string",
    concurrencyStamp: "string",
    roleId: 1,
    role_name: "string"
  }
};
axios.post('https://localhost:7196/api/User/register', model)
.then(response => {
if (response.status === 200) {
console.log("User registered successfully!");
// Redirect user to login page
}
})
.catch(error => {
console.log("User registration failed: ", error);
setError("L'inscription a échoué");
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
<label htmlFor='email'>Email</label>
<input
type='mail'
className='form-control'
id='email'
value={email}
onChange={e => setEmail(e.target.value)}
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
  <label htmlFor='birthday'>Date de naissance</label>
  <input
    type='date'
    className='form-control'
    id='birthday'
    value={birthday}
    onChange={e => setBirthday(e.target.value)}
  />
</div>
<div className='form-group'>
  <label htmlFor='Password'>Mot de passe</label>
  <input
    type='text'
    className='form-control'
    id='password'
    value={password}
    onChange={e => setPassword(e.target.value)}
  />
</div>
<div className='form-group'>
  <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
  <input
    type='text'
    className='form-control'
    id='confirmPassword'
    value={confirmPassword}
    onChange={e => setConfirmPassword(e.target.value)}
  />
</div>
<button type='submit' className='btn btn-primary'>
  S'inscrire
</button>
</form>
</div>
</div>
</div>
</div>
);
};

export default InscriptionComponent;
