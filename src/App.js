import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './CartContext/CartContext';
import { NotificationServiceProvider } from './services/notification/NotificationService';

function App() {
  useEffect(() => {
    //localStorage.getItem(...) ?????
  },[])
  
  if (JSON.parse(localStorage.getItem("cart")) === null) {
    localStorage.setItem("cart", JSON.stringify([]))
  }

  return (
    <div className="App">
      <NotificationServiceProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='item/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServiceProvider>
    </div>
  );
}

export default App;
