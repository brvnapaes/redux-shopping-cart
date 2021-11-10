import { products } from '../Products/Product-list';
import DeleteIcon from '../../assets/images/delete-icon.png';
import './Cart-item.styles.css';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({ cartItem }) => {

    const product = products.find(product => product.id === cartItem.productId);

    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <div className='cart-item-details'>
                <div className='item-image'>
                    <img src={`./${product.img}.jpg`} alt={product.img} />
                </div>
                <div className='item-description'>
                    <span>{product.name} x {cartItem.quantity}</span>
                    <span>R$: {product.price * cartItem.quantity}</span>
                    <div className='remove-button' 
                    onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                        <img src={DeleteIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;