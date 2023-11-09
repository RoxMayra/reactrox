import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
//import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './public/Dashboard';
import Home from './public/Home';

import { useAuth, user } from "./ruteo/AuthContext"
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';


function App() {
  const { user } = useAuth();
  return(
    <div style={{background:"plum"}}>
      <Router>
        {user ? <BarraRutasProtected /> : <BarraRutasPublic/>}
      </Router>
    </div>
  );
}

  export default App;