// react
import React from 'react'
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// css
import "./Navbar.css"

function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a className="navbar-brand" href="/">RE Source</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a className="nav-link nav" href="/">Accueil</a>
            </li>
          </ul>
          <span class="navbar-text">
            <a className="nav-link nav" href="/">Se connecter</a>
          </span>
        </div>
      </div>
    </nav>

  )
}

export default Navbar