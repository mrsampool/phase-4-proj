import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerForm = ({addCustomerFlag}) => {

  const [ username, setUsername] = useState("")

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
            <article>
                <p><em>Step 1 of 2</em></p>
                <label>Client Name:</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    placeholder={"Enter client name"}
                    onChange={e => setUsername(e.target.value)}
                />
            </article>
            <input type="submit" value="Next" />
        </form>
 
        
    </div>
  )
}

export default CustomerForm