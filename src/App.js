// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
// component
import HomePage from './Pages/HomePage';
import UniqueRessourceComponent from './components/UniqueRessourceComponent';
// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/accueil" replace />} />
            <Route path='/accueil' element={<HomePage />} />

            <Route path='/ressource/:id' element={<UniqueRessourceComponent />} />




          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;