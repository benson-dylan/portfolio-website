import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/Projects';
import ELLEvation from './pages/ELLEvation';
import AboutPage from './pages/AboutMe';

const prefix = "/portfolio-website";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path={prefix + "/"} element={<HomePage/>}/>
            <Route path={prefix + "/projects"} element={<ProjectPage/>}/>
            <Route path={prefix + "/projects/ellevation"} element={<ELLEvation/>}/>
            <Route path={prefix + "/about"} element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
