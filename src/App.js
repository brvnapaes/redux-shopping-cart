import './App.css';
import Products from './components/Products/Products';
import Filters from './components/Filters/Filters';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Filters />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
