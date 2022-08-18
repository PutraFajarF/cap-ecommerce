import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import Account from './pages/Account/Account';
import Register from './pages/Account/Register';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='product' element={<Product />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Account />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <Account /> */}
    </div>
  );
}

export default App;
