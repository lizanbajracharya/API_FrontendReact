import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter} from 'react-router-dom'
import AdminPanel from './components/admin/AdminPanel';
function App() {
  return (
    <div className="App">
      
  <AdminPanel/>
     
    </div>
  );
}

export default App;
