import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting = {'Hola Bienvenidos'} />
    </div>
  );
}

export default App;
