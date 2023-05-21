// react
import React, { useEffect, useRef, useState } from 'react'
// css 
import './RessourceComponent.css'

const RessourceComponent = ({ id, title, description, img }) => {

  const rId = id
  const hreft = "/ressource/"
  const hrefId = hreft + rId


  return (
    <a href={hrefId}>
      <div id={id} className="grid" >
        <img src={img} alt="" className="img" ></img>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </a>
  )


}

export default RessourceComponent