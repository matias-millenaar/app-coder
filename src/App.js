import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Hola Cris"/>
    </div>
  );
}

export default App;
