import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RessourceComponent from '../components/RessourceComponent';
import Navbar from '../components/Navbar';
//css
import './HomePage.css'

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
      }
    });

    axios.get("https://localhost:7196/api/TypeR").then((response) => {
      if (response.status === 200) {
        setTypesRessource(response.data);
      }
    });

    axios.get("https://localhost:7196/api/Relation").then((response) => {
      if (response.status === 200) {
        setRelations(response.data);
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
        {ressource.map((ressource) => (
          <RessourceComponent id={ressource.id} img={ressource.illustration} title={ressource.title} description={ressource.description} />

        ))}

      </div>
    </div>
  );
}

export default HomePage;
