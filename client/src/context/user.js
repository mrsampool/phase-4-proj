import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

// reason GLOBAL STATE is awesome, everytime any page is refreshed, this is rereshed, so it's a v good place to GET user /me 
// do not have to pass this stuff through props. IT'S AVAILABLE EVERYWHERE!

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState(null) //or is it null?
    const [loggedIn, setLoggedIn] = useState(false) // add loggedIn flag
    const [punchcards, setPunchcards] = useState([])
    const [customers, setCustomers] = useState([])
    const [newId, setNewId] = useState(null)
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    // console.log(customers)
    // console.log(user.customers)
    // console.log(punchcards)
 
    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            setPunchcards(data.punchcards)
            setCustomers(data.customers)
            if (data.errors) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
            }
        })    
    }, [])
    
        const addPunchcard = (punchcard) => {
        fetch('/punchcards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(punchcard)
    })
    .then(resp => resp.json())
    .then(data => {
        if(!data.errors) {
            setPunchcards([...punchcards, data])
            setFormFlag(true)
            navigate(`/punchcards/${data.id}`)
        } else {
            const errorLis = data.errors.map( e => <li>{e}</li>)
            setErrors(errorLis)
        }
        } 
    )}


    const addCustomer = (customer) => {
        fetch('/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(resp => resp.json())
    .then(data => {
        if(!data.errors) {
            setCustomers([...customers, data])
            setNewId(data.id)
            setErrors([])
            setFormFlag(false)
        } else {
            const errorLis = data.errors.map(e => <li>{e}</li>)
            setErrors(errorLis)
        }
        })
    }

 

    const editPunchcard = (punchcard) => {
        fetch(`/punchcards/${punchcard.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedPunchcard(data))
    }

    const editPunchCount = (punchcard) => {
        fetch(`/punchcards/${punchcard.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedPunchcard(data))
    }

    const handleEditedPunchcard = (editedPunchcard) => {
        const updatedPunchcard = punchcards.map((p) => {
          if (p.id === editedPunchcard.id) {
            return editedPunchcard
          }
          return p 
        })
        setPunchcards(updatedPunchcard);
      }

      const deletePunchcard = (id) => {
        fetch(`/customers/${id}`, {
          method: 'DELETE',
        })
        .then(() => {
          const updatedCustomers = customers.filter(c => c.id !== parseInt(id))
          setCustomers(updatedCustomers)
          navigate('/customers')
        })
        .catch((error) => {
          console.error(error)
          // Display an error message to the user
        })
      }

 
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser(null)
        setLoggedIn(false)
        setPunchcards([])
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  return (

    <UserContext.Provider value={{ user, login, logout, signup, loggedIn, punchcards, addPunchcard, deletePunchcard, editPunchcard, customers, addCustomer, newId, editPunchCount, errors, formFlag }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }

