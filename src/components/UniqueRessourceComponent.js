//react
import React, { useEffect, useRef, useState } from 'react'
//axios
import axios from 'axios';
//component
import Navbar from '../components/Navbar';
//css
import "./UniqueRessourceComponent.css";
import CommentSection from '../components/Comment';

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
          <img className="uniqueImg" src={ressource.illustration} alt="tennis"></img>
          <div className='col-xs-12'>

            <div className=' sessionTitleOption'>
              <h1 className='uniqueTitle'>{ressource.title}</h1>
              <p className='pOption'>{ressource.description}</p>
            </div>


            <div className='row uniqueContent'>
              <div className='col-xs-12'>
                <p>{ressource.content}</p>
              </div>
            </div>
            <CommentSection resourceId={idRessource} currentUser={null} />
          </div>
        </div>
      </div>
    </div >
  )

}

export default UniqueRessourceComponent
