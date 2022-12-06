import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tours from './component/Tours/Tours';
import Explore from './component/Explore/Explore';
import Events from './component/Events/Events';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App /> } />
    <Route path='/tours' element={ <Tours /> } />
    <Route path='/explore' element={ <Explore /> } />
    <Route path='/events' element={ <Events /> } />
    <Route path='/contact' element={ <App /> } />
  </Routes>
  </BrowserRouter>
);

