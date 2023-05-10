// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component

import  InscriptionComponent from './components/Register';
// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<InscriptionComponent />} />
            <Route path='/ressource/:id' element={<InscriptionComponent />} />




          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
