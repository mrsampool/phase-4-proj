import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import { UserContext } from './context/user'

const CustomerForm = ({handleFormSwitch}) => {

  const [ username, setUsername ] = useState("")

  const { addCustomer, errors } = useContext(UserContext)

  const handleCustomerSubmit = (e) => {
    e.preventDefault()

    addCustomer({
        username: username
    })

    handleFormSwitch(errors)

 }
 
  return (
    <>
        
         <form onSubmit={handleCustomerSubmit}>
            <article className="card">
                <p><em>Step 1 of 2</em></p>
                <label>Client Name:</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    placeholder={"Enter client name"}
                    onChange={e => setUsername(e.target.value)}
                />

                {errors}
                
                <br/>
                <button className="button1" type="submit">Next</button>
            
            </article>
            
          </form>
         
    </>
  )
}

export default CustomerForm