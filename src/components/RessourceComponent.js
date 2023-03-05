// react
import React from 'react'
// css 
import './RessourceComponent.css'

const RessourceComponent = ({title, description,img}) => {


  return (
    <div className="grid" href="https://openclassrooms.com/fr/">      
        <img src={img} alt="" className="img" ></img>        
          <p>{title}</p>
          <p>{description}</p>
        
    </div>
  )


}

export default RessourceComponent