import CartItem from '../Cart-item/Cart-item';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import './Cart.styles.css';


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className='cart-container'>
            <h1>Cesta</h1>
            <span>Total:</span>
            <span>R$: {totalPrice} </span>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
        </div>
    )
};

export default Cart;