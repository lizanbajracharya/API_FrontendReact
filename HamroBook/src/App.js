import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/login/LoginComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
