// import logo from './logo.svg
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from './shared/Header';
import Login from './shared/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './shared/Signup';


const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
