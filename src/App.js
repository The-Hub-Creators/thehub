import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Home />
        </main>
      </header>
    </div>
  );
}

export default App;
