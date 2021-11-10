import Product from "../Product/Product";
import { products } from "./Product-list";
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/productsSlice';
import './Products.styles.css';

const Products = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className='products-container'>
            <div className='products-wrapper'>
                <h1>Produtos</h1>
                <div className='products-directory'>
                    {
                        products
                        .filter(product => {
                            if (selectedCategory === 'all') return true;

                            return selectedCategory === product.category;
                        })
                        .map(product => <Product product={product}/>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Products;