import React, { useState } from 'react'
import './card.css'

const Card = (props) => {

    const [img, setImg] = useState(() => props.img);
    const [foodName, setFoodName] = useState(() => props.name);
    const [desc, setDesc] = useState(() => props.desc);
    const [price, setPrice] = useState(() => props.price);
  return (
    <>
        <div className="card">
            <img src={img} alt="" />
            <p>{foodName}</p>
            <span>{desc}</span>
            <span>${price}</span>
        </div>
    
    </>
  )
}

export default Card