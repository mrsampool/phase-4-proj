import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import { UserProvider } from "./context/user"


function App(props) {

  return (
    <div className="App">

      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
