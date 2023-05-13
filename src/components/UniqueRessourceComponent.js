//react
import React, { useEffect, useRef, useState } from 'react'
//axios
import axios from 'axios';
//component
import Navbar from '../components/Navbar';
import CommentSection from '../components/Comment';
//css
import "./UniqueRessourceComponent.css"


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
      <Navbar />
      <div className='container uniqueContainer'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className=' sessionTitleOption'>
              <h1 className='uniqueTitle'>{ressource.title}</h1>
              <p className='pOption'>{ressource.description}</p>
            </div>
            <img className="uniqueImg" src={ressource.illustration} alt="tennis"></img>

            <div className='row uniqueContent'>
              <div className='col-xs-12'>
                <p>{ressource.content}</p>
              </div>
            </div>

            <CommentSection resourceId={idRessource} currentUser={null} />

          </div>
        </div>
      </div>
    </div>
  );

}

export default UniqueRessourceComponent
