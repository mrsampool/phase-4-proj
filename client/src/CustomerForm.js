import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerForm = () => {

  const [ username, setUsername] = useState("")

  const { addCustomer} = useContext(UserContext)

  const handleCustomerSubmit = (e) => {
    e.preventDefault()

    addCustomer({
            username: username
    })
 }

  return (
    <div>

         <form onSubmit={handleCustomerSubmit}>
            <article>
                <label>Client Name:</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </article>
            <input type="submit" value="Next" />
        </form>
 
        
    </div>
  )
}

export default CustomerForm