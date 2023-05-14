// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component
import HomePage from './Pages/HomePage';
import UniqueRessourceComponent from './components/UniqueRessourceComponent';
import AddRessourceComponent from './components/AjoutRessourceComponent';
import LoginComponent from './components/Connexion';
import InscriptionComponent from './components/Inscription';
import ForgotPasswordComponent from './components/PasswordForget';



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
            <Route path='/connexion' element={<LoginComponent />} />
            <Route path='/motDePasseOubli' element={<ForgotPasswordComponent />} />

            <Route path='/inscription' element={<InscriptionComponent />} />






          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
