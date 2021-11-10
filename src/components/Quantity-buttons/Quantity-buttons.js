import './Quantity-buttons.styles.css';

const QuantityButtons = ({ quantity, setQuantity }) => {   

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }

    return (
        <div className='quantity-buttons'>
            <button className='quantity-button' onClick={removeQuantity}>-</button>
            <span>{quantity}</span>
            <button className='quantity-button' onClick={addQuantity}>+</button>
        </div>
    )
};

export default QuantityButtons;