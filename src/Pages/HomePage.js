import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RessourceComponent from '../components/RessourceComponent';
import Navbar from '../components/Navbar';

function HomePage() {

  const [ressource, setRessource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [category, setCategory] = useState("");
  const [typeR, setTypeR] = useState("");
  const [relation, setRelation] = useState("");

  const flag = useRef(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [typesRessource, setTypesRessource] = useState([]);
  const [relations, setRelations] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7196/api/Category").then((response) => {
      if (response.status === 200) {
        setCategories(response.data);
        console.log(response.data);
      }
    });

    axios.get("https://localhost:7196/api/TypeR").then((response) => {
      if (response.status === 200) {
        setTypesRessource(response.data);
        console.log(response.data);
      }
    });

    axios.get("https://localhost:7196/api/Relation").then((response) => {
      if (response.status === 200) {
        setRelations(response.data);
        console.log(response.data);
      }
    });
  }, []);

  let getAllRessource = () => {
    return axios.get('https://localhost:7196/api/Resource')
  }

  let searchByTitle = () => {
    return axios.get(`https://localhost:7196/api/Resource/title/${searchText}`)
  }

  const handleSearch = () => {
    let endpoint;
    if (searchBy === "title") {
      endpoint = `https://localhost:7196/api/Resource/title/${searchText}`;
    } else if (searchBy === "Category") {
      endpoint = `https://localhost:7196/api/Resource/Category/${category}`;
    } else if (searchBy === "Type") {
      endpoint = `https://localhost:7196/api/Resource/Type/${typeR}`;
    } else if (searchBy === "Relation") {
      endpoint = `https://localhost:7196/api/Resource/Relation/${relation}`;
    }

    // Recherche par titre
    const searchTitle = axios.get(`https://localhost:7196/api/Resource/title/${searchText}`);

    // Recherche basée sur la valeur sélectionnée dans la liste déroulante
    const searchFilter = axios.get(endpoint);

    Promise.all([searchTitle, searchFilter])
      .then((res) => {
        const titleResult = res[0].data;
        const filterResult = res[1].data;

        // On filtre les résultats communs aux deux requêtes
        const filteredResult = titleResult.filter((titleRes) => {
          return filterResult.some((filterRes) => {
            return filterRes.id === titleRes.id;
          });
        });

        setRessource(filteredResult);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (flag.current === false) {
      getAllRessource()
        .then(res => {
          console.log(res.data)
          setRessource(res.data)
        })
        .catch(err => console.log(err))
    }
    return () => flag.current = true
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="form-group">
          <label htmlFor="searchBy">Rechercher par:</label>
          <select
            className="form-control"
            id="searchBy"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="title">Titre</option>
            <option value="Category">Catégorie</option>
            <option value="Type">Type de ressource</option>
            <option value="Relation">Relation</option>
          </select>
        </div>
        <div className="form-group">
  <label htmlFor="searchText">Recherche:</label>
  <input
    type="text"
    className="form-control"
    id="searchText"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>
{searchBy === "Category" && (
  <div className="form-group">
    <label htmlFor="category">Catégorie</label>
    <select
      className="form-control"
      id="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.category_name}
        </option>
      ))}
    </select>
  </div>
)}
{searchBy === "Type" && (
  <div className="form-group">
    <label htmlFor="typeR">Type de Ressource</label>
    <select
      className="form-control"
      id="typeR"
      value={typeR}
      onChange={(e) => setTypeR(e.target.value)}
    >
      {typesRessource.map((typeR) => (
        <option key={typeR.id} value={typeR.id}>
          {typeR.type_name}
        </option>
      ))}
    </select>
  </div>
)}
{searchBy === "Relation" && (
  <div className="form-group">
    <label htmlFor="relation">Type de Relation</label>
    <select
      className="form-control"
      id="relation"
      value={relation}
      onChange={(e) => setRelation(e.target.value)}
    >
      {relations.map((relation) => (
        <option key={relation.id} value={relation.id}>
          {relation.relation_name}
        </option>
      ))}
    </select>
  </div>
)}
<button onClick={handleSearch} className="btn btn-primary">
  Rechercher
</button>
{error && <div className="alert alert-danger">{error}</div>}
<div className="row mt-5">
{ressource.map((ressource) => (
    <RessourceComponent id={ressource.id} img={ressource.illustration} title={ressource.title} description={ressource.description} />
))}
</div>
</div>
</div>
);
}

export default HomePage;
