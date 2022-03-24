import './App.css';
import NavBar from'./components/NavBar/NavBar.js';
import ItemListContainer from './components/ListProducts/ItemListContainer.js';


function App() {
  return (
    //JSX
    <div className="App">
      <NavBar/> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
