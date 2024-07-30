import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app"><Login /></div>} />
        <Route path="/signup" element={<div className="app"><Signup /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
