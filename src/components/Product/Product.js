import { useState } from 'react';
import './Product.styles.css';
import QuantityButtons from '../Quantity-buttons/Quantity-buttons';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';

const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1); 

    const dispatch= useDispatch();

    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={`./${product.img}.jpg`} alt={product.img} />
            </div>
            <h2>{product.name}</h2>
            <span>R$ {product.price}</span>
                <QuantityButtons quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {
                dispatch(addItemToCart({ product, quantity }));
            }}>adicionar à cesta</button>
        </div>
    )
}

export default Product;