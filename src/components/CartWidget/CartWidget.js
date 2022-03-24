import Cart from './Cart.png'
import './CartWidget.css'
import Button from '@mui/material/Button';
const CartWidget = () => {
    return (
        <div>
            <Button>
                <img src={Cart} className="img-NavBar"></img>
            </Button>
        </div>
    )
}
export default CartWidget;
