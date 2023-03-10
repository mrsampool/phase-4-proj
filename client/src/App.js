import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import { UserProvider } from "./context/user"

function App(props) {

  return (
    <div className="App">

      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
