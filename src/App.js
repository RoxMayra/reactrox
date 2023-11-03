import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
//import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import PublicRutas from './ruteo/PublicRutas';
import { useAuth, user } from "./ruteo/AuthContext"
import ProtectedRutas from './ruteo/ProtectedRutas';

function App() {
  const { user } = useAuth();
  return(
    <div style={{background:"plum"}}>
      <Router>
        {user ? <ProtectedRutas /> : <PublicRutas/>}
      </Router>
    </div>
  );
}

  export default App;