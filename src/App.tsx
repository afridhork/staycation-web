import React from 'react';
import { Routes, Route } from 'react-router-dom'

import 'assets/scss/bootstrap.scss';
import 'assets/vendor/js/bootstrap.js';
// import 'assets/vendor/css/bootstrap.css';

import LandingPage from "pages/LandingPage";
import Stories from "pages/Stories";
import Browse from "pages/Browse";
import Agent from "pages/Agents";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";

import 'react-loading-skeleton/dist/skeleton.css'


function App() {
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/browse-by" element={<Browse/>}/>
        <Route path="/agents" element={<Agent/>}/>
        <Route path="/properties/:id" element={<DetailPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
