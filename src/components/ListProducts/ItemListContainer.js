import React,{useState, useEffect} from 'react';
import Card from '../Card/Card.js';
import './ItemListContainer.css';

const ItemListContainer = ({}) => { 
    const mockProducts = [
        {
            id: 1,
            title: 'remera',
            talle: 'XL',
            price: 1500,  
            image: 'remera.jpg',
            stock: 5
        },
        {
            id: 2,
            title: 'Jean',
            talle: 'L',
            price: 500, 
            image: 'logo192',
            stock: 10 
        },
        {
            id: 3,
            title: 'buzo',
            talle: 'M',
            price: 4000, 
            image: 'buzo.jpg',
            stock: 8 
        }]
    
        const [products, setProducts] = useState([]) 
        const getProducts = () => { 
            return new Promise ((resolve, reject) => {
                setTimeout( () => {
                    return resolve (mockProducts)
                }, 200);
            })
        }
        useEffect( () => {
            getProducts().then((data) => {
                setProducts(data)
            }).finally( () => {
                console.log("Termino la llamada")
            })

        },[])


        return(
            <div className="container-list">
                <h2>Productos en Oferta</h2>
                <div className="container-cards">
                    
                    {products.map((product) =>{
                        const {id} = product
                        return (
                           <Card data={product} key={id}/> 
                        )
                    })}
                </div>
            </div>
        )
}
export default ItemListContainer;