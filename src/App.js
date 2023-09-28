import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import './App.css';


function App() {
  return (
    <div className="App ">
      <h1>Probando</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting = {'Hola Bienvenidos'}/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/*' element={<h1>Not Found 404</h1>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
