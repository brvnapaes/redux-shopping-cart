import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/productsSlice';
import './Filter.styles.css';

const Filter = ({ category }) => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <span className={ selectedCategory === category ? 'filter-button filter-button-active' : 'filter-button' } onClick={() => {
            dispatch(filterCategory(category))
        }}>
            {category}
        </span>
    )
}

export default Filter;