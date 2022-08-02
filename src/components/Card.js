import React from 'react'
import "./Card.css"
import { PhotoDatabase } from './PhotoDatabase'

function Card() {
  return (
    <>
    <div className="photo-gallery-container">
      
      <div className="photo-gallery">
        {PhotoDatabase.map((item) => (
          <div className="card-photo-gallery-id" key={item.id}>
            <div className="img-photo-gallery">
              <img className="img-gallery" src={item.src} alt={item.name} />
            </div>
            <div className="photo-gallery-info">
              <h3 className="photo-item-name">{item.name}</h3>
              <p className="photo-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}

export default Card