// react
import React, { useEffect, useRef, useState } from 'react'
// axios
import axios from 'axios'
// composant
import RessourceComponent from '../components/RessourceComponent';
// css
// import './App.css';
// ressource
// import ressource from './ressource.json'


function HomePage() {

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
                <RessourceComponent id={ressource.id} img={ressource.illustration} title={ressource.title} description={ressource.description}>
                </RessourceComponent>
            ))}


        </div>
    );
}


export default HomePage;