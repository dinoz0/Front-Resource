// react
import React, { useEffect, useRef, useState } from 'react'
// axios
import axios from 'axios'
// composant
import RessourceComponent from '../components/RessourceComponent';
import Navbar from '../components/Navbar';
// css
// import './App.css';
// ressource
// import ressource from './ressource.json'


function HomePage() {

    const [ressource, setRessource] = useState([])
    const [searchText, setSearchText] = useState("")
    const flag = useRef(false)

    let getAllRessource = () => {
        return axios.get('https://localhost:7196/api/Resource')
    }

    let searchRessource = () => {
        return axios.get(`https://localhost:7196/api/Resource/title/${searchText}`)
    }

    const handleSearch = () => {
        if (searchText) {
            searchRessource()
                .then(res => {
                    console.log(res.data)
                    setRessource(res.data)
                })
                .catch(err => console.log(err))
        } else {
            getAllRessource()
                .then(res => {
                    console.log(res.data)
                    setRessource(res.data)
                })
                .catch(err => console.log(err))
        }
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
            <Navbar />
            <div>
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {ressource.map((ressource) => (
                <RessourceComponent id={ressource.id} img={ressource.illustration} title={ressource.title} description={ressource.description} />
            ))}
        </div>
    );
}

export default HomePage;
