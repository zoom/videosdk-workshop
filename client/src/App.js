import React, {useContext, useState, useEffect, useReducer} from 'react';
import { UserContext } from './Context/globalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import './App.css';

const meetingArgs = {
  topic: 'zoom workshop',
  name: '',
  password: '', 
  //fixed for demo
  roleType: 1, 
}
const App = () => {
  return (
    <div>
      hi!
      <UserContext.Provider value = {meetingArgs}>
        <BrowserRouter>
          <Routes>
              <Route path = '/' element = {<Home/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App;