// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component

import UserProfile from './components/UpdateUser';
// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<UserProfile />} />
            <Route path='/ressource/:id' element={<UserProfile />} />




          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
