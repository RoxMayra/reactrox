import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
//import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import PublicRutas from './ruteo/PublicRutas';


function App() {

  
    return (
      <div style={{background:"plum"}}>
      <Router>
        <Routes>
          <PublicRutas/>

        </Routes>

      </Router>
      </div>
    );
  }
  
  
  export default App;