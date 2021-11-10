import Filter from "../Filter/Filter";
import './Filters.styles.css';

const Filters = () => {
    return (
        <div className='filters-container'>
            <h2>Categorias:</h2>
            <div className='filters-wrapper'>
                {
                    ['origem animal', 'frutas', 'vegetais', 'padaria', 'all'].map(category => <Filter category={category} isActive={false} />)
                }
            </div>
        </div>
    )
}

export default Filters;