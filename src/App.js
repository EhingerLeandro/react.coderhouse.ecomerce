import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import Cart from './components/Cart/Cart.js'
import './App.css';
import {CartProvider} from './context/CartContext.js'
import Checkout from './components/Checkout/Checkout.js'

function App() {
  return (
    <div className="App ">
      {/*Este BrowserRouter permite generar los enlaces que permite llegar a otros componentes*/}
      <BrowserRouter>
        {/*Este CartProvider permite enviar las variables del createContext a todos los componentes*/}
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element ={<ItemListContainer greeting = {'Nuestros Productos'}/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='*' element={<h1>Not Found 404</h1>} />
            <Route path='/cart'  element={<Cart/>} />
            <Route path='/checkout'element={<Checkout/>} /> 
          </Routes>
        </CartProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
