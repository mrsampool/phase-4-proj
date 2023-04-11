import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardPreview from './PunchcardPreview'
import CustomerForm from './CustomerForm'
import AllCustomersTable from './AllCustomersTable'


const AddCustomer = () => {

    const { loggedIn, getAllCustomers} = useContext(UserContext)
    const [toggleNew, setToggleNew] = useState(false)
    const [toggleFind, setToggleFind] = useState(false)

    const handleNewClick = () => {
      setToggleNew(true)
    }

    const handleFindClick = () => {
      setToggleFind(true)
    }
  
    if (loggedIn) {
      
      return (
        <>
        {/* <h1 className="title">CREATE</h1> */}
        <main class="container">
        <br />
        <button className="button1" onClick={handleNewClick}>NEW CLIENT</button>

        {toggleNew ? <CustomerForm /> : null}

        <br />

        <button className="button1" onClick={handleFindClick}>FIND EXISTING CLIENT</button>

        <br /><br />

        {toggleFind ? <AllCustomersTable /> : null}
                     
        </main>
        </>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }
}

export default AddCustomer