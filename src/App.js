// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component
import HomePage from './Pages/HomePage';
import UniqueRessourceComponent from './components/UniqueRessourceComponent';
import AddRessourceComponent from './components/AjoutRessourceComponent';

// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/ressource/:id' element={<UniqueRessourceComponent />} />
            <Route path='/ajoutRessource' element={<AddRessourceComponent />} />





          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
