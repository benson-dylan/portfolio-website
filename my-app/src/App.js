import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/Projects';
import ELLEvation from './pages/ELLEvation';
import AboutPage from './pages/AboutMe';
import fish from './images/fish.png';

const prefix = "/portfolio-website";

function App() {
  return (
      <html>
        <head>
          <link rel="icon" type="image/png" size="192x192" href={fish}/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        </head>
        <BrowserRouter>
          <Routes>
            <Route path={prefix + "/"} element={<HomePage/>}/>
            <Route path={prefix + "/projects"} element={<ProjectPage/>}/>
            <Route path={prefix + "/projects/ellevation"} element={<ELLEvation/>}/>
            <Route path={prefix + "/about"} element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
      </html>
  );
}

export default App;
