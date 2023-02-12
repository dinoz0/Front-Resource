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
      <div>
            <DropdownButton variant="light" title="Filtres" autoClose={false}>
            <li>Catégories<hr class="dropdown-divider" /></li>
            <Form.Check
              type="checkbox" id="Categorie1" label="Communication"/>
            <Form.Check
              type="checkbox" id="Categorie2" label="Culture"/>
            <Form.Check
              type="checkbox" id="Categorie3" label="Développement personnelle"/>
            <Form.Check
              type="checkbox" id="Categorie4" label="Intelligence émotionnelle "/>
            <Form.Check
              type="checkbox" id="Categorie5" label="Spiritualité"/>
            <Form.Check
            type="checkbox" id="Categorie6" label="Vie affective"/>
            <Form.Check
              type="checkbox" id="Categorie7" label="Loisir"/>
            <Form.Check
              type="checkbox" id="Categorie8" label="Monde professionnel "/>
            <Form.Check
              type="checkbox" id="Categorie9" label="Parentalité "/>
            <Form.Check
              type="checkbox" id="Categorie10" label="Qualité de vie "/>
            <Form.Check
              type="checkbox" id="Categorie11" label="Recherche de sens "/>
            <Form.Check
              type="checkbox" id="Categorie12" label="Santé physique "/>
            <Form.Check
            type="checkbox" id="Filtre" label="Développement personnelle"/>
            <li><hr class="dropdown-divider" />Types de Relations<hr class="dropdown-divider" /></li>
            <Form.Check
              type="checkbox" id="Relation1" label="Soi"/>
            <Form.Check
              type="checkbox" id="Relation2" label="Conjoint"/>
            <Form.Check
              type="checkbox" id="Filtre" label="Famille"/>
            <Form.Check
              type="checkbox" id="Relation3" label="Professionnelle"/>
            <Form.Check
              type="checkbox" id="Relation4" label="Amis"/>
            <Form.Check
              type="checkbox" id="Relation5" label="Inconnu"/>
            <li><hr class="dropdown-divider" />Types de Ressources<hr class="dropdown-divider" /></li>
            <Form.Check
              type="checkbox" id="Type1" label="Article"/>
            <Form.Check
              type="checkbox" id="Type2" label="Vidéo"/>
            <Form.Check
              type="checkbox" id="Type3" label="Activité"/>
            <Form.Check
              type="checkbox" id="Type4" label="Jeu"/>
            <Form.Check
              type="checkbox" id="Type5" label="PDF"/>
            <Form.Check
              type="checkbox" id="Type6" label="Carte Défi"/>
            <Form.Check
              type="checkbox" id="Type7" label="Fiche de lecture"/>
            <Form.Check
              type="checkbox" id="Type8" label="Autre"/>
              <li><hr class="dropdown-divider" /></li>
              <Form.Check
                type="checkbox" id="Favori" label="Favoris"/>
            </DropdownButton>
      </div>
      <input type="search" class="searchBar" placeholder="Recherche"  aria-label="Search" aria-describedby="search-addon" />
      <button type="button" class="btn btn-outline-primary">Rechercher</button>

    </div>
  )
}

export default MainPage;
