import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState({
      customers: []
    }) 
    const [loggedIn, setLoggedIn] = useState(false) 
    const [ allCustomers, setAllCustomers ] = useState([])
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])

    const [requestCount, setRequestCount] = useState(true);

    const navigate = useNavigate()
  
    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            if (data.errors) {
                setLoggedIn(false)
            } else {
              getAllCustomers()
              setLoggedIn(true)
            }
        })    
    }, [requestCount])

   const getAllCustomers = () => {
      fetch('/customers')
      .then(resp => resp.json())
      .then(data => setAllCustomers(data))
   }

      // ADD PUNCHCARD
   const addPunchcard = (punchcard) => {
    fetch('/punchcards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(punchcard)
    })
    .then(resp => resp.json())
    .then(data => {
        if (!data.errors) {
         
            // setUser({
            //   ...user,
            //   punchcards: [...user.punchcards, data]
            // })

        
            setFormFlag(false)
            navigate(`/customers/${data.customer_id}`)
            setErrors([])
        } else {
            const errorLis = data.errors.map( e => <li>{e}</li>)
            setErrors(errorLis)
        }
        setRequestCount(!requestCount)
    }) 
}

// ADD CUSTOMER

    const addCustomer = (customer) => {
        fetch('/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(resp => resp.json())
    .then(data => {
        if (!data.errors) {  
            setAllCustomers([
              ...allCustomers, data
            ])
            navigate(`/customers/${data.id}`)
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
        .then((data) => console.log(data))
    }

    const handleEditedCustomer = (editedCustomer) => {
      const updatedCustomers = allCustomers.map((p) =>
        p.id === editedCustomer.id ? editedCustomer : p
      )
      console.log(updatedCustomers)
      setAllCustomers([...allCustomers, updatedCustomers])
      // setRequestCount(!requestCount)
    }


    const deleteCustomer = (id) => {
      fetch(`/customers/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUser({
            ...user,
            customers: user.customers.filter((c) => c.id !== parseInt(id)),
          });
          navigate("/customers");
        })
        .catch((error) => {
          console.error(error);
        })
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

         const updatedPunchcards = user.punchcards.map((p) => {
         if (p.id === editedPunchcard.id) {
           return editedPunchcard;
         }
         return p
       })
       setUser({ ...user, punchcards: updatedPunchcards })
       setRequestCount(!requestCount)
      }

 
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser({
          customers: []
        })
        setLoggedIn(false)
        
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  

  return (

    <UserContext.Provider value={{ 
      user, 
      allCustomers, 
      login, 
      logout, 
      signup, 
      loggedIn, 
      addPunchcard, 
      editPunchCount, 
      deleteCustomer,
      addCustomer,
      errors, 
      formFlag, 
      editCustomerName
      }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }