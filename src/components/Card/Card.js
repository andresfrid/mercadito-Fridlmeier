 
export default function Card({title, price, talle}){
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio: ${price}</p>
            <p>Talle: {talle}</p>
            <button>Comprar</button>
        </div>
    )
}