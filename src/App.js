import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Home from './components/layouts/home/home.js';
import MainApp from './components/layouts/main-app/main-app';

function App() {
  return (
    <BrowserRouter>    
    <Route exact path="/" component={Home}/>
    <Route path="/app" component={MainApp}/>
    </BrowserRouter>
  );
}
export default App;