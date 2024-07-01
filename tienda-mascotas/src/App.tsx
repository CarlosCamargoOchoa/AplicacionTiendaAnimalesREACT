import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router> 
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
