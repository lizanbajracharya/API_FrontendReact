import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter} from 'react-router-dom'
import AdminPanel from './components/admin/AdminPanel';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
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
