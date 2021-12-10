import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Users from './Pages/Users/Users'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  );
}

export default App;
