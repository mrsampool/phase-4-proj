import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState(null) 
    const [loggedIn, setLoggedIn] = useState(false) 
    const [punchcards, setPunchcards] = useState([])
    const [customers, setCustomers] = useState([])
    const [newId, setNewId] = useState(null)
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()
 
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
    }, [loggedIn])
    
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
            setErrors([])
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

    const editCustomerName = (customer) => {
        fetch(`/customers/${customer.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedCustomer(data))
    }

    const handleEditedCustomer = (editedCustomer) => {
        const updatedCustomer = customers.map((p) => {
          if (p.id === editedCustomer.id) {
            return editedCustomer
          }
          return p 
        })
        setCustomers(updatedCustomer);
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

 
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
        console.log("loggied in")
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

    <UserContext.Provider value={{ user, login, logout, signup, loggedIn, punchcards, addPunchcard, deletePunchcard, editPunchcard, customers, addCustomer, newId, editPunchCount, errors, formFlag, editCustomerName }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }