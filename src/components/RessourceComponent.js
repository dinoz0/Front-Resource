// react
import React, { useEffect, useRef, useState } from 'react'
// axios
import axios, { Axios } from 'axios'

// css 
import './RessourceComponent.css'

const RessourceComponent = ({ id, title, description, img }) => {


  return (
    <a href="/ressource/{id}">
      <div id={id} className="grid" >
        <img src={img} alt="" className="img" ></img>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </a>
  )


}

export default RessourceComponent