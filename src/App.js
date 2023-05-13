
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/Connexion';
import InscriptionComponent from './components/Register';
import './App.css';

function App() {
return (
<Suspense fallback={null}>
<div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<LoginComponent />} />
<Route path="/inscription" element={<InscriptionComponent />} />
<Route path="/connexion" element={<LoginComponent />} />

</Routes>
</BrowserRouter>
</div>
</Suspense>
);
}

export default App;
