import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import AddCustomer from './AddCustomer'
import Punchcard from './Punchcard'
import UserCustomerTable from './UserCustomerTable'
import CustomerProfile from './CustomerProfile'
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
          <Route exact path="/punchcards" element={<AddCustomer />} />
          <Route exact path="/customers/:customer_id/punchcards/:id" element={<Punchcard />} />
          <Route exact path="/customers" element={<UserCustomerTable />}/>
          <Route exact path="/customers/:id" element={<CustomerProfile />}/>
          
        </Routes>
      </UserProvider>
     
    </div>
  );
}

export default App;
