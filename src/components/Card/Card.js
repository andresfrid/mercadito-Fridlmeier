import React,{ useState, useEffect } from 'react';
import './Card.css';
import ItemCount from '../NavBar/ItemCount/ItemCount';



export default function Card({data}){  
    const {title, talle, price, stock, image} = data
    return(
        <div className="card-item">
        <img className= "img-card" src={`./${image}`} alt={image} />
            <h2>{title}</h2>
            <p>Precio: ${price}</p>
            <p>Talle: {talle}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}