// composant
import RessourceComponent from './components/RessourceComponent';
// css
import './App.css';
// ressource
import ressource from './ressource.json'


function App() {


  
  return (
    <div className="App">

      {ressource.map((ressource) => (
        <RessourceComponent id={ressource.id} img={ressource.img} title={ressource.title} description={ressource.description}>
        </RessourceComponent>
      ))}
      
      
    </div>
  );
}

export default App;
