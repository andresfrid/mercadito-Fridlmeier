import Card from '../Card/Card.js';
import './ItemListContainer.css';

const ItemListContainer = ({children}) => {
    let dataProduct = {
        title: 'remera',
        talle: 'XL',
        price: 1500,
        stock: 5
    }
    return(
        <div className="container-list">
            <div className="container-cards">
                <h2>{children}</h2>
                <Card data={dataProduct}/>
            </div>
        </div>
    )
}
export default ItemListContainer;