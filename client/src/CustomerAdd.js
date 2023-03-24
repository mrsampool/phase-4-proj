import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerAdd = ({addPunchcardFlag}) => {

    const [name, setName] = useState("")

     const { addCustomer } = useContext(UserContext)

    // POST REQUEST TO CREATE
    const handleSubmit = (e) => {
        e.preventDefault()

        addCustomer({
              
        })
        addPunchcardFlag()
    }

  return (
    <div>
        <h3><em>Add a New Customer</em></h3>
        <main class="container">
        <article>
        <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input 
                type="text" 
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br/><br/>
   
        <input type="submit" />
        </form>
        </article>
        </main>
        <hr/>
    </div>
  )
}

export default CustomerAdd

