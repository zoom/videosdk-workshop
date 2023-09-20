import React, {useContext, useState, useEffect, useReducer} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import './App.css';


const App = () => {
  return (
    <div>
      hi!
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;