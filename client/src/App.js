import React, {useContext, useState, useEffect, useReducer} from 'react';
import { UserContext } from './Context/globalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Session from './Home/Session';
import './App.css';

const meetingArgs = {
  topic: 'Zoom_Workshop',
  name: '',
  password: '', 
  //fixed for demo
  roleType: 1, 
}
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>

          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;