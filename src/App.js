// react
import { Suspense } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component

import CommentSection from './components/Comment';
// css
import './App.css';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<CommentSection />} />
            <Route path='/ressource/:id' element={<CommentSection />} />




          </Routes>


        </BrowserRouter>
      </div>
    </Suspense>

  );
}

export default App;
