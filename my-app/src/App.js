import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';

const URL = "/portfolio-website";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-website/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
