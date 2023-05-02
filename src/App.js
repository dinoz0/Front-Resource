// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component

import LoginComponent from './components/Connexion';
// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginComponent />} />
            <Route path='/ressource/:id' element={<LoginComponent />} />




          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
