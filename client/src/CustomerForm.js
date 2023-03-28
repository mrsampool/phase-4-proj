import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerForm = ({addCustomerFlag}) => {

  const [ username, setUsername, errors] = useState("")

  const { addCustomer} = useContext(UserContext)

  const handleCustomerSubmit = (e) => {
    e.preventDefault()

    addCustomer({
            username: username
    })
    addCustomerFlag()
 }

  return (
    <div>
        
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
                <button className="button1" type="submit">Next</button>
            {errors}
            </article>
            
        </form>
 
        
    </div>
  )
}

export default CustomerForm