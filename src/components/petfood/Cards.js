import React from 'react';
import '../Style/cards.css';

const Cards = ({item, handleClick}) => {
    const {title, description, expiryDate,pricePerUnit, image} = item;
  return (
    <div className="cards ">
        <div className="image_box">
            <img src={image} alt="Image1" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p >{description}</p>
            <p >Expiry-{expiryDate}</p>
            <p >Price - {pricePerUnit}Rs</p>
          
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards