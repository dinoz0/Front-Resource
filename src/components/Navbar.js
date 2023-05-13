// react
import React from 'react'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// css
import "./Navbar.css"

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-inverse navbar-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">RE Source</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav" href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="programme">Le programme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="session">Les sessions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="societe">Les sociétés</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="livre-dor">Livre d'or</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="ils-parlent-de-nous">Ils parlent de nous !</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="inscription">Inscrivez-vous !</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav" href="ajoutRessource">Ajouter une ressource</a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </nav>

  )
}

export default Navbar
