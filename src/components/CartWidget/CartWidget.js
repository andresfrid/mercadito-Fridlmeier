import Cart from './Cart.png'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div>
            <img src={Cart} className="img-NavBar" />
            <p>Listado</p>
        </div>
    )
}
export default CartWidget;