import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import BlockSite from './BlockSite';
import Temp from './Temp';

function MainSite() {
  return (
    <Router>
      <div className="MainSite">
        <NavBar />
        <Routes>
          <Route path="/about-me" element={<BlockSite />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainSite;