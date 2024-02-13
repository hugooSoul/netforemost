import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React on Rails App</h1>
        <p>Find the layout in client/src/App.jsx</p>

        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
