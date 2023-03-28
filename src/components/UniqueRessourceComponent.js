//react
import React, { useEffect, useRef, useState } from 'react'
//axios
import axios from 'axios';

const UniqueRessourceComponent = () => {

  const [ressource, setRessource] = useState([])
  const flag = useRef(false)

  var urlcourante = document.location.href;
  var url = (' URL : \n' + urlcourante);
  var idRessource = url.split('/')[4]

  let getRessource = () => {
    var dbUrl = "https://localhost:7196/api/Resource/"
    var request = dbUrl + idRessource
    console.log(request)
    return axios.get(request)
  }

  useEffect(() => {

    if (flag.current === false) {
      getRessource()
        .then(res => {
          console.log(res.data)
          setRessource(res.data)
        })
        .catch(err => console.log(err))
    }
    return () => flag.current = true
  }
  )


  return (
    <div>
      <div>
        <img src="./images/tennis.png" alt="tennis"></img>
        <h1>{ressource.title}</h1>
        <h2>{ressource.description}</h2>
      </div>
      <div>
        <p>{ressource.content}</p>
      </div>
    </div>
  )
}

export default UniqueRessourceComponent