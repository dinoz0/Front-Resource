//react
import React from 'react';

//css
import "./MainPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown, DropdownButton, Form} from "react-bootstrap";

//const
const MainPage = () =>{

  return(
    <div class="input-group" position="center">
      <div id="container">
        <nav>
          <ul>
            <li><a href="#">Filtres</a>
              <ul>
                <li><a href="#">Catégories</a>
                  <ul>
                    <li><Form.Check type="checkbox" id="Categorie1" label="Communication"/></li>
                    <li><Form.Check type="checkbox" id="Categorie2" label="Culture"/></li>
                    <li><Form.Check type="checkbox" id="Categorie3" label="Développement personnelle"/></li>
                    <li><Form.Check type="checkbox" id="Categorie4" label="Intelligence émotionnelle"/></li>
                    <li><Form.Check type="checkbox" id="Categorie5" label="Spiritualité"/></li>
                    <li><Form.Check type="checkbox" id="Categorie6" label="Vie affective"/></li>
                    <li><Form.Check type="checkbox" id="Categorie7" label="Loisir"/></li>
                    <li><Form.Check type="checkbox" id="Categorie8" label="Monde professionnel"/></li>
                    <li><Form.Check type="checkbox" id="Categorie9" label="Parentalité"/></li>
                    <li><Form.Check type="checkbox" id="Categorie10" label="Qualité de vie "/></li>
                    <li><Form.Check type="checkbox" id="Categorie11" label="Recherche de sens"/></li>
                    <li><Form.Check type="checkbox" id="Categorie12" label="Santé physique"/></li>

                  </ul>
                </li>
                <li><a href="#">Types de Relations</a>
                  <ul>
                    <li><Form.Check type="checkbox" id="Relation1" label="Soi-même"/></li>
                    <li><Form.Check type="checkbox" id="Relation2" label="Conjoint"/></li>
                    <li><Form.Check type="checkbox" id="Relation3" label="Famille"/></li>
                    <li><Form.Check type="checkbox" id="Relation4" label="Professionnelle"/></li>
                    <li><Form.Check type="checkbox" id="Relation5" label="Amitié"/></li>
                    <li><Form.Check type="checkbox" id="Relation6" label="Autre"/></li>
                  </ul>
                </li>
                <li><a href="#">Types de Ressources</a>
                  <ul>
                    <li><Form.Check type="checkbox" id="TypeRessource1" label="Article"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource2" label="Vidéo"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource3" label="Activité"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource4" label="Jeu"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource5" label="PDF"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource6" label="Carte Défi"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource7" label="Fiche de lecture"/></li>
                    <li><Form.Check type="checkbox" id="TypeRessource8" label="Autre"/></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

      </div>
      <input type="search" class="searchBar" placeholder="Recherche"  aria-label="Search" aria-describedby="search-addon" />
      <button type="button" class="btn btn-outline-primary">Rechercher</button>
    </div>

  )
}

export default MainPage;
