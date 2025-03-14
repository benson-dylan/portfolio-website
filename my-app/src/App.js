import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ELLEvation from './pages/ELLEvation';

const prefix = "/portfolio-website";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={prefix + "/"} element={<HomePage/>}/>
        <Route path={prefix + "/ELLEvation"} element={<ELLEvation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
