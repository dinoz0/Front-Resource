// composant
import RessourceComponent from './components/RessourceComponent';
// react
import React, { useEffect, useRef, useState } from 'react'
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// axios
import axios from 'axios'
// css
import './App.css';
// ressource
// import ressource from './ressource.json'


function App() {

  const [ressource, setRessource] = useState([])
  const flag = useRef(false)

  let getAllRessource = () => {
    return axios.get('https://localhost:7196/api/Resource')
  }

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

      {ressource.map((ressource) => (
        <RessourceComponent id={ressource.id} img={ressource.img} title={ressource.title} description={ressource.description}>
        </RessourceComponent>
      ))}


    </div>
  );
}

export default App;
