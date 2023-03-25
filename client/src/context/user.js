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

    const navigate = useNavigate()

    // console.log(customers)
    // console.log(user)

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // gets userdata from backend, then sets it to global state
            setUser(data)
            setPunchcards(data.punchcards)
            setCustomers(data.customers)
           //logged in flag depending whether or not there is an error
            if (data.errors) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // a fetch in a fetch
                // fetchPunchcards()
            }
        })    
    }, [])
    
    // below fetch not necessary?
    // const fetchPunchcards = () => {
    //     fetch('/punchcards')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setPunchcards(data)
    //     })
    // }

    const addPunchcard = (punchcard) => {
            fetch('/punchcards', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then(data => {
            setPunchcards([...punchcards, data])
            navigate(`/punchcards/${data.id}`)
        })
    }

    const addCustomer = (customer) => {
        fetch('/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(resp => resp.json())
    .then(data => {
        setCustomers([...customers, data])
        setNewId(data.id)
    })
}

    const editPunchcard = (punchcard) => {
        console.log(punchcard)
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
           return editedPunchcard;
         }
         return punchcards
       })
       setPunchcards(updatedPunchcard);
     }

    const deletePunchcard = (id) => {
        console.log(id)
        fetch(`/punchcards/${id}`, {
            method: 'DELETE',
        })
        .then(() => onPunchcardDelete(id))
        .catch(error => console.log(error))
    }
    
    const onPunchcardDelete = (id) => {
        const updatedPunchcards = punchcards.filter((w) => w.id !== id)
        console.log(updatedPunchcards)
        setPunchcards(updatedPunchcards)
        // fetchPunchcards()
        navigate('/punchcards')
      }



    const login = (user) => {
        setUser(user)
        // fetchPunchcards()
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

    <UserContext.Provider value={{ user, login, logout, signup, loggedIn, punchcards, addPunchcard, deletePunchcard, editPunchcard, customers, addCustomer, newId }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }

