import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'

const CustomerNameEdit = ({id, editNameFlag}) => {

    const [name, setName] = useState("")
    console.log(id)

    const {customers, editCustomerName} = useContext(UserContext)


    useEffect(() => {
        const storedCustomer = customers.find(p => p.id === parseInt(id))
        if (storedCustomer) {
            setName(storedCustomer.name)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        editCustomerName({
                id: id,
                username: name
        })
        editNameFlag()
    }

  return (
    <div>
        <hr />
        <p>Edit client name:</p>
        <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input 
                type="integer" 
                id="count" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br/><br/>
   
        <button className="button1" type="submit">Submit</button>
       
        </form>
    </div>
  )
}

export default CustomerNameEdit